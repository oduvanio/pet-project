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
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    decorators: [],
    name: 'Secondary',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
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
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'SecondaryDark',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
