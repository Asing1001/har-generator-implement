const { cleanup } = require('har-generator');
const path = require("path");
const chromePath = path.join(__dirname, "local-chromium\\win64-515411\\chrome-win32\\chrome.exe");

cleanup({ chromePath })