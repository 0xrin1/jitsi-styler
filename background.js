// document.addEventListener('DOMContentLoaded', function() {
//     let button = document.getElementById('jitsi-styler-button');
//     button.addEventListener('click', function() {
//         document.getElementById('localVideoTileViewContainer').remove();
//     }, false);
// }, false);

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: 'logic.js'});
});
