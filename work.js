import { exec } from "child_process"

// prints active branch
exec('git rev-parse --abbrev-ref HEAD', (err, res) => {
    if (err) {
        console.log(err)
    }

    if (typeof res === 'string') {
      console.log('active branch:', res)
    }
});

// prints whether repository files have been modified
exec('git status', (err, res) => {
    if (err) {
        console.log(err)
    }

    if (typeof res === 'string') {
        console.log('local changes:', true)
        console.log(res, 'res TRUE')
    } else {
        console.log('local changes:', false)
        console.log(res, 'res FALSE')
    }
});