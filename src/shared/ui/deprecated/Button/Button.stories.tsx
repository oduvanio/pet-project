import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    decorators: [],
    name: 'Clear',
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    decorators: [],
    name: 'ClearInverted',
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    decorators: [],
    name: 'Outline',
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    decorators: [],
    name: 'OutlineSizeL',
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    decorators: [],
    name: 'OutlineSizeXL',
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OutlineDark',
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'BackgroundTheme',
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'BackgroundInverted',
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    name: 'Square',
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    name: 'SquareSizeL',
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const Disabled: Story = {
    name: 'Disabled',
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
