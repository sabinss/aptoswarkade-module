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
