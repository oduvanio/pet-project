import { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof CommentCard>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
    },
};

export const Loading: Story = {
    decorators: [],
    name: 'Loading',
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        isLoading: true,
    },
};
