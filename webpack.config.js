const HtmlWebPackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: 'src/assets/cake.png',
      inject: true,
    }),
    new WebpackManifestPlugin({
      filename: 'public/manifest.json',
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      myAssets: path.resolve(__dirname, 'src/assets/'),
      myBlogAssets: path.resolve(__dirname, 'src/assets/blog/'),
      myProjectsAssets: path.resolve(__dirname, 'src/assets/projects/'),
      myComponents: path.resolve(__dirname, 'src/components/'),
      myEducationComponents: path.resolve(__dirname, 'src/components/education'),
      myExperienceComponents: path.resolve(__dirname, 'src/components/experience'),
      myBlogComponents: path.resolve(__dirname, 'src/components/blog/'),
      myProjectsComponents: path.resolve(__dirname, 'src/components/projects/'),
      myConstants: path.resolve(__dirname, 'src/constants/'),
      myEducationPage: path.resolve(__dirname, 'src/pages/education/'),
      myExperiencePage: path.resolve(__dirname, 'src/pages/experience/'),
      myBlogPage: path.resolve(__dirname, 'src/pages/blog/'),
      myContactPage: path.resolve(__dirname, 'src/pages/contact/'),
      myHomePage: path.resolve(__dirname, 'src/pages/home/'),
      myProjectsPage: path.resolve(__dirname, 'src/pages/projects/'),
    },
  },
};
