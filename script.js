// Get the QR code info element.
const qrCodeInfo = document.querySelector('#qr-code-info');

// Listen for the QR code scan event.
document.querySelector('#reader').addEventListener('scan', function(event) {
  // Get the QR code type and contents.
  const qrCodeType = event.detail.type;
  const qrCodeContents = event.detail.data;

  // Update the QR code info element.
  qrCodeInfo.querySelector('#qr-code-type').textContent = `QR Code Type: ${qrCodeType}`;
  qrCodeInfo.querySelector('#qr-code-contents').textContent = `QR Code Contents: ${qrCodeContents}`;
});
