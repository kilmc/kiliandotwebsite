const fs = require("fs");
const path = require("path");

const annualFolder = path.resolve(__dirname, "../../lists/annual/");

const annualLists = fs
  .readdirSync(annualFolder)
  .filter((name) => path.extname(name) === ".json")
  .map((name) => ({
    key: path.parse(name).name,
    ...require(path.join(annualFolder, name)),
  }));

module.exports = annualLists;
