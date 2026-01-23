import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    component: NotificationItem,
};

export default meta;

type Story = StoryObj<typeof NotificationItem>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {
        item: {
            id: '1',
            title: 'title',
            description: 'description',
        },
    },
};
