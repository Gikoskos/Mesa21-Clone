const path = require("path");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const build_path = "dist/";
const index_path = build_path + "index.html";

module.exports = {
    entry: "./src/main.jsx",
    //mode: "development",

    output: {
        path: path.resolve(__dirname, build_path),
        publicPath: build_path,
        filename: "bundle.js",
    },

    //since we're doing client-side routing, this is needed
    //to tell webpack-dev-server to default all immediate URLs to the index
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /./, to: index_path }
            ]
        },
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
            test: /\.s?(c|a)ss$/,
            use: [
                'style-loader',
                'css-hot-loader',
                {
                    loader: "css-loader",
                    options: {
                        url: false,
                        sourceMap: true
                    }
                },
                /*{
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                },*/
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src'
                        //emitFile: false
                    }
                }
            ]
          },
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    devServer: {
        contentBase: path.join(__dirname, build_path),
        port: 3000,
        publicPath: "http://localhost:3000/" + build_path,
        hotOnly: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /*new CleanWebpackPlugin([build_path]),
        new MiniCssExtractPlugin({
            filename: "styles/style.css",
        })*/
    ]
};

/*if (process.env.NODE_ENV !== 'production') {
    module.exports.module.rules[1].use[0] = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '../'
        }
    };
}*/
