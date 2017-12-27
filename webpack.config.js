const webpack            = require('webpack');
const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const htmlTemplate       = require('html-webpack-template');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR   = path.resolve(__dirname, 'src');

const fontLoaderConfig = {
  name:  '/fonts/[name].[ext]',
  limit: 100,
};

// let's bring in local environmental variables
if (!('NODE_ENV' in process.env)) require('dotenv').config();

const config = {
  entry: {
    main:   `${APP_DIR}/Index.jsx`,
    // splits code for each vender and make a file for each
    vendor: [ 'react', 'react-dom', 'prop-types', 'react-router-dom'],
  },
  output: {
    path:     BUILD_DIR,
    filename: 'js/[name].js',
  },
  cache:   true,
  devtool: 'eval',
  stats:   {
    colors:  true,
    reasons: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      title:      'Top Shelf',
      xhtml:      true,
      inject:     false,
      template:   htmlTemplate,
      appMountId: 'container',
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader!sass-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        use:  [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader',
        }),
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.ico$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/font-woff',
          },
        }],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/octet-stream',
          },
        }],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'file-loader',
          options: fontLoaderConfig,
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'mimetype=image/svg+xml',
          },
        }],
      },
    ],
  },
};

if (process.env && process.env.ANALYZE_WEBPACK) {
  console.log(process.env);
  config.plugins.unshift(new BundleAnalyzerPlugin());
}

if (process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
    }),
  ];

  config.plugins = config.plugins.concat(prodPlugins);
  config.cache = false;
  config.devtool = undefined;
}

module.exports = config;
