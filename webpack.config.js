var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: __dirname + "/js/main.js",
        styles: __dirname + '/sass/landing.scss'
    },
    output: {
        path: __dirname + "/js/dist/",
        publicPath: __dirname + "/public/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin({
            filename: __dirname + '/dist/[name].bundle.css',
            allChunks: true,
        })
    ],
    resolve: {
        alias: {
            'jquery': __dirname + '/node_modules/jquery/dist/jquery.js'
        }
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: 'file-loader' }
        ],
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1',
                })
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    }
};
