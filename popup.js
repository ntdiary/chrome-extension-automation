
document.addEventListener('DOMContentLoaded', popupInit);

// close popup.html
document.getElementById('enterBtn').addEventListener('submit', function() {
    window.close();
});

document.getElementById('goto1').addEventListener('click', function() {
    window.open(chrome.extension.getURL('options.html'));
});