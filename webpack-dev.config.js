const path = require("path");
const webpack = require("webpack");

const build_path = "dist/";
const index_path = "/" + build_path + "index.html";

module.exports = {
    entry: "./src/main.jsx",
    mode: "development",

    output: {
        path: path.resolve(__dirname, build_path),
        publicPath: "/" + build_path,
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
                        context: 'src'
                    }
                }
            ]
          },
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    //since we're doing client-side routing, this is needed
    //to tell webpack-dev-server to default all immediate URLs to the index
    devServer: {
        contentBase: path.join(__dirname, build_path),
        port: 3000,
        publicPath: "http://localhost:3000/" + build_path,
        hotOnly: true,
        historyApiFallback: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};