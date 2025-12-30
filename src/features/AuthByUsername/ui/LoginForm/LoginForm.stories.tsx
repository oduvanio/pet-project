import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    })],
    name: 'Primary',
    args: {},
};

export const withError: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            error: 'ERROR',
        },
    })],
    name: 'withError',
    args: {},
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
    name: 'Loading',
    args: {},
};
