const annualLists = require("./lists/annual");
const tagSet = new Set();

for (const list of annualLists) {
  for (const tag of list.tags) {
    tagSet.add(tag);
  }
}

tagSet.add("dynamic");

module.exports = [...tagSet].sort();
