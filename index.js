const { tasks, outputFolder } = require('./config');
const HarGenerator = require('har-generator');

tasks.filter(({ enable }) => enable).forEach(options => {
    const harGen = new HarGenerator({ ...options, harFolder: outputFolder });
    harGen.start();
})