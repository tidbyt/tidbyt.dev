import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    favicon: 'src/favicon.png'
});

const copyPlugin = new CopyWebpackPlugin({
    patterns: [
        {from: "docs/img", to: "static/img"},
    ],
});

export default merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:8080',
                ws: true,
            },
        ],
    },
    plugins: [htmlPlugin, copyPlugin]
});