import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const plugins = [
		
	]

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [['i18next-extract', { locales: ['ru', 'en'] }]],
			},
		},
	}

	const cssLoader = buildCssLoader(isDev)

	// Если не используем TS - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
