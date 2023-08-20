document.addEventListener('DOMContentLoaded', () => {
    const pdfInput = document.getElementById('pdfInput');
    pdfInput.addEventListener('change', handleFileUpload);
});

function handleFileUpload(event) {
    const pdfContainer = document.getElementById('pdfContainer');
    const file = event.target.files[0];

    if (file && file.type === 'application/pdf') {
        const pdfURL = URL.createObjectURL(file);
        pdfContainer.src = pdfURL;
    } else {
        pdfContainer.src = '';
        alert('Please select a PDF file.');
    }
}
