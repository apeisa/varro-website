module.exports = function(eleventyConfig) {
  // Add custom config here if needed
  return {
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
