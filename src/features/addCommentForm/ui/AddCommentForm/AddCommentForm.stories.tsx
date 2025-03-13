import { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    component: AddCommentForm,
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>

export const Normal: Story = {
    decorators: [
        StoreDecorator({}),
    ],
    name: 'Normal',
    args: {
        onSendComment: action('onSendComment'),
    },
};
