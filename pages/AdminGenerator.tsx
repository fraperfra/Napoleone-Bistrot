import React, { useState } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Camera, Wand2, Download, Settings, Image as ImageIcon, RefreshCw, Layers, Palette, Sun, Monitor } from 'lucide-react';

interface GeneratorSettings {
  style: string;
  lighting: string;
  angle: string;
  background: string;
  aspectRatio: string;
}

const AdminGenerator: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [settings, setSettings] = useState<GeneratorSettings>({
    style: 'Fotorealistico Gourmet',
    lighting: 'Luce Naturale (Finestra)',
    angle: '45 Gradi (Tre quarti)',
    background: 'Tavolo in legno rustico scuro',
    aspectRatio: '1:1 (Quadrato)'
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_OPENAI_API_KEY || '');

  // Styles and options configuration
  const options = {
    styles: ['Fotorealistico Gourmet', 'Minimalista', 'Rustico', 'Cinematografico', 'Editoriale'],
    lighting: ['Luce Naturale (Finestra)', 'Studio Softbox', 'Golden Hour', 'Moody/Dark', 'Luce Drammatica'],
    angles: ['45 Gradi (Tre quarti)', 'Dall\'alto (Flat Lay)', 'Livello Occhi (Eye Level)', 'Macro Dettaglio'],
    backgrounds: ['Tavolo in legno rustico scuro', 'Marmo bianco Carrara', 'Tovaglia di lino beige', 'Sfondo sfocato (Bokeh)', 'Ardesia scura']
  };

  const generatePrompt = (item: MenuItem, currentSettings: GeneratorSettings) => {
    // Clean description for prompt
    const cleanDesc = item.description.replace(/"/g, '');
    
    // Mappatura tecnica avanzata per fotorealismo
    const technicalSpecs: Record<string, string> = {
       'Fotorealistico Gourmet': 'Shot on Phase One XF IQ4 150MP with Schneider Kreuznach 80mm LS f/2.8 Blue Ring lens. Settings: ISO 50, f/5.6, 1/125s. Style: Michelin guide photography, elegant plating, ultra-fine details.',
       'Minimalista': 'Shot on Sony A7R IV with Sony FE 50mm f/1.2 GM lens. Settings: ISO 100, f/2.8, 1/200s. Style: Contemporary minimalism, negative space, clean lines, high-key.',
       'Rustico': 'Shot on Canon EOS R5 with Canon RF 35mm f/1.8 Macro IS STM. Settings: ISO 400, f/2.0, 1/60s. Style: Authentic home-cooking, warm tones, rich textures, cozy atmosphere.',
       'Cinematografico': 'Shot on Arri Alexa Mini LF (simulated still) with Zeiss Supreme Prime 50mm T1.5. Settings: T2.0, 180 degree shutter. Style: Cinematic color grading, anamorphic bokeh, dramatic mood.',
       'Editoriale': 'Shot on Hasselblad H6D-100c with HC 100mm f/2.2 lens. Settings: ISO 64, f/8, 1/160s. Style: High-end magazine spread, commercial perfection, vibrant and punchy colors.'
    };

    const lightingSpecs: Record<string, string> = {
        'Luce Naturale (Finestra)': 'Lighting: Soft, diffused North-facing window light entering from the left. Shadows: Soft, graduated falloff. White Balance: Neutral (5500K). Atmosphere: Fresh, airy, natural.',
        'Studio Softbox': 'Lighting: Professional 3-point studio setup. Key light: Large Octabox. Fill: White reflector. Rim: Strip box for separation. Shadows: Controlled and soft. Atmosphere: Commercial, clean.',
        'Golden Hour': 'Lighting: Warm, low-angle sunlight from back-side (golden hour). Shadows: Long, dramatic, warm. White Balance: Warm (3500K). Atmosphere: Magical, nostalgic, lens flare.',
        'Moody/Dark': 'Lighting: Low-key chiaroscuro lighting. Focus: Selective illumination on the main subject. Shadows: Deep, rich blacks. Atmosphere: Mysterious, intimate, elegant.',
        'Luce Drammatica': 'Lighting: Hard, high-contrast light source (snoot or bare bulb). Shadows: Sharp, defined, deep. Atmosphere: Bold, artistic, intense.'
    };

    const angleSpecs: Record<string, string> = {
        '45 Gradi (Tre quarti)': 'Composition: 45-degree angle (standard diner\'s perspective). Depth of Field: Natural roll-off, subject in sharp focus, background slightly blurred.',
        'Dall\'alto (Flat Lay)': 'Composition: 90-degree top-down flat lay. Depth of Field: Deep (f/8+), edge-to-edge sharpness, geometric arrangement.',
        'Livello Occhi (Eye Level)': 'Composition: 0-degree eye-level shot. Depth of Field: Very shallow (f/1.4), creamy bokeh foreground and background, focus on front edge of food.',
        'Macro Dettaglio': 'Composition: Macro close-up detail shot. Lens: 100mm Macro. Depth of Field: Extremely shallow, razor-sharp focus on texture/garnish.'
    };

    // Costruzione del Prompt Ottimizzato
    let prompt = `Ultra-realistic professional food photography of ${item.name}. `;
    prompt += `Visual Description: ${cleanDesc}. `;
    
    // Inject Technical Specifications
    prompt += `\n\nCAMERA & GEAR:\n${technicalSpecs[currentSettings.style] || currentSettings.style}`;
    prompt += `\n\nLIGHTING & ATMOSPHERE:\n${lightingSpecs[currentSettings.lighting] || currentSettings.lighting}`;
    prompt += `\n\nCOMPOSITION & PERSPECTIVE:\n${angleSpecs[currentSettings.angle] || currentSettings.angle}`;
    prompt += `\n\nSETTING:\nBackground: ${currentSettings.background}. Surface: High-quality texture matching the background.`;

    // Critical Realism Instructions
    prompt += `\n\nQUALITY & POST-PROCESSING INSTRUCTIONS:
    - Image Quality: 8k resolution, RAW photo, uncompressed, hyper-realistic textures.
    - Optical Characteristics: Physically accurate depth of field, chromatic aberration absent or strictly optical, natural vignetting.
    - Texture details: Visible steam (if hot), condensation (if cold), faithful food textures (crispy, creamy, glazed), subsurface scattering on liquids/sauces.
    - Imperfections: Add subliminal film grain, slight sensor noise in shadows, and micro-contrast to simulate real optical capture (avoid "plastic" or "3D render" look).
    - EXIF Simulation: Image must look like it has valid EXIF data from a professional camera.
    - Overall: Indistinguishable from a photograph taken by a world-class food photographer.
    `;
    
    return prompt;
  };

  const handleItemSelect = (item: MenuItem) => {
    setSelectedItem(item);
    const newPrompt = generatePrompt(item, settings);
    setGeneratedPrompt(newPrompt);
    setGeneratedImage(null);
  };

  const handleSettingChange = (key: keyof GeneratorSettings, value: string) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    if (selectedItem) {
      setGeneratedPrompt(generatePrompt(selectedItem, newSettings));
    }
  };

  const handleGenerate = async () => {
    if (!apiKey) {
      alert('Inserisci la tua API Key OpenAI nelle impostazioni o nel file .env');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Use proxy if available (development), otherwise try direct (might fail due to CORS)
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const endpoint = isLocal ? '/openai-api/images/generations' : 'https://api.openai.com/v1/images/generations';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt: generatedPrompt,
          n: 1,
          size: "1024x1024",
          quality: "hd",
          style: "natural" // Force natural style for more realism
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || `API Error: ${response.status}`);
      }

      if (data.error) {
        throw new Error(data.error.message);
      }

      if (data.data && data.data.length > 0) {
        setGeneratedImage(data.data[0].url);
      }
    } catch (error) {
      console.error('Error generating image:', error);
      alert(`Errore durante la generazione: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-darkGreen font-bold mb-4 flex items-center justify-center gap-3">
            <Wand2 className="text-gold" size={40} />
            AI Food Photographer
          </h1>
          <p className="text-darkGreen/70 italic max-w-2xl mx-auto">
            Sistema avanzato di generazione immagini per il menu Napoleone Bistrot.
            Crea scatti fotorealistici dei tuoi piatti utilizzando l'intelligenza artificiale.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel: Item Selection */}
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-darkGreen/5 h-[80vh] overflow-y-auto">
            <h3 className="font-serif text-xl text-darkGreen font-bold mb-6 flex items-center gap-2">
              <RefreshCw size={20} className="text-gold" /> Seleziona Piatto
            </h3>
            <div className="space-y-3">
              {MENU_ITEMS.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${selectedItem?.id === item.id ? 'bg-darkGreen text-white border-darkGreen' : 'bg-cream/30 hover:bg-cream border-transparent'}`}
                >
                  <div className="font-bold text-sm mb-1">{item.name}</div>
                  <div className={`text-xs truncate ${selectedItem?.id === item.id ? 'text-white/70' : 'text-darkGreen/60'}`}>
                    {item.category} • {item.subCategory || 'Generale'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Panel: Configuration */}
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-darkGreen/5 overflow-y-auto">
            <h3 className="font-serif text-xl text-darkGreen font-bold mb-6 flex items-center gap-2">
              <Settings size={20} className="text-gold" /> Configurazione
            </h3>
            
            <div className="space-y-6">
              {/* API Key Input (Hidden if using env var) */}
              {!import.meta.env.VITE_OPENAI_API_KEY && (
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 block">OpenAI API Key</label>
                <input 
                  type="password" 
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none text-darkGreen"
                />
              </div>
              )}

              {/* Style Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 block flex items-center gap-1"><Palette size={12}/> Stile</label>
                  <select 
                    value={settings.style}
                    onChange={(e) => handleSettingChange('style', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none text-sm"
                  >
                    {options.styles.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 block flex items-center gap-1"><Sun size={12}/> Illuminazione</label>
                  <select 
                    value={settings.lighting}
                    onChange={(e) => handleSettingChange('lighting', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none text-sm"
                  >
                    {options.lighting.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 block flex items-center gap-1"><Camera size={12}/> Angolazione</label>
                  <select 
                    value={settings.angle}
                    onChange={(e) => handleSettingChange('angle', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none text-sm"
                  >
                    {options.angles.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 block flex items-center gap-1"><Layers size={12}/> Sfondo</label>
                  <select 
                    value={settings.background}
                    onChange={(e) => handleSettingChange('background', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none text-sm"
                  >
                    {options.backgrounds.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              {/* Prompt Preview */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 block">Prompt Generato</label>
                <textarea 
                  value={generatedPrompt}
                  onChange={(e) => setGeneratedPrompt(e.target.value)}
                  className="w-full h-32 p-3 bg-darkGreen/5 rounded-xl border border-darkGreen/10 text-sm font-mono text-darkGreen/80 focus:border-gold outline-none resize-none"
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={!selectedItem || isGenerating}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${!selectedItem || isGenerating ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gold text-darkGreen hover:bg-darkGreen hover:text-white'}`}
              >
                {isGenerating ? (
                  <>Generazione in corso...</>
                ) : (
                  <><Wand2 size={18} /> Genera Immagine</>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel: Result */}
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-darkGreen/5 flex flex-col">
            <h3 className="font-serif text-xl text-darkGreen font-bold mb-6 flex items-center gap-2">
              <Monitor size={20} className="text-gold" /> Risultato
            </h3>
            
            <div className="flex-grow bg-darkGreen/5 rounded-2xl border-2 border-dashed border-darkGreen/10 flex items-center justify-center relative overflow-hidden group">
              {generatedImage ? (
                <>
                  <img src={generatedImage} alt="Generated Food" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={generatedImage} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-darkGreen hover:bg-gold transition-colors">
                      <Download size={24} />
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center text-darkGreen/40 p-8">
                  <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="font-serif italic">Seleziona un piatto e clicca su "Genera" per vedere l'anteprima</p>
                </div>
              )}
            </div>
            
            {generatedImage && (
              <div className="mt-6 p-4 bg-cream/50 rounded-xl border border-gold/20">
                <p className="text-xs text-darkGreen/60 mb-2">Immagine generata per uso commerciale. Verifica sempre i dettagli prima della pubblicazione.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGenerator;