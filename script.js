const qrCodeList = [];



function onScanSuccess(qrCodeText, qrCodeResult) {
  // Add the scanned QR code to the list of scanned QR codes.
  qrCodeList.push(qrCodeText);

  // Display an alert with the decoded QR code text and result.
  alert(`Code matched = ${qrCodeText}`, qrCodeResult);
}

function copyQrCodeListToClipboard() {
  // Get the text of the QR code list.
  const qrCodeListText = qrCodeList.join('\n');

  // Create a new TextRange object.
  const textRange = document.createRange();

  // Select the QR code list text.
  textRange.selectNodeContents(document.getElementById('qr-code-list-items'));

  // Add the QR code list text to the clipboard.
  window.getSelection().addRange(textRange);

  // Copy the QR code list text to the clipboard.
  document.execCommand('copy');

  // Remove the TextRange object from the DOM.
  textRange.detach();

  // Display an alert to let the user know that the QR code list has been copied to the clipboard.
  alert('QR code list copied to clipboard!');
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
