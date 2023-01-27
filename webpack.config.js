const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        falename: path.resolve(__dirname, 'src/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    devServer: {
        port: 9003,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'dist')
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
        title: 'My Page',
        filename: 'index.html',
        template: 'src/index.html',
    })
],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },

};