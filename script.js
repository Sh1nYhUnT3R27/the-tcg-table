function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  alert(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

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
