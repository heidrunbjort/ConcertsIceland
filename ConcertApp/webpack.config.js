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
				test: /\.s?css$/,
				loader: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}

		]
	}
}