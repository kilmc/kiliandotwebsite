module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "css", "html"]);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
