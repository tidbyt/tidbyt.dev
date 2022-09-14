export default {
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(webp|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'raw-loader',
                    },
                ],
            },
        ]
    },
};