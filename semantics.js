const { BrowserWindow } = require('electron').remote;

let browserHeight = BrowserWindow.getFocusedWindow().getSize()[1] - 98;

const webview = document.getElementById('webview');
webview.style.height =  browserHeight + "px";
webview.src = state.urls[state.urlPager];
document.getElementById('currentAddress').innerHTML = state.urls[state.urlPager];
