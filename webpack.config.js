module.exports = {
    target: "electron",
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?modules"]
            }
        ]
    },
    entry: {
        "main/index": "./src/main/index.js",
        "render/app": "./src/render/app.jsx",
    },
    output: {
        filename: "development/dist/[name].js"
    },
    devtool: "source-map"
};
