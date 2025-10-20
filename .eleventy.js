module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("favicon-32.png");
  eleventyConfig.addPassthroughCopy("favicon-16.png");
  eleventyConfig.addPassthroughCopy("favicon-180.png"); // if you use it for Apple touch
  

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
