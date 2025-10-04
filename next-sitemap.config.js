/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://templeguides.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin/*", "/api/*"],
  additionalPaths: async (config) => {
    const result = [];

    // Add dynamic routes for services
    const services = require("./src/data/services.ts").services;
    services.forEach((service) => {
      result.push({
        loc: `/services/${service.slug}`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    // Add dynamic routes for tours
    const tours = require("./src/data/tours.ts").tours;
    tours.forEach((tour) => {
      result.push({
        loc: `/tours/${tour.slug}`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    // Add dynamic routes for blog posts
    const blogPosts = require("./src/data/blog-posts.ts").blogPosts;
    blogPosts.forEach((post) => {
      result.push({
        loc: `/blog/${post.slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: post.updatedAt,
      });
    });

    return result;
  },
};
