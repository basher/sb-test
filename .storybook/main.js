/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    framework: {
        name: '@storybook/html-vite',
        options: {},
    },
    docs: {
        autodocs: false,
    },
};
export default config;
