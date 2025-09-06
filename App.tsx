import React, { useState, useRef } from 'react';
import ControlsPanel from './components/ControlsPanel';
import PreviewDisplay from './components/PreviewDisplay';
import { WandIcon } from './components/icons';
import type { DesignOptions, ImageMode } from './types';
import { generateMockup as generateMockupFromApi } from './services/geminiService';
import { generateDesignPng, generateEngravingSvg, generateTextOnlySvg, generateTextOnlyPng } from './services/svgService';

const App: React.FC = () => {
  const [design, setDesign] = useState<DesignOptions>({
    productType: 'tshirt',
    logo: null,
    text: 'YOUR TEXT HERE',
    textColor: '#B91C1C',
    productColor: '#FFFFFF',
    style: 'classic',
    pose: 'standing',
    audience: 'woman_30s_casual',
    font: 'impact',
    textStyle: 'outline',
    gradientStartColor: '#2563EB',
    gradientEndColor: '#B91C1C',
    bagMaterial: 'canvas',
    frameStyle: 'classic_ornate',
    frameModel: 'elegant_woman_street',
    mugStyle: 'classic_ceramic',
    mugModel: 'woman_cafe',
    sipperGlassStyle: 'classic_can_shape',
    sipperGlassModel: 'woman_cafe_elegant',
    tumblerStyle: 'stainless_steel',
    tumblerModel: 'person_gym',
    halloweenTumblerStyle: 'glossy_black',
    halloweenTumblerSetting: 'spooky_table',
    tumblerTrioStyle: 'glossy_white',
    tumblerTrioSetting: 'marble_countertop',
    engravingMaterial: 'wood_plaque',
    phoneCaseStyle: 'glossy',
    phoneCaseModel: 'person_holding',
    stickerStyle: 'die_cut_glossy',
    stickerSetting: 'on_laptop',
    posterStyle: 'glossy_finish',
    posterSetting: 'framed_on_wall',
    walletStyle: 'bifold',
    walletModel: 'person_holding',
    capStyle: 'structured_baseball',
    capModel: 'person_forwards',
    pillowStyle: 'square_cotton',
    pillowSetting: 'on_sofa',
    flatLayStyle: 'minimalist_neutral',
    puzzleStyle: 'rectangle_cardboard',
    puzzleSetting: 'on_wooden_table',
  });
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imageMode, setImageMode] = useState<ImageMode>('fit_blur');

  const logoFileRef = useRef<File | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const input = e.target; // Keep a reference to the input element

    // Always clear previous error on a new attempt
    setError(null);

    if (!file) {
      // If the user cancels the file dialog, 'file' will be undefined.
      // We clear the logo in case one was previously selected.
      setDesign(d => ({ ...d, logo: null }));
      logoFileRef.current = null;
      return;
    }

    // 1. File Type Validation
    const ALLOWED_TYPES = ['image/png', 'image/jpeg'];
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Unsupported file type. Please upload a PNG or JPG image.');
      setDesign(d => ({ ...d, logo: null }));
      logoFileRef.current = null;
      if (input) input.value = ''; // Reset file input
      return;
    }

    // 2. File Size Validation
    const MAX_FILE_SIZE_BYTES = 4 * 1024 * 1024; 
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError('File size exceeds 4MB. Please upload a smaller image.');
      setDesign(d => ({ ...d, logo: null }));
      logoFileRef.current = null;
      if (input) input.value = ''; // Reset file input
      return;
    }

    // 3. File Read with Error Handling
    const reader = new FileReader();
    
    reader.onload = (event) => {
      // On successful read, update state
      logoFileRef.current = file;
      setDesign(d => ({ ...d, logo: event.target?.result as string }));
    };
    
    reader.onerror = () => {
      // On read error, set error and reset state
      setError('Could not read the file. It may be corrupt. Please try another image.');
      setDesign(d => ({ ...d, logo: null }));
      logoFileRef.current = null;
      if (input) input.value = ''; // Reset file input
    };
    
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!logoFileRef.current) {
      setError('Please upload a logo image.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    // Branch for laser engraving to generate a local PNG preview
    if (design.productType === 'laser_engraving') {
      try {
        // We use generateDesignPng to get a visual preview, not the final engraving file
        const pngDataUrl = await generateDesignPng(design);
        // The component expects a base64 string without the data URL prefix
        const base64Image = pngDataUrl.split(',')[1];
        setGeneratedImage(base64Image);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred while generating the preview.');
      } finally {
        setIsLoading(false);
      }
      return; // Stop execution here for engraving
    }

    // Existing logic for Gemini API mockups
    try {
      // Pass the logo file and the entire design options object.
      const result = await generateMockupFromApi(
        logoFileRef.current, 
        design
        );
      setGeneratedImage(result);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDownloadLogoPng = () => {
    if (!design.logo) {
      setError('No logo to download.');
      return;
    }
    try {
      setError(null);
      const a = document.createElement('a');
      a.href = design.logo;
      // Use the original filename if available, otherwise default
      a.download = logoFileRef.current?.name ?? 'logo.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err: any) {
      console.error('Error downloading logo:', err);
      setError(err.message || 'Failed to download logo.');
    }
  };

  const handleDownloadTextSvg = async () => {
    if (!design.logo) {
      setError('Cannot generate text SVG without a logo for layout.');
      return;
    }
    if (!design.text.trim()) {
      setError('No text to generate SVG for.');
      return;
    }
    try {
      setError(null);
      const svgString = await generateTextOnlySvg(design);
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'design_text.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error('Error generating text SVG:', err);
      setError(err.message || 'Failed to generate text SVG file.');
    }
  };
  
  const handleDownloadTextPng = async () => {
    if (!design.logo) {
      setError('Cannot generate text PNG without a logo for layout.');
      return;
    }
    if (!design.text.trim()) {
      setError('No text to generate PNG for.');
      return;
    }
    try {
      setError(null);
      const pngDataUrl = await generateTextOnlyPng(design);
      
      const a = document.createElement('a');
      a.href = pngDataUrl;
      a.download = 'design_text.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err: any) {
      console.error('Error generating text PNG:', err);
      setError(err.message || 'Failed to generate text PNG file.');
    }
  };

  const handleDownloadEngravingSvg = async () => {
    if (!design.logo) {
      setError('Cannot generate SVG without a logo.');
      return;
    }
    try {
      setError(null);
      const svgString = await generateEngravingSvg(design); // Call the new function
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'engraving_design.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error('Error generating engraving SVG:', err);
      setError(err.message || 'Failed to generate engraving SVG file.');
    }
  };

  const handleDownloadMockup = () => {
    if (!generatedImage) {
      setError('No mockup image to download.');
      return;
    }
    try {
      setError(null);
      const a = document.createElement('a');
      a.href = `data:image/png;base64,${generatedImage}`;
      a.download = `mockup_${design.productType}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err: any) {
      console.error('Error downloading mockup:', err);
      setError(err.message || 'Failed to download mockup image.');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <WandIcon className="w-10 h-10 text-indigo-400" />
            <h1 className="text-4xl font-extrabold tracking-tight">AI Mockup Generator</h1>
          </div>
          <p className="mt-2 text-lg text-gray-400">
            Bring your designs to life with the power of Gemini
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-8">
          <ControlsPanel 
            design={design} 
            setDesign={setDesign}
            onGenerate={handleGenerate} 
            isLoading={isLoading}
            handleLogoChange={handleLogoChange}
            imageMode={imageMode}
            setImageMode={setImageMode}
          />
          <PreviewDisplay 
            generatedImage={generatedImage} 
            isLoading={isLoading}
            error={error}
            productType={design.productType}
            onDownloadLogoPng={handleDownloadLogoPng}
            onDownloadTextSvg={handleDownloadTextSvg}
            onDownloadTextPng={handleDownloadTextPng}
            onDownloadEngravingSvg={handleDownloadEngravingSvg}
            onDownloadMockup={handleDownloadMockup}
            imageMode={imageMode}
          />
        </main>
      </div>
    </div>
  );
};

export default App;