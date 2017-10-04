module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + "/build", 
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [/*'react-hot-loader',*/ 'babel-loader']
			},
			{
				test: /\.scss$/,
				loader: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			}
		]
	}
}