const { tasks } = require('./config');
const HarGenerator = require('har-generator');

tasks.filter(({ enable }) => enable).forEach(options => {
    const harGen = new HarGenerator(options);
    harGen.start();
})