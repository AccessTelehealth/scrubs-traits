var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: 'dist',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['es2015', 'stage-0',],
        'plugins': ['transform-flow-strip-types',],
      },
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader',
    },],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'wip_modules',],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
