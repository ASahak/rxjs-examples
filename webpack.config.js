const path = require('path');

module.exports = {
    "mode": "none",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    resolve: {
        fallback: {
            "fs": false
        },
    },
    watch: true,
    devServer: {
        static : {
            directory : path.join(__dirname, "dist/")
        },
        port: 8000,
        // publicPath
        devMiddleware:{
            publicPath: "https://localhost:8000/",
        },
        // hotOnly
        hot: "only",
    }
}
