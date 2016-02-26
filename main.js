'use strict';

const electron      = require('electron');
// const Log           = require('log');
// const log           = new Log('info');
const app           = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
// const Menu          = electron.Menu;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// TODO: Menu not working
// var dockMenu = Menu.buildFromTemplate([
//   { label: 'New Window', click: function() {
//     log.info('New Window');
//   }},
//   { label: 'New Window with Settings', submenu: [
//     { label: 'Basic' },
//     { label: 'Pro' }
//   ]},
//   { label: 'New Command...' }
// ]);

// app.dock.setMenu(dockMenu);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1060,
    'min-width': 1000,
    'min-height': 600,
    resizable: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
