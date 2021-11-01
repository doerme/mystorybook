import '../src/component/style/index.scss';  //引入全局样式文件
import { configure } from '@storybook/react';

//排列目录的顺序
const loaderFn = () => {
	const allExports = [
		require('../src/stories/Introduction.stories.mdx'),
		require(`../src/component/button/Button.stories.tsx`),
	];
	return allExports;
};

configure(loaderFn, module);

export const parameters = {
	layout: 'centered', // canvas页面示范元素位置居中
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true, //canvas页面显示描述文档的描述，类型，初始值
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};