import { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    component: CommentList,
};

export default meta;

type Story = StoryObj<typeof CommentList>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
