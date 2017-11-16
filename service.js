const { exec } = require("child_process");
const path = require("path");

const startFilePath = path.join(__dirname, "start.bat");
const cmd = `SchTasks /Create /SC DAILY /TN \"har-generator\" /TR \"${startFilePath}\" /ST 09:00`;
const nssm = `nssm install \"agilehar\" \"${startFilePath}\"`;
 
exec(nssm, (err, stdout, stderr) => {
    if (err)
        console.error('reInitChrome throw error', err);

    if (stderr)
        console.error('stderr:', stderr);

    if (stdout)
        console.info('stdout:', stdout);
})