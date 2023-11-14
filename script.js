// Create an empty array to store scanned QR codes
const scannedQRCodes = [];

// Function to handle successful QR code scans
function onScanSuccess(decodedText, decodedResult) {
  // Add the scanned QR code to the list
  scannedQRCodes.push(decodedText);

  // Update the QR code list UI
  const qrCodeListItems = document.getElementById('qr-code-list-items');
  const newListItem = document.createElement('li');
  newListItem.textContent = decodedText;
  qrCodeListItems.appendChild(newListItem);
}

// Function to copy the QR code list to clipboard
function copyQrCodeListToClipboard() {
  // Convert the scanned QR code list to a string
  const qrCodeListText = scannedQRCodes.join('\n');

  // Copy the QR code list text to the clipboard
  navigator.clipboard.writeText(qrCodeListText);

  // Display an alert message
  alert('QR code list copied to clipboard!');
}

// Initialize the QR code scanner
const html5QrcodeScanner = new Html5QrcodeScanner(
  'reader',
  { fps: 10, qrbox: { width: 250, height: 250 } },
  /* verbose= */ false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
