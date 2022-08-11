import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: '../index.html',
    favicon: 'src/favicon.png'
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
    plugins: [htmlPlugin]
});