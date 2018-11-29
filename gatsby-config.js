module.exports = {
  siteMetadata: {
    title: `incessantmeraki`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              classPrefix: `language-`
            }
          }
        ]
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
    
  ]
};
