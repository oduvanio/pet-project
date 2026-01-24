import type { StorybookConfig } from '@storybook/react-webpack5';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'msw-storybook-addon',
        'storybook-addon-themes',
        'storybook-addon-mock',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['../../public'],
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }
        return config;
    },
};
export default config;
