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

    },
};
