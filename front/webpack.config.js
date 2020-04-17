module.exports = {
    mode: "development",
    entry: './src/app.tsx',
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".css"]
             
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};