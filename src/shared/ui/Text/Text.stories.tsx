import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
    },
};

export const Error: Story = {
    decorators: [],
    name: 'Error',
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
        theme: TextTheme.ERROR,
    },
};

export const OnlyText: Story = {
    decorators: [],
    name: 'OnlyText',
    args: {
        text: 'Description text for storybook component',
    },
};

export const OnlyTitle: Story = {
    decorators: [],
    name: 'OnlyTitle',
    args: {
        title: 'Tilte lorem ipsun',
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'PrimaryDark',
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
    },
};

export const OnlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OnlyTextDark',
    args: {
        text: 'Description text for storybook component',
    },
};

export const OnlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OnlyTitleDark',
    args: {
        title: 'Tilte lorem ipsun',
    },
};

export const SizeL: Story = {
    decorators: [],
    name: 'SizeL',
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    decorators: [],
    name: 'SizeM',
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    decorators: [],
    name: 'SizeS',
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
        size: TextSize.S,
    },
};
