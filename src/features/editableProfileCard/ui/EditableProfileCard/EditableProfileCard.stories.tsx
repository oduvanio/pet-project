import { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    component: EditableProfileCard,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCard>

export const Normal: Story = {
    decorators: [],
    name: 'EditableProfileCard',
    args: {

    },
};