import { exec } from "child_process"

exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
      console.log('active branch:', stdout)
    }
});