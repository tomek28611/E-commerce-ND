const { slugify } = require('./lib/utils');

module.exports = {
  siteUrl: 'https://www.nahradni-dily.com/',
  generateRobotsTxt: true,

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },

  additionalPaths: async (config) => {
    // Fetch products data
    const response = await fetch(`${config.siteUrl}/api/products`);
    const products = await response.json();
    

    // Zwróć ścieżki z użyciem slug
    return products.map((product) => ({
      loc: `/autodil/${slugify(product.title)}`, 
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
};
