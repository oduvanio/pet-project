import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    decorators: [],
    name: 'Clear',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    decorators: [],
    name: 'Outline',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OutlineDark',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
