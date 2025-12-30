import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    component: EditableProfileCardHeader,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCardHeader>

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    name: 'Normal',
    args: {

    },
};
