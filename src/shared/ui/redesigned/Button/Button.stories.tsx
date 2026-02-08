import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
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
        variant: 'clear',
    },
};

export const ClearInverted: Story = {
    decorators: [],
    name: 'ClearInverted',
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const Outline: Story = {
    decorators: [],
    name: 'Outline',
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const OutlineSizeL: Story = {
    decorators: [],
    name: 'OutlineSizeL',
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    decorators: [],
    name: 'OutlineSizeXL',
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl',
    },
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'OutlineDark',
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const BackgroundTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'BackgroundTheme',
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const BackgroundInverted: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'BackgroundInverted',
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const Square: Story = {
    name: 'Square',
    args: {
        children: '>',
        variant: 'clear',
        square: true,
    },
};

export const SquareSizeL: Story = {
    name: 'SquareSizeL',
    args: {
        children: '>',
        variant: 'clear',
        square: true,
        size: 'l',
    },
};

export const Disabled: Story = {
    name: 'Disabled',
    args: {
        children: '>',
        variant: 'outline',
        disabled: true,
    },
};
