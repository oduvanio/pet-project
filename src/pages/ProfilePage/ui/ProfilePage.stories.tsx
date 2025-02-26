import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Armenia,
                lastname: 'zozu',
                first: 'alex',
                city: 'Moscow',
                currency: Currency.EUR,
            },
        },
    })],
    name: 'Light',
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Armenia,
                lastname: 'zozu',
                first: 'alex',
                city: 'Moscow',
                currency: Currency.EUR,
            },
        },
    })],
    name: 'Dark',
};
