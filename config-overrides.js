const {
  override,
  addPostcssPlugins,
  fixBabelImports,
} = require("customize-cra");

module.exports = override(
  addPostcssPlugins([
    require("autoprefixer"),
    require("postcss-pxtorem")({
      rootValue: 75,
      propList: ["*"],
      minPixelValue: 2,
      exclude: /node_modules/i,
    }),
  ]),
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  })
);
