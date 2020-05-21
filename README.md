#Express Overview

### Commands :alien:

`npm i -y`
`npm i --save express`

### devDependencies :alien:
`npm i -g nodemon`
`npm i --save-dev nodemon`
`npm start`

[Issue Nodemon](Issue: https://github.com/remy/nodemon/issues/1544 "Issue Nodemon")

`> [nodemon] restarting due to changes...`

### PM2 Production
[PM2 Doc](https://pm2.keymetrics.io/ "PM2 Doc")

`npm i --save pm2`
`npm run production`
`npx pm2 monit`
`npx pm2 status`
`npx pm2 restart`
`npx pm2 show 0`
`npx pm2 restart 0`
`npx pm2 kill`

    "package.json": {
    "production": "pm2 start index.js --name appx-backend" }


