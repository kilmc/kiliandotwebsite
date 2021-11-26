const fs = require("fs");
const path = require("path");

const listFiles = path.resolve(__dirname, "../lists/data/");

module.exports = fs
  .readdirSync(listFiles)
  .filter((name) => path.extname(name) === ".json")
  .map((name) => ({
    key: path.parse(name).name,
    ...require(path.join(listFiles, name)),
  }))
  .reduce((accum, file) => {
    const category = file.key.split(".")[1];
    if (!accum[category]) {
      accum[category] = [file];
    } else {
      accum[category].push(file);
    }
    return accum;
  }, {});
