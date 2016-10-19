
document.addEventListener('DOMContentLoaded', popupInit);

document.getElementById('goto1').addEventListener('click', function() {
    window.open(chrome.extension.getURL('options.html'));
});