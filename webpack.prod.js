import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: '../index.html',
    favicon: 'src/favicon.png'
});

const copyPlugin = new CopyWebpackPlugin({
    patterns: [
        { from: "docs/img", to: "img" },
    ],
});


export default merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        asyncChunks: true,
        publicPath: '/static/',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist/static'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [htmlPlugin, copyPlugin]
});