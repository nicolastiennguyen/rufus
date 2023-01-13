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
exec('git status --porcelain=v1', (err, res) => {
    if (err) {
        console.log(err)
    }

    res ? console.log('local changes: True') : console.log('local changes: False')
});