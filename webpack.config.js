const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode : 'development',
    entry: ['@babel/polyfill', path.join(__dirname, 'src/index.js')],
    output: {
        filename: "index.js",
        path: path.join(__dirname),
    },
	module: {
		rules: [
			{
                test: /\.jsx?$/,
                exclude : /node_modules/,
				loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"],
                }
            },         
		]
	},
	resolve : {
		extensions: [".js", ".jsx"],	
    },
}

