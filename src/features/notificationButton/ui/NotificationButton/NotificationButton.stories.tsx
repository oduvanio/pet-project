import { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    component: NotificationButton,
};

export default meta;

type Story = StoryObj<typeof NotificationButton>;

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {},
};
