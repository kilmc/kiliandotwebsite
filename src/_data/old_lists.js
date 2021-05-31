function groupBy(key) {
  return (acc, item) => {
    if (!acc[item[key]]) {
      acc[item[key]] = [item];
    } else {
      acc[item[key]].push(item);
    }
    return acc;
  };
}

function arrGroupBy(key) {
  return (acc, item) => {
    if (acc.some(([key]) => key === item.year)) {
      acc.forEach((element) => {
        if (element[0] === item.year) {
          element[1].push(item);
        }
      });

      return acc;
    } else {
      acc.push([item[key], [item]]);
      return acc;
    }
  };
}

// const listsDirPath = "../../db/lists/";
// const normalizedPath = require("path").join(__dirname, listsDirPath);
// const { annual, running } = require("fs")
//   .readdirSync(normalizedPath)
//   .map((file) => require(listsDirPath + file))
//   .reduce(groupBy("type"), {});

// const annualByYear = Object.values(annual)
//   .reduce(arrGroupBy("year"), [])
//   .sort((a, b) => b[0] - a[0]);

// module.exports = () => {
//   return { annual: annualByYear, running };
// };
