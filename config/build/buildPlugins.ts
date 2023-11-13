import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExptractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExptractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}