import React, { useRef } from 'react';
import type { DesignOptions, SetDesignOptions, TextStyle, ImageMode, DesignStyle, ModelPose, ModelAudience, TshirtFont, BagMaterial, WalletStyle, WalletModel, FrameStyle, FrameModel, MugStyle, MugModel, SipperGlassStyle, SipperGlassModel, TumblerStyle, TumblerModel, HalloweenTumblerStyle, HalloweenTumblerSetting, TumblerTrioStyle, TumblerTrioSetting, EngravingMaterial, PhoneCaseStyle, PhoneCaseModel, StickerStyle, StickerSetting, PosterStyle, PosterSetting, CapStyle, CapModel, PillowStyle, PillowSetting, FlatLayStyle, PuzzleStyle, PuzzleSetting, ProductType } from '../types';
import { PRODUCT_COLORS, DESIGN_STYLES, MODEL_POSES, MODEL_AUDIENCES, TSHIRT_FONTS, PRODUCT_TYPES, BAG_MATERIALS, TEXT_STYLES, FRAME_STYLES, FRAME_MODELS, MUG_STYLES, MUG_MODELS, SIPPER_GLASS_STYLES, SIPPER_GLASS_MODELS, TUMBLER_STYLES, TUMBLER_MODELS, HALLOWEEN_TUMBLER_STYLES, HALLOWEEN_TUMBLER_SETTINGS, TUMBLER_TRIO_STYLES, TUMBLER_TRIO_SETTINGS, ENGRAVING_MATERIALS, PHONE_CASE_STYLES, PHONE_CASE_MODELS, STICKER_STYLES, STICKER_SETTINGS, POSTER_STYLES, POSTER_SETTINGS, WALLET_STYLES, WALLET_MODELS, CAP_STYLES, CAP_MODELS, PILLOW_STYLES, PILLOW_SETTINGS, FLAT_LAY_STYLES, PUZZLE_STYLES, PUZZLE_SETTINGS } from '../constants';
import { UploadIcon, TrashIcon, WandIcon, FitIcon, FitBlurIcon, FitTransparentIcon, CropIcon, StretchIcon } from './icons';

interface ControlsPanelProps {
  design: DesignOptions;
  setDesign: SetDesignOptions;
  onGenerate: () => void;
  isLoading: boolean;
  handleLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageMode: ImageMode;
  setImageMode: React.Dispatch<React.SetStateAction<ImageMode>>;
}

// Helper function to generate CSS for text style previews
const getTextStylePreview = (styleId: TextStyle): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
        fontFamily: 'Impact, sans-serif',
        fontSize: '1.5rem',
        color: '#E5E7EB', // text-gray-200
        display: 'block',
        height: '2.5rem',
        lineHeight: '2.5rem',
        userSelect: 'none',
        fontWeight: 'bold',
    };
    switch (styleId) {
        case 'outline': return { ...baseStyle, WebkitTextStroke: '1.5px black', color: '#E0E7FF' };
        case 'shadow': return { ...baseStyle, textShadow: '2px 2px 4px rgba(0,0,0,0.8)' };
        case 'glow': return { ...baseStyle, color: '#fff', textShadow: '0 0 5px #fff, 0 0 10px #A78BFA, 0 0 15px #A78BFA' };
        case 'neon': return { ...baseStyle, color: '#F9A8D4', textShadow: '0 0 2px #fff, 0 0 5px #F472B6, 0 0 10px #F472B6, 0 0 15px #E879F9, 0 0 20px #E879F9' };
        case '3d': return { ...baseStyle, color: '#D1D5DB', textShadow: '1px 1px 0 #9CA3AF, 2px 2px 0 #6B7280, 3px 3px 0 #4B5563, 4px 4px 5px rgba(0,0,0,0.5)' };
        case 'metallic': return { ...baseStyle, background: 'linear-gradient(180deg, #E5E7EB, #D1D5DB, #9CA3AF, #D1D5DB, #E5E7EB)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' };
        case 'chrome': return { ...baseStyle, background: 'linear-gradient(0deg, #6B7280 0%, #D1D5DB 30%, #F9FAFB 50%, #D1D5DB 70%, #6B7280 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextStroke: '0.5px #4B5563' };
        case 'gradient': return { ...baseStyle, background: 'linear-gradient(45deg, #A78BFA, #F472B6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' };
        case 'pastel_rainbow': return { ...baseStyle, background: 'linear-gradient(90deg, #ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' };
        case 'distressed': return { ...baseStyle, fontFamily: '"Special Elite", cursive', color: '#9CA3AF', textShadow: '1px 1px 1px rgba(0,0,0,0.2)' };
        case 'fire': return { ...baseStyle, background: 'linear-gradient(180deg, #FBBF24, #F97316, #EF4444, #B91C1C)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textShadow: '0 0 5px #F59E0B, 0 0 10px #D97706' };
        case 'ice': return { ...baseStyle, color: '#E0F2FE', WebkitTextStroke: '1px #38BDF8', textShadow: '0 0 5px #7DD3FC, 1px 1px 2px rgba(0,0,0,0.3)' };
        case 'wooden': return { ...baseStyle, background: 'linear-gradient(45deg, #854d0e, #a37b4c, #854d0e)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textShadow: '2px 2px 3px rgba(0,0,0,0.5)' };
        case 'comic': return { ...baseStyle, fontFamily: '"Bangers", cursive', WebkitTextStroke: '2px black', color: '#38BDF8', letterSpacing: '2px' };
        case 'glitch': return { ...baseStyle, color: '#E5E7EB', textShadow: '2px 0 0 #F472B6, -2px 0 0 #38BDF8, 0 0 5px #9333EA' };
        case 'script': return { ...baseStyle, fontFamily: '"Dancing Script", cursive' };
        case 'varsity': return { ...baseStyle, fontFamily: '"Archivo Black", sans-serif', WebkitTextStroke: '2px black', color: '#FBBF24' };
        case 'none':
        default: return { ...baseStyle, fontWeight: 'normal' };
    }
};

const imageModes: { id: ImageMode, name: string, icon: React.FC<{className?: string}> }[] = [
    { id: 'fit_blur', name: 'Adjust Blur', icon: FitBlurIcon },
    { id: 'fit_transparent', name: 'Adjust Transparency', icon: FitTransparentIcon },
    { id: 'crop', name: 'Crop', icon: CropIcon },
    { id: 'stretch', name: 'Stretch', icon: StretchIcon },
];


const ControlsPanel: React.FC<ControlsPanelProps> = ({ design, setDesign, onGenerate, isLoading, handleLogoChange, imageMode, setImageMode }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const removeLogo = () => {
    setDesign(d => ({ ...d, logo: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const femaleAudiences = MODEL_AUDIENCES.filter(a => a.id.includes('woman'));
  const maleAudiences = MODEL_AUDIENCES.filter(a => a.id.includes('man') || a.id.includes('male'));

  const getProductColorLabel = () => {
    switch (design.productType) {
        case 'tshirt': return 'T-Shirt Color';
        case 'sweatshirt': return 'Sweatshirt Color';
        case 'hoodie': return 'Hoodie Color';
        case 'bag': return 'Bag Color';
        case 'wallet': return 'Wallet Color';
        case 'cap': return 'Cap Color';
        case 'pillow': return 'Pillow Color';
        case 'flat_lay': return 'T-Shirt Color';
        case 'wooden_frame': return 'Frame Color';
        case 'tea_mug': return 'Mug Color';
        case 'sipper_glass': return 'Liquid Color';
        case 'tumbler_wrap': return 'Tumbler Color';
        case 'halloween_tumbler': return 'Tumbler Color';
        case 'tumbler_trio': return 'Tumbler Color';
        case 'phone_case': return 'Case Color';
        // These product types don't have a color picker
        case 'sticker':
        case 'poster':
        case 'laser_engraving':
        case 'jigsaw_puzzle':
 return null; 
        default: return 'Product Color';
    }
  }
  
  const productColorLabel = getProductColorLabel();

  return (
    <div className="w-full lg:w-1/3 xl:w-1/4 bg-gray-800 p-6 rounded-lg shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-white">Customize Your Design</h2>

      {/* Product Type */}
      <div>
        <label htmlFor="product-type" className="block text-sm font-medium text-gray-300">Product Type</label>
        <select
          id="product-type"
          value={design.productType}
          onChange={(e) => setDesign(d => ({ ...d, productType: e.target.value as ProductType }))}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          {PRODUCT_TYPES.map(type => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>


      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Logo / Artwork</label>
        <div className="mt-1 flex items-center justify-between p-3 border-2 border-dashed border-gray-600 rounded-md">
            {design.logo ? (
                <div className="flex items-center gap-4">
                    <img src={design.logo} alt="Logo preview" className="h-12 w-12 object-contain rounded-md bg-white p-1" />
                    <span className="text-sm text-gray-400 truncate">logo.png</span>
                     <button onClick={removeLogo} className="text-red-400 hover:text-red-300">
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            ) : (
                <div className="space-y-1 text-center w-full">
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="group flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                        <UploadIcon className="w-10 h-10 mb-2"/>
                        <span className="font-medium">Upload an image</span>
                        <span className="text-xs">PNG, JPG up to 4MB</span>
                    </button>
                </div>
            )}
           
        </div>
        <input ref={fileInputRef} type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleLogoChange} />
      </div>

      {/* Text controls - not for frame, mug, or sipper glass */}
      {design.productType !== 'wooden_frame' && design.productType !== 'tea_mug' && design.productType !== 'sipper_glass' && design.productType !== 'tumbler_wrap' && design.productType !== 'halloween_tumbler' && design.productType !== 'tumbler_trio' && design.productType !== 'jigsaw_puzzle' && (
        <>
            {/* Custom Text */}
            <div>
                <label htmlFor="custom-text" className="block text-sm font-medium text-gray-300">
                Text
                </label>
                <div className="mt-1">
                <input
                    type="text"
                    id="custom-text"
                    value={design.text}
                    onChange={(e) => setDesign(d => ({ ...d, text: e.target.value }))}
                    placeholder="Your awesome text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
                </div>
            </div>
            
            {/* Font Family */}
            <div>
              <label htmlFor="font-family" className="block text-sm font-medium text-gray-300">Font</label>
              <select
                id="font-family"
                value={design.font}
                onChange={(e) => setDesign(d => ({ ...d, font: e.target.value as TshirtFont }))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                {TSHIRT_FONTS.map(font => (
                  <option key={font.id} value={font.id} style={{ fontFamily: `'${font.name}', sans-serif`, fontSize: '1.2rem', backgroundColor: '#374151' }}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Text Style */}
            <div>
              <label htmlFor="text-style" className="block text-sm font-medium text-gray-300">Text Style</label>
              <select
                id="text-style"
                value={design.textStyle}
                onChange={(e) => setDesign(d => ({ ...d, textStyle: e.target.value as TextStyle }))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                {TEXT_STYLES.map(style => {
                    const optionStyle: React.CSSProperties = { ...getTextStylePreview(style.id) };
                    
                    // Override styles for dropdown option compatibility
                    optionStyle.backgroundColor = '#374151';
                    optionStyle.height = 'auto';
                    optionStyle.lineHeight = 'normal';
                    optionStyle.display = 'block';
                    optionStyle.padding = '4px 8px';
                    optionStyle.fontSize = '1.2rem';

                    // Fallback for text-clipping styles which don't work in <option>
                    if (optionStyle.color === 'transparent') {
                        optionStyle.color = '#E5E7EB'; // text-gray-200
                        optionStyle.background = 'none';
                    }

                    return (
                    <option
                        key={style.id}
                        value={style.id}
                        style={optionStyle}
                    >
                        {style.name}
                    </option>
                    );
                })}
              </select>
            </div>


            {/* Conditional Color Pickers */}
            {design.textStyle === 'gradient' ? (
              <>
                <div>
                  <label htmlFor="gradient-start-color" className="block text-sm font-medium text-gray-300">Gradient Start</label>
                  <select
                    id="gradient-start-color"
                    value={design.gradientStartColor}
                    onChange={(e) => setDesign(d => ({ ...d, gradientStartColor: e.target.value }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                  >
                    {PRODUCT_COLORS.map(color => (
                      <option key={color.name} value={color.value}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="gradient-end-color" className="block text-sm font-medium text-gray-300">Gradient End</label>
                  <select
                    id="gradient-end-color"
                    value={design.gradientEndColor}
                    onChange={(e) => setDesign(d => ({ ...d, gradientEndColor: e.target.value }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                  >
                    {PRODUCT_COLORS.map(color => (
                      <option key={color.name} value={color.value}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <>
                {design.textStyle !== 'pastel_rainbow' && (
                  <div>
                    <label htmlFor="text-color" className="block text-sm font-medium text-gray-300">Text Color</label>
                    <select
                      id="text-color"
                      value={design.textColor}
                      onChange={(e) => setDesign(d => ({ ...d, textColor: e.target.value }))}
                      className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                    >
                      {PRODUCT_COLORS.map(color => (
                        <option key={color.name} value={color.value}>
                          {color.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}
        </>
      )}


      {/* Conditional T-Shirt/Sweatshirt/Hoodie Options */}
      {(design.productType === 'tshirt' || design.productType === 'sweatshirt' || design.productType === 'hoodie') && (
        <>
          {/* Design Style */}
          <div>
            <label htmlFor="design-style" className="block text-sm font-medium text-gray-300">Design Style</label>
            <select
              id="design-style"
              value={design.style}
              onChange={(e) => setDesign(d => ({ ...d, style: e.target.value as DesignStyle }))}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              {DESIGN_STYLES.map(style => (
                <option key={style.id} value={style.id}>
                  {style.name}
                </option>
              ))}
            </select>
          </div>

          {/* Model Pose */}
          <div>
            <label htmlFor="model-pose" className="block text-sm font-medium text-gray-300">Model Pose</label>
            <select
              id="model-pose"
              value={design.pose}
              onChange={(e) => setDesign(d => ({ ...d, pose: e.target.value as ModelPose }))}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              {MODEL_POSES.map(pose => (
                <option key={pose.id} value={pose.id}>
                  {pose.name}
                </option>
              ))}
            </select>
          </div>

          {/* Model Audience */}
          <div>
            <label htmlFor="model-audience" className="block text-sm font-medium text-gray-300">Model</label>
            <select
              id="model-audience"
              value={design.audience}
              onChange={(e) => setDesign(d => ({ ...d, audience: e.target.value as ModelAudience }))}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              <optgroup label="Female">
                {femaleAudiences.map(audience => (
                  <option key={audience.id} value={audience.id}>
                    {audience.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Male">
                {maleAudiences.map(audience => (
                  <option key={audience.id} value={audience.id}>
                    {audience.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </>
      )}

      {/* Conditional Bag Options */}
      {design.productType === 'bag' && (
        <div>
          <label htmlFor="bag-material" className="block text-sm font-medium text-gray-300">Bag Material</label>
          <select
            id="bag-material"
            value={design.bagMaterial}
            onChange={(e) => setDesign(d => ({ ...d, bagMaterial: e.target.value as BagMaterial }))}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            {BAG_MATERIALS.map(material => (
              <option key={material.id} value={material.id}>
                {material.name}
              </option>
            ))}
          </select>
        </div>
      )}
      
      {/* Conditional Wallet Options */}
      {design.productType === 'wallet' && (
        <>
            <div>
                <label htmlFor="wallet-style" className="block text-sm font-medium text-gray-300">Wallet Style</label>
                <select
                    id="wallet-style"
                    value={design.walletStyle}
                    onChange={(e) => setDesign(d => ({ ...d, walletStyle: e.target.value as WalletStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {WALLET_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="wallet-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="wallet-model"
                    value={design.walletModel}
                    onChange={(e) => setDesign(d => ({ ...d, walletModel: e.target.value as WalletModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {WALLET_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Cap Options */}
      {design.productType === 'cap' && (
        <>
            <div>
                <label htmlFor="cap-style" className="block text-sm font-medium text-gray-300">Cap Style</label>
                <select
                    id="cap-style"
                    value={design.capStyle}
                    onChange={(e) => setDesign(d => ({ ...d, capStyle: e.target.value as CapStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {CAP_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="cap-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="cap-model"
                    value={design.capModel}
                    onChange={(e) => setDesign(d => ({ ...d, capModel: e.target.value as CapModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {CAP_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Pillow Options */}
      {design.productType === 'pillow' && (
        <>
            <div>
                <label htmlFor="pillow-style" className="block text-sm font-medium text-gray-300">Pillow Style</label>
                <select
                    id="pillow-style"
                    value={design.pillowStyle}
                    onChange={(e) => setDesign(d => ({ ...d, pillowStyle: e.target.value as PillowStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {PILLOW_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="pillow-setting" className="block text-sm font-medium text-gray-300">Setting</label>
                <select
                    id="pillow-setting"
                    value={design.pillowSetting}
                    onChange={(e) => setDesign(d => ({ ...d, pillowSetting: e.target.value as PillowSetting }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {PILLOW_SETTINGS.map(setting => (
                        <option key={setting.id} value={setting.id}>
                            {setting.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Flat Lay Options */}
      {design.productType === 'flat_lay' && (
        <>
            <div>
                <label htmlFor="flat-lay-style" className="block text-sm font-medium text-gray-300">Flat Lay Style</label>
                <select
                    id="flat-lay-style"
                    value={design.flatLayStyle}
                    onChange={(e) => setDesign(d => ({ ...d, flatLayStyle: e.target.value as FlatLayStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {FLAT_LAY_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            
            {/* For flat lay, the t-shirt design styles are still relevant */}
            <div>
                <label htmlFor="design-style" className="block text-sm font-medium text-gray-300">T-Shirt Design Style</label>
                <select
                  id="design-style"
                  value={design.style}
                  onChange={(e) => setDesign(d => ({ ...d, style: e.target.value as DesignStyle }))}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  {DESIGN_STYLES.map(style => (
                    <option key={style.id} value={style.id}>
                      {style.name}
                    </option>
                  ))}
                </select>
              </div>
        </>
      )}

      {/* Conditional Frame Options */}
      {design.productType === 'wooden_frame' && (
        <>
            <div>
                <label htmlFor="frame-style" className="block text-sm font-medium text-gray-300">Frame Style</label>
                <select
                    id="frame-style"
                    value={design.frameStyle}
                    onChange={(e) => setDesign(d => ({ ...d, frameStyle: e.target.value as FrameStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {FRAME_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="frame-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="frame-model"
                    value={design.frameModel}
                    onChange={(e) => setDesign(d => ({ ...d, frameModel: e.target.value as FrameModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {FRAME_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Mug Options */}
      {design.productType === 'tea_mug' && (
        <>
            <div>
                <label htmlFor="mug-style" className="block text-sm font-medium text-gray-300">Mug Style</label>
                <select
                    id="mug-style"
                    value={design.mugStyle}
                    onChange={(e) => setDesign(d => ({ ...d, mugStyle: e.target.value as MugStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {MUG_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="mug-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="mug-model"
                    value={design.mugModel}
                    onChange={(e) => setDesign(d => ({ ...d, mugModel: e.target.value as MugModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {MUG_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Sipper Glass Options */}
      {design.productType === 'sipper_glass' && (
        <>
            <div>
                <label htmlFor="sipper-style" className="block text-sm font-medium text-gray-300">Glass Style</label>
                <select
                    id="sipper-style"
                    value={design.sipperGlassStyle}
                    onChange={(e) => setDesign(d => ({ ...d, sipperGlassStyle: e.target.value as SipperGlassStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {SIPPER_GLASS_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="sipper-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="sipper-model"
                    value={design.sipperGlassModel}
                    onChange={(e) => setDesign(d => ({ ...d, sipperGlassModel: e.target.value as SipperGlassModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {SIPPER_GLASS_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Tumbler Wrap Options */}
      {design.productType === 'tumbler_wrap' && (
        <>
            <div>
                <label htmlFor="tumbler-style" className="block text-sm font-medium text-gray-300">Tumbler Style</label>
                <select
                    id="tumbler-style"
                    value={design.tumblerStyle}
                    onChange={(e) => setDesign(d => ({ ...d, tumblerStyle: e.target.value as TumblerStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {TUMBLER_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="tumbler-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="tumbler-model"
                    value={design.tumblerModel}
                    onChange={(e) => setDesign(d => ({ ...d, tumblerModel: e.target.value as TumblerModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {TUMBLER_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Halloween Tumbler Options */}
      {design.productType === 'halloween_tumbler' && (
        <>
            <div>
                <label htmlFor="halloween-tumbler-style" className="block text-sm font-medium text-gray-300">Tumbler Style</label>
                <select
                    id="halloween-tumbler-style"
                    value={design.halloweenTumblerStyle}
                    onChange={(e) => setDesign(d => ({ ...d, halloweenTumblerStyle: e.target.value as HalloweenTumblerStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {HALLOWEEN_TUMBLER_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="halloween-tumbler-setting" className="block text-sm font-medium text-gray-300">Setting</label>
                <select
                    id="halloween-tumbler-setting"
                    value={design.halloweenTumblerSetting}
                    onChange={(e) => setDesign(d => ({ ...d, halloweenTumblerSetting: e.target.value as HalloweenTumblerSetting }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {HALLOWEEN_TUMBLER_SETTINGS.map(setting => (
                        <option key={setting.id} value={setting.id}>
                            {setting.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Tumbler Trio Options */}
      {design.productType === 'tumbler_trio' && (
        <>
            <div>
                <label htmlFor="tumbler-trio-style" className="block text-sm font-medium text-gray-300">Tumbler Style</label>
                <select
                    id="tumbler-trio-style"
                    value={design.tumblerTrioStyle}
                    onChange={(e) => setDesign(d => ({ ...d, tumblerTrioStyle: e.target.value as TumblerTrioStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {TUMBLER_TRIO_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="tumbler-trio-setting" className="block text-sm font-medium text-gray-300">Setting</label>
                <select
                    id="tumbler-trio-setting"
                    value={design.tumblerTrioSetting}
                    onChange={(e) => setDesign(d => ({ ...d, tumblerTrioSetting: e.target.value as TumblerTrioSetting }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {TUMBLER_TRIO_SETTINGS.map(setting => (
                        <option key={setting.id} value={setting.id}>
                            {setting.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Engraving Options */}
      {design.productType === 'laser_engraving' && (
        <div>
            <label htmlFor="engraving-material" className="block text-sm font-medium text-gray-300">Material</label>
            <select
                id="engraving-material"
                value={design.engravingMaterial}
                onChange={(e) => setDesign(d => ({ ...d, engravingMaterial: e.target.value as EngravingMaterial }))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
                {ENGRAVING_MATERIALS.map(material => (
                    <option key={material.id} value={material.id}>
                        {material.name}
                    </option>
                ))}
            </select>
        </div>
      )}

      {/* Conditional Phone Case Options */}
      {design.productType === 'phone_case' && (
        <>
            <div>
                <label htmlFor="phone-case-style" className="block text-sm font-medium text-gray-300">Case Style</label>
                <select
                    id="phone-case-style"
                    value={design.phoneCaseStyle}
                    onChange={(e) => setDesign(d => ({ ...d, phoneCaseStyle: e.target.value as PhoneCaseStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {PHONE_CASE_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="phone-case-model" className="block text-sm font-medium text-gray-300">Model & Setting</label>
                <select
                    id="phone-case-model"
                    value={design.phoneCaseModel}
                    onChange={(e) => setDesign(d => ({ ...d, phoneCaseModel: e.target.value as PhoneCaseModel }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {PHONE_CASE_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Sticker Options */}
      {design.productType === 'sticker' && (
        <>
            <div>
                <label htmlFor="sticker-style" className="block text-sm font-medium text-gray-300">Sticker Style</label>
                <select
                    id="sticker-style"
                    value={design.stickerStyle}
                    onChange={(e) => setDesign(d => ({ ...d, stickerStyle: e.target.value as StickerStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {STICKER_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="sticker-setting" className="block text-sm font-medium text-gray-300">Setting</label>
                <select
                    id="sticker-setting"
                    value={design.stickerSetting}
                    onChange={(e) => setDesign(d => ({ ...d, stickerSetting: e.target.value as StickerSetting }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {STICKER_SETTINGS.map(setting => (
                        <option key={setting.id} value={setting.id}>
                            {setting.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Poster Options */}
      {design.productType === 'poster' && (
        <>
            <div>
                <label htmlFor="poster-style" className="block text-sm font-medium text-gray-300">Poster Finish</label>
                <select
                    id="poster-style"
                    value={design.posterStyle}
                    onChange={(e) => setDesign(d => ({ ...d, posterStyle: e.target.value as PosterStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {POSTER_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="poster-setting" className="block text-sm font-medium text-gray-300">Setting</label>
                <select
                    id="poster-setting"
                    value={design.posterSetting}
                    onChange={(e) => setDesign(d => ({ ...d, posterSetting: e.target.value as PosterSetting }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {POSTER_SETTINGS.map(setting => (
                        <option key={setting.id} value={setting.id}>
                            {setting.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}

      {/* Conditional Jigsaw Puzzle Options */}
      {design.productType === 'jigsaw_puzzle' && (
        <>
            <div>
                <label htmlFor="puzzle-style" className="block text-sm font-medium text-gray-300">Puzzle Style</label>
                <select
                    id="puzzle-style"
                    value={design.puzzleStyle}
                    onChange={(e) => setDesign(d => ({ ...d, puzzleStyle: e.target.value as PuzzleStyle }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {PUZZLE_STYLES.map(style => (
                        <option key={style.id} value={style.id}>
                            {style.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="puzzle-setting" className="block text-sm font-medium text-gray-300">Setting</label>
                <select
                    id="puzzle-setting"
                    value={design.puzzleSetting}
                    onChange={(e) => setDesign(d => ({ ...d, puzzleSetting: e.target.value as PuzzleSetting }))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                    {PUZZLE_SETTINGS.map(setting => (
                        <option key={setting.id} value={setting.id}>
                            {setting.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
      )}
      
      {/* Logo Placement */}
      <div>
        <label htmlFor="logo-placement" className="block text-sm font-medium text-gray-300">Logo Placement</label>
        <select
          id="logo-placement"
          value={imageMode}
          onChange={(e) => setImageMode(e.target.value as ImageMode)}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          {imageModes.map(mode => (
            <option key={mode.id} value={mode.id}>
              {mode.name}
            </option>
          ))}
        </select>
      </div>


      {/* Product Color */}
      {productColorLabel && (
        <div>
          <label htmlFor="product-color" className="block text-sm font-medium text-gray-300">{productColorLabel}</label>
          <select
            id="product-color"
            value={design.productColor}
            onChange={(e) => setDesign(d => ({ ...d, productColor: e.target.value }))}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            {PRODUCT_COLORS.map(color => (
              <option key={color.name} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
      )}
      
       {/* Generate Button */}
       <div className="pt-4">
        <button
          onClick={onGenerate}
          disabled={isLoading || !design.logo}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <WandIcon className="w-5 h-5" />
              {design.productType === 'laser_engraving' ? 'Generate Preview' : 'Generate Mockup'}
            </>
          )}
        </button>
        {!design.logo && <p className="text-xs text-red-400 text-center mt-2">Please upload a logo to generate a mockup.</p>}
      </div>
    </div>
  );
};

export default ControlsPanel;