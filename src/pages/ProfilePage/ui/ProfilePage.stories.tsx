import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    decorators: [StoreDecorator({})],
    name: 'Light',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    name: 'Dark',
    parameters: {
        backgroundColor: { control: 'color' },
    },
};
