# Installing aptoswarcade npm package in React application

## Steps:

1. create craco.config.js in root folder and paste the below code:
   `const path = require('path');
   const fs = require('fs');
   const cracoBabelLoader = require('craco-babel-loader');

// manage relative paths to packages
const appDirectory = fs.realpathSync(process.cwd());
const resolvePackage = (relativePath) =>
path.resolve(appDirectory, relativePath);

module.exports = {
plugins: [
{
plugin: cracoBabelLoader,
options: {
includes: [resolvePackage('node_modules/aptoswarcade')],
},
},
],
};`

2. create babel.config.js and set below code:
   `
   module.exports = {
   presets: [
   "@babel/preset-env",
   "@babel/preset-react",
   {
   pragma: "dom", // default pragma is React.createElement (only in classic runtime)
   pragmaFrag: "DomFrag", // default is React.Fragment (only in classic runtime)
   throwIfNamespace: false, // defaults to true
   runtime: "classic", // defaults to classic
   importSource: "node_modules/aptoswarkade", // defaults to react (only in automatic runtime)
   },
   ],
   plugins: ["@babel/plugin-proposal-class-properties"],
   env: {
   development: {},
   production: {},
   test: {
   presets: ["@babel/preset-env"],
   },
   },
   };

`

3. In package.json add new start script as below:
   "scripts": {
   "start": "craco start",
   },

4. Run yarn start
