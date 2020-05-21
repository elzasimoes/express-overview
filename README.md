# Express Overview
<img src="https://img.shields.io/static/v1?label=express&message=framework&color=yellow&style=for-the-badge&logo=javascript"/>

### Commands :alien:

`npm i -y`
`npm i --save express`

### devDependencies :alien:
`npm i -g nodemon`
`npm i --save-dev nodemon`
`npm start`

[Issue Nodemon](https://github.com/remy/nodemon/issues/1544 "Issue Nodemon")

`> [nodemon] restarting due to changes...`

### PM2 Production :alien:
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


### Node-dev instead Nodemon :alien:

[Node-dev Doc](https://www.npmjs.com/package/node-dev "Node-dev Doc")

`npm install -g node-dev`
`npm install  node-dev --save`
`npx node-dev index.js`

### Body-parser :alien:

[Body-parser Doc](https://www.npmjs.com/package/body-parser "Body-parser Doc")

`npm i --save body-parser`
