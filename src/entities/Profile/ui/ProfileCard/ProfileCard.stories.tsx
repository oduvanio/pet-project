import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'zozu',
            first: 'alex',
            city: 'Moscow',
            currency: Currency.EUR,
            avatar,
        },
    },
};

export const withError: Story = {
    decorators: [],
    name: 'withError',
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
    name: 'Loading',
    args: {
        isLoading: true,
    },
};
