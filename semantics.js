const { BrowserWindow } = require('electron').remote;

let browserHeight = BrowserWindow.getFocusedWindow().getSize()[1] - 50;

const webview = document.getElementById('webview');
webview.style.height =  browserHeight + "px";
webview.src = state.urls[state.urlPager];
document.getElementById('currentAddress').innerHTML = state.urls[state.urlPager];

// BrowserWindow.once('did-finish-load', () => {
//   console.log('window has loaded');
// })
