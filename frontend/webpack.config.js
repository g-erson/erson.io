const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": "src/index.js",
    "output": {
        "path": __dirname+'/static',
        "filename": "app.[hash].js"
    },
    "devServer": {
      "publicPath": "/",
      "contentBase": path.join(__dirname, 'static'),
      "compress": true,
      "port": 3000,
      "hot": true,
      "proxy": {
        '/api': 'http://backend:8080'
      }

    },
    "plugins": [
        new HtmlWebpackPlugin({
            hash: true,
            inject: false,
            template: require('html-webpack-template'),
            appMountId: "app",
            filename: './index.html'
        })
    ],
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.(gif|png|jpe?g|svg)$/i,
                "use": [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
            }
        ]
    }
}
