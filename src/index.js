import { generateBarcode } from './generator.js';
import config from './config.js';
import { aamvaXmlTemplate } from './aamva-template.js';

(async () => {
  try {
    // Verify XML data is loaded
    if (!aamvaXmlTemplate || aamvaXmlTemplate.trim().length === 0) {
      throw new Error('XML template is empty');
    }

    const outputPath = `${config.output.directory}/${config.output.filename}`;
    await generateBarcode(
      config.barcodeOptions,
      outputPath,
      aamvaXmlTemplate // Pass the XML directly
    );
    console.log(`✅ Success! Barcode saved to: ${outputPath}`);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
})();
