import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    args: {
        children: 'Text',
        variant: 'primary',
    },
};

export const Red: Story = {
    decorators: [],
    name: 'Red',
    args: {
        children: 'Text',
        variant: 'red',
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'PrimaryDark',
    args: {
        children: 'Text',
        variant: 'primary',
    },
};

export const RedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'RedDark',
    args: {
        children: 'Text',
        variant: 'red',
    },
};
