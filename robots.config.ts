export default [
  { UserAgent: "*" },
  { Allow: "/" },

  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` },
];
