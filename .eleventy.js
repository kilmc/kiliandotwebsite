module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "css", "html", "njk"]);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
