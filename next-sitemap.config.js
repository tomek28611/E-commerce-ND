

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
   
    const response = await fetch(`${config.siteUrl}/api/products`);
    const products = await response.json();
    

   
    return products.map((product) => ({
      loc: `/autodil/${product._id}`, 
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
};
