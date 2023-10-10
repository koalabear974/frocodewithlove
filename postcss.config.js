module.exports = {
  plugins: [
    require('tailwindcss')({ content: ['Views/**/*.cshtml'] }),
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('postcss-minify')
  ]
}
