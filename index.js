const { tasks, outputFolder } = require('./config');
const HarGenerator = require('har-generator');
const { clean } = require('./utils/cleanUp')

let isCleaning = false
tasks.filter(({ enable }) => enable).forEach(options => {
    const harGen = new HarGenerator({ ...options, harFolder: outputFolder });
    harGen.start();
    harGen.on('fail', (url, err) => {
        if (err.code === 'ECONNREFUSED' && !isCleaning) {
            isCleaning = true
            clean()
            isCleaning = false
        }
    })
})