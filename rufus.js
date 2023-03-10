import { exec } from "child_process"

// prints active branch
exec("git branch --format='%(refname:short)'", (err, res) => {
    if (err) console.log(err)
    if (res) {
        // removes trailing line break created by console.log
        let resWithoutLineBreaks = res.replaceAll('\n', '')
        console.log('active branch:', resWithoutLineBreaks)
    }
});

// prints whether repository files have been modified
exec('git status --porcelain=v1', (err, res) => {
    if (err) console.log(err)
    res ? console.log('local changes: True') : console.log('local changes: False')
});

// prints whether the current head commit was authored in the last week
exec("git log --since '1 week ago'", (err, res) => {
    if (err) console.log(err)
    res ? console.log('recent commit: True') : console.log('recent commit: False')
})

// prints whether the current head commit was authored by Rufus
exec("git log --author=Rufus", (err, res) => {
    if (err) console.log(err)
    res ? console.log('blame Rufus: True') : console.log('blame Rufus: False')
})