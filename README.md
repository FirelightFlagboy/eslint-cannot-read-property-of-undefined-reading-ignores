# Bug: Cannot read properties of undefined (reading 'ignores')

Repo for issue: https://github.com/eslint/eslint/issues/18094

Steps:

1. `nvm use` or use the version listed in the file `.nvmrc`
2. `npm install`
3. `npx eslint .`

With that configuration, I'm getting the following output:

```
Oops! Something went wrong! :(

ESLint: 8.56.0
TypeError: Cannot read properties of undefined (reading 'ignores')
    at FlatConfigArray.get ignores [as ignores] (/[REDACTED]/node_modules/@humanwhocodes/config-array/api.js:648:15)
    at FlatConfigArray.isDirectoryIgnored (/[REDACTED]/node_modules/@humanwhocodes/config-array/api.js:1012:10)
    at deepFilter (/[REDACTED]/node_modules/eslint/lib/eslint/eslint-helpers.js:279:47)
    at Object.isAppliedFilter (/[REDACTED]/node_modules/@nodelib/fs.walk/out/readers/common.js:12:31)
    at AsyncReader._handleEntry (/[REDACTED]/node_modules/@nodelib/fs.walk/out/readers/async.js:89:50)
    at /[REDACTED]/node_modules/@nodelib/fs.walk/out/readers/async.js:65:22
    at callSuccessCallback (/[REDACTED]/node_modules/@nodelib/fs.scandir/out/providers/async.js:103:5)
    at /[REDACTED]/node_modules/@nodelib/fs.scandir/out/providers/async.js:29:13
    at node:fs:192:23
    at node:internal/util:453:5
```
