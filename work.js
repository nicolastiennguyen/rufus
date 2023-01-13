import { exec } from "child_process"

// prints active branch
exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
      console.log('active branch:', stdout)
    }
});

// prints whether repository files have been modified
exec('git status', (err, stdout) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
        console.log('local changes:', true)
    } else {
        console.log('local changes:', false)
    }
});