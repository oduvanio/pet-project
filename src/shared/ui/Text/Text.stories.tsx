import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
    },
};

export const Error: Story = {
    decorators: [],
    name: 'Error',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
        theme: TextTheme.ERROR,
    },
};

export const OnlyText: Story = {
    decorators: [],
    name: 'OnlyText',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        text: 'Description text for storybook component',
    },
};

export const OnlyTitle: Story = {
    decorators: [],
    name: 'OnlyTitle',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        title: 'Tilte lorem ipsun',
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'PrimaryDark',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        title: 'Tilte lorem ipsun',
        text: 'Description text for storybook component',
    },
};

export const OnlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OnlyTextDark',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        text: 'Description text for storybook component',
    },
};

export const OnlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OnlyTitleDark',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        title: 'Tilte lorem ipsun',
    },
};
