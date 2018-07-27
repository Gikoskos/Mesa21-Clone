const path = require("path");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const build_path = "dist/";

module.exports = {
    entry: "./src/main.jsx",
    mode: "production",

    output: {
        path: path.resolve(__dirname, build_path),
        publicPath: "./",
        filename: "bundle.js",
    },

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src',
                        emitFile: true
                    }
                }
            ]
          },
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MinifyPlugin()
    ]
};
