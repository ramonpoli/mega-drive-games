module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mega-drive-games/'
    : '/',

  transpileDependencies: [
    'vuetify',
  ],
};
