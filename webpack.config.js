/**
 * module import
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
/**
 * const variables init
 */
const { NODE_ENV } = process.env;
const production = 'production', development = 'development';
const isProduction = Object.is(NODE_ENV, production), isDevelopment = Object.is(NODE_ENV, development);
console.log(`check NODE_ENV: ${NODE_ENV}, isProduction: ${isProduction}, isDevelopment: ${isDevelopment}`)

/**
 * webpack dev server config
 */
const serverConfig = {
    compress: true,
    port: 9000
}

/**
 * webpack config mode
 * @returns ${production} or ${development}
 * @throws Error
 */
function getAndCheckWebpackMode() {
    if (isDevelopment) {
        return development;
    }
    throw new Error(`check the NODE_ENV, must be ${development}`);
}

/**
 * webpack config
 * entry,output,module,splitChunks...
 */
const webpackConfig = {
    mode: getAndCheckWebpackMode(),
    entry: {
        // installation: './installation/index.js',
        // tutorial: './tutorial/index.js',
        // basic: "./basic/index.js",
        auth: "./auth/index.js",
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            {
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        ]
                    }
                }
            },
            {
                test: /\.m?(sa|sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './installation/template.html',
        //     filename: 'index.html',
        //     title: 'installation!',
        //     chunks: ['installation']
        // }),
        // new HtmlWebpackPlugin({
        //     template: './tutorial/template.html',
        //     filename: 'index.html',
        //     title: 'tutorial!',
        //     chunks: ['tutorial']
        // }),
        new HtmlWebpackPlugin({
            template: './auth/template.html',
            filename: 'index.html',
            title: 'auth',
            chunks: ['auth']
        }),
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: '[name].contenthash.css',
            chunkFilename: '[id].contenthash.css'
        }),
    ],
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 3000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 5000000, // 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            // 只给出js与css文件的性能提示
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: /@license/i,
                    },
                },
                extractComments: true,
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
                    name: "react",
                    chunks: "all"
                },
                commons: {
                    test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
                    name: 'commons',
                    chunks: 'all',
                },
            },
        },
    },
    devServer: serverConfig
};

module.exports = webpackConfig;