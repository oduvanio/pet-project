import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>

export const Light: Story = {
    decorators: [],
    name: 'Light',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'Dark',
    parameters: {
        backgroundColor: { control: 'color' },
    },
};
