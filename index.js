const { tasks } = require('./config');
const HarGenerator = require('har-generator');

tasks.forEach(options => {
    const harGen = new HarGenerator(options);
    harGen.start();
})