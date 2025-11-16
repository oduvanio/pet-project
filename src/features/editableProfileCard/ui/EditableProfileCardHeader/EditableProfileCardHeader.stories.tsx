import { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    component: EditableProfileCardHeader,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCardHeader>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
