import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    decorators: [],
    name: 'ClearInverted',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
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
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    decorators: [],
    name: 'OutlineSizeL',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    decorators: [],
    name: 'OutlineSizeXL',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
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
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'BackgroundTheme',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'BackgroundInverted',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    name: 'Square',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    name: 'SquareSizeL',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    name: 'SquareSizeXL',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
