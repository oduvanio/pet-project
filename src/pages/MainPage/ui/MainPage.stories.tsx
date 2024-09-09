import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>

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
