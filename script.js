// Create a QR code reader
const qrReader = new QRCode.Reader();

// Add an event listener for the QR code reader
qrReader.on('decoded', function(decodedData) {
    // Add the decoded QR code to the list of scanned codes
    const scannedCodesList = document.getElementById('scanned-codes');
    const newScannedCodeListItem = document.createElement('li');
    newScannedCodeListItem.classList.add('list-group-item');
    newScannedCodeListItem.textContent = decodedData;
    scannedCodesList.appendChild(newScannedCodeListItem);
});

// Add an event listener for the "Copy scanned codes" button
document.getElementById('copy-scanned-codes').addEventListener('click', function() {
    // Copy the scanned codes to the clipboard
    const scannedCodesList = document.getElementById('scanned-codes');
    const scannedCodesText = scannedCodesList.textContent;
    navigator.clipboard.writeText(scannedCodesText);

    // Display a message to the user
    alert('Scanned codes copied to clipboard!');
});

// Start the QR code reader
qrReader.start();
