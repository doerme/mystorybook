const path = require('path');
// 配置文档 https://storybook.js.org/docs/react/configure/overview
module.exports = {
       //使用scss,使用前记得安装对应的loader
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		// Return the altered config
		return config;
	},
	stories: [
            '../src/**/*.stories.mdx', 
            '../src/component/**/*.stories.@(js|jsx|ts|tsx)'
        ],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};