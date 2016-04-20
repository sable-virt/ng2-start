'use strict';
let webpack = require('webpack');
let webpackConfig = {
    entry: {
        polyfills: './app/polyfills.ts',
        main: './app/main.ts'
    },
    output: {
        path: 'public/js',
        filename: '[name].js',
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr',
        publicPath: '/js/'
    },
    devtool: '#source-map',
    devServer: {
        inline: true,
        contentBase: 'public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['','.ts','.js'],
        modulesDirectories: [
            'node_modules',
            'app'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude:/node_modules/,
                loaders: ['ts']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('polyfills','polyfills.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};

module.exports = webpackConfig;