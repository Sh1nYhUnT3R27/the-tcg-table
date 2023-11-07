// JavaScript function to handle successful QR code scans.
function onScanSuccess(qrCodeText, qrCodeResult) {
  // Display an alert with the decoded QR code text and result.
  alert(`Code matched = ${qrCodeText}`, qrCodeResult);
}

// JavaScript function to handle failed QR code scans.
function onScanFailure(error) {
  // Log a warning message to the console with the scan error.
  console.warn(`Code scan error = ${error}`);
}

// Create a new Html5QrcodeScanner object.
const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: { width: 250, height: 250 } },
  /* verbose= */ false
);

// Render the QR code scanner to the DOM element with the ID "reader".
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

// Get the QR code info element from the DOM.
const qrCodeInfo = document.querySelector('#qr-code-info');

// Listen for the QR code scan event.
document.querySelector('#reader').addEventListener('scan', function(event) {
  // Get the QR code type and contents from the event object.
  const qrCodeType = event.detail.type;
  const qrCodeContents = event.detail.data;

  // Update the QR code info element with the QR code type and contents.
  qrCodeInfo.querySelector('#qr-code-type').textContent = `QR Code Type: ${qrCodeType}`;
  qrCodeInfo.querySelector('#qr-code-contents').textContent = `QR Code Contents: ${qrCodeContents}`;
});
