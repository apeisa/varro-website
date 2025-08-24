module.exports = function(eleventyConfig) {
  // Derive a pathPrefix automatically for GitHub Pages project sites.
  // Locally and for user/organization sites, this stays "/".
  const repo = process.env.GITHUB_REPOSITORY;
  const pathPrefix = repo ? `/${repo.split('/')[1]}/` : "/";

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
