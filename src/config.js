export default {
  barcodeOptions: {
    bcid: 'pdf417',
    scale: 3,
    width: 900,  // Increased width
    height: 400, // Increased height
    columns: 30, // More columns for more data
    eclevel: 5,  // Highest error correction
    includetext: false
  },
  output: {
    directory: './output',
    filename: 'aamva-barcode.png'
  }
};
