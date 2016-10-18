
(function () {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(po);
})();

document.addEventListener('DOMContentLoaded', init);

document.getElementById('btn-clear').addEventListener('click', doClear);

document.getElementById('export').addEventListener('click', function() {
    selectAll('export');
});

document.getElementById('setStored').addEventListener('click', function() {
    setStored();
})

// document.getElementById('manage-extension').addEventListener('click', function() {
//     chrome.tabs.create({url: 'chrome://settings/extensions'});
// })