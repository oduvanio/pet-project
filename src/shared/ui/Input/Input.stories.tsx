import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    argTypes: {},
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};
