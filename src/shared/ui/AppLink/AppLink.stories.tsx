import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
};

export default meta;

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    decorators: [],
    name: 'Secondary',
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'PrimaryDark',
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'SecondaryDark',
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
