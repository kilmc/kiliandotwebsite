const dynamicTags = require("./site/_data/dynamic-tags");

module.exports = function (eleventyConfig) {
  for (const tag of dynamicTags) {
    eleventyConfig.addCollection(tag, (collectionApi) => {
      return collectionApi.getFilteredByTag(tag);
    });
  }

  eleventyConfig.setTemplateFormats(["md", "css", "html", "njk", "11ty.js"]);
  eleventyConfig.setBrowserSyncConfig({
    files: "./dist/css/**/*.css",
  });

  return {
    dir: {
      input: "site",
      output: "dist",
    },
  };
};
