import { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    component: NotificationList,
};

export default meta;

type Story = StoryObj<typeof NotificationList>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
