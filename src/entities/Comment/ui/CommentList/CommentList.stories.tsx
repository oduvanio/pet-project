import { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    component: CommentList,
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'comment 2',
                user: { id: '2', username: 'Petia' },
            },
        ],
    },
};

export const Loading: Story = {
    decorators: [],
    name: 'Loading',
    args: {
        comments: [],
        isLoading: true,
    },
};
