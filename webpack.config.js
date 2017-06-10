const webpack         = require("webpack");
const {resolve}       = require("path");
const {CheckerPlugin} = require("awesome-typescript-loader")
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: {
        alias: {
          react: resolve(__dirname, './node_modules/react'),
          React: resolve(__dirname, './node_modules/react')
        },
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"],
        modules: [
          'src',
          'node_modules'
        ]
    },
    entry:   [
        "react-hot-loader/patch", // activate HMR for React
        "webpack-dev-server/client?http://localhost:8080",// bundle the client for webpack-dev-server and connect to the provided endpoint
        "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
        "./index.tsx" // the entry point of our app
    ],
    output:  {
        filename:   "bundle.js", // the output bundle
        path:       resolve(__dirname, "dist"),
        publicPath: "/" // necessary for HMR to know where to load the hot update chunks
    },

    context: resolve(__dirname, "src"),
    devtool: "source-map",

    devServer: {
        hot:         true, // enable HMR on the server
        contentBase: resolve(__dirname, "dist"), // match the output path
        publicPath:  "/" // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test:    /\.js$/,
                use:     ["babel-loader", "source-map-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use:  "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                use:  ["style-loader", "css-loader?modules", "postcss-loader",],
            },
            {
                test:    /\.scss$/,
                loaders: ["style-loader", "css-loader?modules", "postcss-loader", "sass-loader"]
            },
            {
                test:    /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
                ]
            }
        ],
    },

    plugins:     [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        new HtmlWebpackPlugin({
          template : resolve(__dirname, 'public/index.html'),
          hash     : false,
          favicon  : resolve(__dirname, 'public/favicon.ico'),
          filename : 'index.html',
          inject   : 'body',
          minify   : {
            collapseWhitespace : true
          }
        }),

    ],
    externals:   {
        "react":     "React",
        "react-dom": "ReactDOM"
    },
    performance: {
        hints: false
    }
};
