import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
            },
            {
                content: 'third',
            },
        ],
    },
};
