import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [StoreDecorator({})],
    name: 'Light',
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    name: 'Dark',
};

export const AuthNavbar: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
    name: 'AuthNavbar',
};
