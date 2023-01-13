// import { simpleGit, CleanOptions } from 'simple-git';

// simpleGit().clean(CleanOptions.FORCE);

// const git = simpleGit();
// try {
//   await console.log(git.branchLocal())
// } catch (e) {
//    console.log(e, 'ERROR')
// }


import GitKit from 'gitkit';
import NativeFS from 'gitkit/lib/fs/native';

// Prepare the filesystem
var fs = NativeFS(process.cwd());

// Create a repository instance
var repo = GitKit.Repository.createWithFS(fs, isBare);

GitKit.BranchUtils.list(repo)
    .then(function(branches) { console.log(branches) })