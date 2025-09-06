

import React from 'react';
import type { DesignStyle, ModelPose, ModelAudience, TshirtFont, ProductType, BagMaterial, TextStyle, FrameStyle, FrameModel, MugStyle, MugModel, SipperGlassStyle, SipperGlassModel, TumblerStyle, TumblerModel, HalloweenTumblerStyle, HalloweenTumblerSetting, TumblerTrioStyle, TumblerTrioSetting, EngravingMaterial, PhoneCaseStyle, PhoneCaseModel, StickerStyle, StickerSetting, PosterStyle, PosterSetting, WalletStyle, WalletModel, CapStyle, CapModel, PillowStyle, PillowSetting, FlatLayStyle, PuzzleStyle, PuzzleSetting } from './types';
import { TshirtIcon, SweatshirtIcon, HoodieIcon, BagIcon, FrameIcon, MugIcon, SipperGlassIcon, TumblerIcon, HalloweenTumblerIcon, TumblerTrioIcon, LaserIcon, PhoneCaseIcon, StickerIcon, PosterIcon, WalletIcon, CapIcon, PillowIcon, FlatLayIcon, PuzzleIcon } from './components/productIcons';

export const PRODUCT_COLORS = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#272727' },
  { name: 'Jet Black', value: '#111111' },
  { name: 'Grey', value: '#808080' },
  { name: 'Charcoal', value: '#4A4A4A' },
  { name: 'Silver', value: '#C0C0C0' },
  { name: 'Cream', value: '#FEF3C7' },
  { name: 'Beige', value: '#D2B48C' },
  { name: 'Red', value: '#B91C1C' },
  { name: 'Maroon', value: '#800000' },
  { name: 'Burgundy', value: '#9F1239' },
  { name: 'Rose', value: '#FB7185' },
  { name: 'Pink', value: '#F472B6' },
  { name: 'Hot Pink', value: '#D946EF' },
  { name: 'Light Pink', value: '#FBCFE8' },
  { name: 'Coral', value: '#FF7F50' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Bright Orange', value: '#F97316' },
  { name: 'Gold', value: '#FFD700' },
  { name: 'Yellow', value: '#FBBF24' },
  { name: 'Electric Lime', value: '#BEF264' },
  { name: 'Lime', value: '#A3E635' },
  { name: 'Green', value: '#16A34A' },
  { name: 'Forest Green', value: '#15803D' },
  { name: 'Mint Green', value: '#6EE7B7' },
  { name: 'Teal', value: '#2DD4BF' },
  { name: 'Turquoise', value: '#40E0D0' },
  { name: 'Cyan', value: '#22D3EE' },
  { name: 'Sky Blue', value: '#38BDF8' },
  { name: 'Baby Blue', value: '#BFDBFE' },
  { name: 'Blue', value: '#2563EB' },
  { name: 'Royal Blue', value: '#4338CA' },
  { name: 'Indigo', value: '#6366F1' },
  { name: 'Navy', value: '#001f3f' },
  { name: 'Purple', value: '#A78BFA' },
  { name: 'Lavender', value: '#C4B5FD' },
  { name: 'Lilac', value: '#D8B4FE' },
  { name: 'Fuchsia', value: '#E879F9' },
  { name: 'Brown', value: '#78350F' },
  { name: 'Walnut', value: '#5C4033' },
  { name: 'Pine', value: '#A67B5B' },
  { name: 'Oak', value: '#C2A47C' },
  { name: 'Mahogany', value: '#C04000' },
];

export const PRODUCT_TYPES: {id: ProductType, name: string, icon: React.FC<{ className?: string }>}[] = [
    { id: 'tshirt', name: 'T-Shirt', icon: TshirtIcon },
    { id: 'sweatshirt', name: 'Sweatshirt', icon: SweatshirtIcon },
    { id: 'hoodie', name: 'Hoodie', icon: HoodieIcon },
    { id: 'flat_lay', name: 'Flat Lay', icon: FlatLayIcon },
    { id: 'bag', name: 'Bag', icon: BagIcon },
    { id: 'wallet', name: 'Wallet', icon: WalletIcon },
    { id: 'cap', name: 'Cap', icon: CapIcon },
    { id: 'pillow', name: 'Pillow', icon: PillowIcon },
    { id: 'wooden_frame', name: 'Frame', icon: FrameIcon },
    { id: 'tea_mug', name: 'Mug', icon: MugIcon },
    { id: 'sipper_glass', name: 'Sipper', icon: SipperGlassIcon },
    { id: 'tumbler_wrap', name: 'Tumbler', icon: TumblerIcon },
    { id: 'halloween_tumbler', name: 'Halloween', icon: HalloweenTumblerIcon },
    { id: 'tumbler_trio', name: 'Trio', icon: TumblerTrioIcon },
    { id: 'laser_engraving', name: 'Engraving', icon: LaserIcon },
    { id: 'phone_case', name: 'Phone Case', icon: PhoneCaseIcon },
    { id: 'sticker', name: 'Sticker', icon: StickerIcon },
    { id: 'poster', name: 'Poster', icon: PosterIcon },
    { id: 'jigsaw_puzzle', name: 'Puzzle', icon: PuzzleIcon },
];

export const BAG_MATERIALS: {id: BagMaterial, name: string}[] = [
    { id: 'canvas', name: 'Canvas' },
    { id: 'leather', name: 'Leather' },
    { id: 'nylon', name: 'Nylon' },
    { id: 'denim', name: 'Denim' },
];

export const FRAME_STYLES: {id: FrameStyle, name: string}[] = [
    { id: 'classic_ornate', name: 'Classic Ornate' },
    { id: 'modern_minimalist', name: 'Modern Minimalist' },
    { id: 'rustic_barnwood', name: 'Rustic Barnwood' },
    { id: 'modern_mahogany', name: 'Modern Mahogany' },
];

export const FRAME_MODELS: {id: FrameModel, name: string, description: string}[] = [
    { id: 'elegant_woman_street', name: 'Woman on Street', description: 'an elegant woman in elegant clothing, standing on a picturesque European-style street and holding the frame' },
    { id: 'art_curator_gallery', name: 'Curator in Gallery', description: 'an art curator with a professional appearance in a minimalist gallery, presenting the frame' },
    { id: 'craftsman_workshop', name: 'Craftsman in Workshop', description: 'a craftsman in a woodworking workshop, showcasing the frame' },
    { id: 'man_modern_loft', name: 'Man in Modern Loft', description: 'a stylish man in a modern, industrial-style loft apartment, hanging the frame on an exposed brick wall' },
    { id: 'woman_cozy_living_room', name: 'Woman in Cozy Home', description: 'a woman in a cozy, hygge-style living room with a fireplace, placing the frame on a wooden mantle' },
    { id: 'couple_art_store', name: 'Couple in Art Store', description: 'a happy young couple in a bright, well-lit art supply store, holding up the frame together' },
];

export const MUG_STYLES: {id: MugStyle, name: string}[] = [
    { id: 'classic_ceramic', name: 'Classic Ceramic' },
    { id: 'modern_glass', name: 'Modern Glass' },
    { id: 'vintage_enamel', name: 'Vintage Enamel' },
];

export const MUG_MODELS: {id: MugModel, name: string, description: string}[] = [
    { id: 'woman_cafe', name: 'Woman in Cafe', description: 'a woman sitting in a picturesque European-style cafe, smiling while wearing elegant clothing and holding the mug' },
    { id: 'man_office', name: 'Man at Desk', description: 'a man in a modern office, holding the mug during a break' },
    { id: 'person_cozy_home', name: 'Person at Home', description: 'a person in a cozy, hygge-style living room, relaxing with the mug' },
];

export const SIPPER_GLASS_STYLES: {id: SipperGlassStyle, name: string}[] = [
    { id: 'classic_can_shape', name: 'Classic Can' },
    { id: 'modern_tapered', name: 'Modern Tapered' },
    { id: 'frosted_finish', name: 'Frosted Finish' },
];

export const SIPPER_GLASS_MODELS: {id: SipperGlassModel, name: string, description: string}[] = [
    { id: 'woman_cafe_elegant', name: 'Woman in Cafe', description: 'a young woman sitting in a cafe on a European or historical street, smiling and wearing elegant clothes, holding the sipper glass with a beverage inside' },
    { id: 'man_modern_kitchen', name: 'Man in Kitchen', description: 'a man in a bright, modern kitchen, holding the sipper glass with a beverage inside' },
    { id: 'person_outdoor_patio', name: 'Person on Patio', description: 'a person relaxing on a sunny outdoor patio, holding the sipper glass with a beverage inside' },
];

export const TUMBLER_STYLES: {id: TumblerStyle, name: string}[] = [
    { id: 'stainless_steel', name: 'Stainless Steel' },
    { id: 'matte_finish', name: 'Matte Finish' },
    { id: 'glossy_white', name: 'Glossy White' },
];

export const TUMBLER_MODELS: {id: TumblerModel, name: string, description: string}[] = [
    { id: 'person_gym', name: 'Person at Gym', description: 'an athletic person at a modern gym, holding the tumbler' },
    { id: 'hiker_trail', name: 'Hiker on Trail', description: 'a hiker resting on a scenic mountain trail, holding the tumbler' },
    { id: 'student_desk', name: 'Student at Desk', description: 'a student studying at a desk in a well-lit room, with the tumbler nearby' },
];

export const HALLOWEEN_TUMBLER_STYLES: {id: HalloweenTumblerStyle, name: string}[] = [
    { id: 'glossy_black', name: 'Glossy Black' },
    { id: 'matte_black', name: 'Matte Black' },
    { id: 'stainless_steel', name: 'Stainless Steel' },
];

export const HALLOWEEN_TUMBLER_SETTINGS: {id: HalloweenTumblerSetting, name: string, description: string}[] = [
    { id: 'spooky_table', name: 'Spooky Table', description: 'a festive Halloween scene on a wooden table, with out-of-focus pumpkins, candy corn, and spooky string lights in the background' },
    { id: 'haunted_house', name: 'Haunted House', description: 'a moody, atmospheric setting in front of a slightly blurred, spooky haunted house at dusk' },
    { id: 'witchs_cauldron', name: 'Witch\'s Cauldron', description: 'a magical setting next to a bubbling witch\'s cauldron with glowing green smoke and potion ingredients scattered around' },
    { id: 'autumn_porch', name: 'Autumn Porch', description: 'a cozy autumn scene on a porch, surrounded by fall leaves, mums, and rustic decorations' },
];

export const TUMBLER_TRIO_STYLES: {id: TumblerTrioStyle, name: string}[] = [
    { id: 'glossy_white', name: 'Glossy White' },
    { id: 'matte_white', name: 'Matte White' },
    { id: 'stainless_steel', name: 'Stainless Steel' },
];

export const TUMBLER_TRIO_SETTINGS: {id: TumblerTrioSetting, name: string, description: string}[] = [
    { id: 'marble_countertop', name: 'Marble Countertop', description: 'a clean, bright white marble countertop with soft, out-of-focus kitchen background elements' },
    { id: 'light_wood', name: 'Light Wood Table', description: 'a light-colored wooden table with a soft, warm, and slightly blurred background' },
    { id: 'minimalist_shelf', name: 'Minimalist Shelf', description: 'a simple, floating minimalist shelf against a plain, neutral-colored wall' },
];

export const ENGRAVING_MATERIALS: {id: EngravingMaterial, name: string}[] = [
    { id: 'wood_plaque', name: 'Wood Plaque' },
    { id: 'slate_coaster', name: 'Slate Coaster' },
    { id: 'metal_card', name: 'Metal Card' },
];

export const PHONE_CASE_STYLES: {id: PhoneCaseStyle, name: string}[] = [
    { id: 'glossy', name: 'Glossy' },
    { id: 'matte', name: 'Matte' },
    { id: 'clear', name: 'Clear' },
];

export const PHONE_CASE_MODELS: {id: PhoneCaseModel, name: string, description: string}[] = [
    { id: 'person_holding', name: 'Person Holding', description: 'a person with natural-looking hands holding a modern smartphone, showcasing the case' },
    { id: 'on_desk', name: 'On Desk', description: 'a modern smartphone in a case, placed on a stylish desk next to a laptop and a coffee mug, with a blurred background' },
    { id: 'flat_lay', name: 'Flat Lay', description: 'a flat lay photo of a modern smartphone in a case on a clean, minimalist background' },
];

export const STICKER_STYLES: {id: StickerStyle, name: string}[] = [
    { id: 'die_cut_glossy', name: 'Die-Cut Glossy' },
    { id: 'kiss_cut_matte', name: 'Kiss-Cut Matte' },
    { id: 'holographic', name: 'Holographic' },
];

export const STICKER_SETTINGS: {id: StickerSetting, name: string, description: string}[] = [
    { id: 'on_laptop', name: 'On Laptop', description: 'a sticker placed on the corner of a modern laptop with a blurred background' },
    { id: 'on_water_bottle', name: 'On Water Bottle', description: 'a sticker placed on a sleek, modern water bottle' },
    { id: 'on_notebook', name: 'On Notebook', description: 'a sticker placed on the cover of a minimalist notebook or journal' },
];

export const POSTER_STYLES: {id: PosterStyle, name: string}[] = [
    { id: 'glossy_finish', name: 'Glossy Finish' },
    { id: 'matte_finish', name: 'Matte Finish' },
];

export const POSTER_SETTINGS: {id: PosterSetting, name: string, description: string}[] = [
    { id: 'framed_on_wall', name: 'Framed on Wall', description: 'a poster in a simple, modern frame hanging on a well-lit wall in a stylish room' },
    { id: 'person_holding', name: 'Person Holding', description: 'a person with natural-looking hands holding up a poster, with a blurred, neutral background' },
    { id: 'taped_on_brick_wall', name: 'On Brick Wall', description: 'a poster casually taped to an urban-style exposed brick wall' },
];

export const WALLET_STYLES: {id: WalletStyle, name: string}[] = [
    { id: 'bifold', name: 'Bifold' },
    { id: 'cardholder', name: 'Cardholder' },
    { id: 'zipper', name: 'Zipper' },
];

export const WALLET_MODELS: {id: WalletModel, name: string, description: string}[] = [
    { id: 'person_holding', name: 'Person Holding', description: 'a person with well-manicured hands holding a modern leather wallet, showcasing the front' },
    { id: 'flat_lay_desk', name: 'Flat Lay', description: 'a flat lay photo of a modern leather wallet on a stylish desk next to a pen and notebook, with a blurred background' },
    { id: 'in_pocket', name: 'In Pocket', description: 'a modern leather wallet peeking out of the back pocket of a pair of stylish jeans' },
];

export const CAP_STYLES: {id: CapStyle, name: string}[] = [
    { id: 'structured_baseball', name: 'Baseball Cap' },
    { id: 'unstructured_dad_hat', name: 'Dad Hat' },
    { id: 'snapback', name: 'Snapback' },
];

export const CAP_MODELS: {id: CapModel, name: string, description: string}[] = [
    { id: 'person_forwards', name: 'Worn Forwards', description: 'a lifelike model wearing the cap forwards' },
    { id: 'person_backwards', name: 'Worn Backwards', description: 'a lifelike model wearing the cap backwards' },
    { id: 'flat_lay', name: 'Flat Lay', description: 'a flat lay photo of the cap on a clean, minimalist surface' },
];

export const PILLOW_STYLES: {id: PillowStyle, name: string}[] = [
    { id: 'square_cotton', name: 'Square Cotton' },
    { id: 'lumbar_linen', name: 'Lumbar Linen' },
    { id: 'round_velvet', name: 'Round Velvet' },
];

export const PILLOW_SETTINGS: {id: PillowSetting, name: string, description: string}[] = [
    { id: 'on_sofa', name: 'On a Sofa', description: 'a stylish, modern sofa in a well-lit living room' },
    { id: 'on_bed', name: 'On a Bed', description: 'a neatly made bed with plush duvets in a cozy bedroom' },
    { id: 'on_armchair', name: 'On an Armchair', description: 'a comfortable armchair in a reading nook' },
];

export const FLAT_LAY_STYLES: {id: FlatLayStyle, name: string, description: string}[] = [
    { id: 'minimalist_neutral', name: 'Minimalist', description: 'a clean, minimalist flat lay on a neutral background (like light gray concrete or a white wooden surface), with simple, elegant accessories like a pair of sunglasses, a watch, and a small plant.' },
    { id: 'rustic_outdoors', name: 'Rustic', description: 'a rustic, outdoors-themed flat lay on a dark wood or slate background, surrounded by items like hiking boots, a compass, a leather-bound journal, and some pine cones.' },
    { id: 'urban_streetwear', name: 'Urban', description: 'an urban streetwear flat lay on a concrete or asphalt background, accompanied by accessories like trendy sneakers, a beanie, headphones, and a skateboard deck.' },
    { id: 'cozy_autumn', name: 'Autumn', description: 'a cozy autumn-themed flat lay on a warm-toned wooden surface, featuring items like a knitted scarf, a steaming mug of coffee, fall leaves, and a book.' },
    { id: 'beach_vacation', name: 'Beach', description: 'a bright, beach vacation-themed flat lay on a sandy background, with accessories like sandals, a straw hat, seashells, and a pair of sunglasses.' },
];

export const PUZZLE_STYLES: {id: PuzzleStyle, name: string}[] = [
    { id: 'rectangle_cardboard', name: 'Rectangle Cardboard' },
    { id: 'heart_shaped_wood', name: 'Heart-shaped Wood' },
];

export const PUZZLE_SETTINGS: {id: PuzzleSetting, name: string, description: string}[] = [
    { id: 'on_wooden_table', name: 'On Wooden Table', description: 'a blank jigsaw puzzle on a rustic wooden table with soft, warm lighting and a blurred background' },
    { id: 'family_playing', name: 'Family Playing', description: 'the hands of a family gathered around a table, about to start working on the blank jigsaw puzzle, with a cozy home background' },
    { id: 'flat_lay_minimalist', name: 'Minimalist Flat Lay', description: 'a flat lay of the blank jigsaw puzzle on a clean, minimalist neutral-colored surface' },
];


export const DESIGN_STYLES: {id: DesignStyle, name: string}[] = [
    { id: 'classic', name: 'Classic Arc' },
    { id: 'split', name: 'Vertical Split' },
    { id: 'sketch', name: 'Gritty Sketch' },
    { id: 'slasher', name: 'Slasher Film' },
    { id: 'vintage_stamp', name: 'Vintage Stamp' },
    { id: 'retro_wave', name: 'Retro Wave' },
    { id: 'minimalist_line', name: 'Minimalist Line' },
    { id: 'grunge_overlay', name: 'Grunge Overlay' },
    { id: 'stacked_text', name: 'Stacked Text' },
    { id: 'emblem', name: 'Badge Emblem' },
    { id: 'photo_text', name: 'Photo Text' },
    { id: 'cyberpunk_glitch', name: 'Cyberpunk Glitch' },
    { id: 'full_wrap', name: 'All-Over Print' },
    { id: 'full_front', name: 'Full Front' },
    { id: 'american_traditional_tattoo', name: 'Tattoo' },
    { id: 'watercolor_splash', name: 'Watercolor' },
    { id: 'art_deco', name: 'Art Deco' },
    { id: 'pop_art', name: 'Pop Art' },
    { id: 'cosmic_galaxy', name: 'Cosmic' },
    { id: 'japanese_ukiyo-e', name: 'Ukiyo-e' },
    { id: 'distressed_vintage', name: 'Distressed Vintage' },
    { id: 'typography_focus', name: 'Typography Focus' },
    { id: 'abstract_geometric', name: 'Abstract Geometric' },
];

export const TEXT_STYLES: {id: TextStyle, name: string}[] = [
    { id: 'none', name: 'None' },
    { id: 'outline', name: 'Outline' },
    { id: 'shadow', name: 'Shadow' },
    { id: 'glow', name: 'Glow' },
    { id: 'neon', name: 'Neon' },
    { id: '3d', name: '3D Block' },
    { id: 'metallic', name: 'Metallic' },
    { id: 'chrome', name: 'Chrome' },
    { id: 'gradient', name: 'Gradient' },
    { id: 'pastel_rainbow', name: 'Pastel Rainbow' },
    { id: 'distressed', name: 'Distressed' },
    { id: 'fire', name: 'Fire' },
    { id: 'ice', name: 'Ice' },
    { id: 'wooden', name: 'Wooden' },
    { id: 'comic', name: 'Comic Book' },
    { id: 'glitch', name: 'Glitch' },
    { id: 'script', name: 'Script' },
    { id: 'varsity', name: 'Varsity' },
];

export const MODEL_POSES: {id: ModelPose, name: string}[] = [
    { id: 'standing', name: 'Standing' },
    { id: 'sitting', name: 'Sitting' },
    { id: 'recumbent', name: 'Recumbent' },
    { id: 'smiling_glasses', name: 'Smiling w/ Glasses' },
    { id: 'back', name: 'Back View' },
    { id: 'drinking_tea', name: 'Drinking Tea' },
    { id: 'jumping', name: 'Jumping' },
    { id: 'dancing', name: 'Dancing' },
    { id: 'meditating', name: 'Meditating' },
    { id: 'heroic', name: 'Heroic' },
    { id: 'action', name: 'Action' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'casual_lean', name: 'Casual Lean' },
    { id: 'walking_street', name: 'Walking on Street' },
    { id: 'laughing', name: 'Laughing' },
    { id: 'arms_crossed', name: 'Arms Crossed' },
    { id: 'thinking', name: 'Thinking' },
    { id: 'hands_in_pockets', name: 'Hands in Pockets' },
];

export const MODEL_AUDIENCES: {id: ModelAudience, name: string, description: string}[] = [
    // Female
    { id: 'woman_20s_athletic', name: 'Woman (20s, Athletic)', description: 'a woman with an athletic build' },
    { id: 'woman_30s_casual', name: 'Woman (30s, Casual)', description: 'a woman with a casual style' },
    { id: 'woman_40s_professional', name: 'Woman (40s, Professional)', description: 'a woman with a professional appearance' },
    { id: 'woman_50s_elegant', name: 'Woman (50s, Elegant)', description: 'an elegant woman' },
    { id: 'middle_aged_woman_artist', name: 'Woman (Artist)', description: 'a middle-aged woman with an artistic and creative style' },
    { id: 'elderly_woman_gardener', name: 'Woman (Elderly, Gardener)', description: 'an elderly woman with a warm smile, dressed for gardening' },
    // Male
    { id: 'man_20s_student', name: 'Man (20s, Student)', description: 'a young man with a student style' },
    { id: 'man_30s_creative', name: 'Man (30s, Creative)', description: 'a creative professional man' },
    { id: 'man_40s_business', name: 'Man (40s, Business)', description: 'a man in business-casual style' },
    { id: 'man_50s_distinguished', name: 'Man (50s, Distinguished)', description: 'a distinguished-looking man' },
    { id: 'teenager_male_gamer', name: 'Teenager (Male, Gamer)', description: 'a male teenager with a gamer style, perhaps wearing headphones around his neck' },
    { id: 'young_man_musician', name: 'Man (Young, Musician)', description: 'a young man with a creative, musician-like appearance' },
];

export const TSHIRT_FONTS: {id: TshirtFont, name: string}[] = [
    { id: 'anton', name: 'Anton' },
    { id: 'archivo_black', name: 'Archivo Black' },
    { id: 'bangers', name: 'Bangers' },
    { id: 'bebas_neue', name: 'Bebas Neue' },
    { id: 'caveat', name: 'Caveat' },
    { id: 'creepster', name: 'Creepster' },
    { id: 'dancing_script', name: 'Dancing Script' },
    { id: 'impact', name: 'Impact' },
    { id: 'lato', name: 'Lato' },
    { id: 'lobster', name: 'Lobster' },
    { id: 'merriweather', name: 'Merriweather' },
    { id: 'monoton', name: 'Monoton' },
    { id: 'montserrat', name: 'Montserrat' },
    { id: 'nosifier', name: 'Nosifier' },
    { id: 'oswald', name: 'Oswald' },
    { id: 'pacifico', name: 'Pacifico' },
    { id: 'permanent_marker', name: 'Permanent Marker' },
    { id: 'playfair_display', name: 'Playfair Display' },
    { id: 'poppins', name: 'Poppins' },
    { id: 'press_start_2p', name: 'Press Start 2P' },
    { id: 'roboto', name: 'Roboto' },
    { id: 'rock_salt', name: 'Rock Salt' },
    { id: 'special_elite', name: 'Special Elite' },
    { id: 'zilla_slab', name: 'Zilla Slab' },
];


// This is a placeholder for a base image of a model wearing a t-shirt.
// In a real application, you would use a high-quality image.
// For this example, we will ask the AI to generate the model too.
export const BASE_MODEL_IMAGE_B64 = ''; // We will generate the model instead of editing a base image.