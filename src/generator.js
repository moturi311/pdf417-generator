import bwipjs from 'bwip-js';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

export async function generateBarcode(options, outputPath, textData) {
  try {
    await mkdir(dirname(outputPath), { recursive: true });

    const pngBuffer = await new Promise((resolve, reject) => {
      bwipjs.toBuffer({
        ...options,
        text: textData // Make sure text is properly passed
      }, (err, png) => {
        err ? reject(err) : resolve(png);
      });
    });

    await writeFile(outputPath, pngBuffer);
    return outputPath;
  } catch (err) {
    throw new Error(`Barcode generation failed: ${err.message}`);
  }
}
