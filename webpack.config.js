/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's p5.js TypeScript template,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

// TODO - update copyright
// TODO - test bundling
// TODO - test production build
// TODO - test stats

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        sketch: {
            import: './src/main/sketch.ts',
            dependOn: [ 'p5' ]
        },
        p5: 'p5'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js', '.json' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'template sketch',
            inject: 'body',
            favicon: './assets/icon/favicon.ico'
        }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        concatenateModules: true,
        emitOnErrors: false,
        mangleExports: true,
        mergeDuplicateChunks: true,
        minimize: true,
        providedExports: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true
    },
    output: {
        path: path.resolve(__dirname, 'out/dist'),
        filename: '[name].[fullhash:8].js',
        sourceMapFilename: '[name].[fullhash:8].map',
        chunkFilename: '[name].[fullhash:8].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'out/dist')
        },
        client: {
            overlay: true
        },
        compress: true,
        host: '127.0.0.1',
        port: 8080,
        hot: false,
        watchFiles: ['./src/**/*.ts'],
        liveReload: true,
        open: true,
        webSocketServer: false
    }
};
