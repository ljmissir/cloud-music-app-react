const files = require.context("./modules", false, /\.js$/);

let services = {};

files.keys().forEach((key) => {
  services = { ...services, ...files(key) };
});

export default services;
