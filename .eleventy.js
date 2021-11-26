const _ = require("lodash");

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("listIndex", (collection) =>
    _.chain(collection.getFilteredByTag("list"))
      .groupBy((list) => {
        const year = list.data.year;
        return year ? year : "alltime";
      })
      .toPairs()
      .reverse()
      .value()
  );

  eleventyConfig.setTemplateFormats(["md", "html", "njk", "11ty.js"]);
  eleventyConfig.addPassthroughCopy({ "site/_assets": "assets" });
  eleventyConfig.setBrowserSyncConfig({
    files: "./dist/css/**/*.css",
  });
  eleventyConfig.addWatchTarget("./site/_assets/scripts");

  return {
    dir: {
      input: "site",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
