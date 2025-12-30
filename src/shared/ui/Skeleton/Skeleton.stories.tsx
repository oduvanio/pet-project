import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    decorators: [],
    name: 'Circle',
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const NormalDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'NormalDark',
    args: {
        width: '100%',
        height: 200,
    },
};

export const CircleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'CircleDark',
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const NormalOrange: Story = {
    decorators: [ThemeDecorator(Theme.ORANGE)],
    name: 'NormalOrange',
    args: {
        width: '100%',
        height: 200,
    },
};

export const CircleOrange: Story = {
    decorators: [ThemeDecorator(Theme.ORANGE)],
    name: 'CircleOrange',
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
