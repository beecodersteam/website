module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }), {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    }],
};
