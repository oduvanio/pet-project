import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof MainPage>

export const Light: Story = {
    decorators: [],
    name: 'Light',
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'Dark',
};
