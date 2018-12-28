# gatsby-starter-blog
Gatsby starter for creating a blog

Install this starter (assuming Gatsby is installed) by running from your CLI:
`gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog`

## Running in development

```
./node_modules/.bin/gatsby develop
```

## Publishing

```
rm -fr public  .cache  .intermediate-representation  .DS_Store
./node_modules/.bin/gatsby build
./node_modules/.bin/gatsby serve  # test if works
git push origin master
```

