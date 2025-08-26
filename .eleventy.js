module.exports = function(eleventyConfig) {
  // Copy static assets (images, etc.) to the output as-is
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addWatchTarget("assets");

  // Using a custom domain on GitHub Pages: keep root path prefix
  const pathPrefix = "/";

  return {
    pathPrefix,
    dir: {
      input: '.',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site'
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
