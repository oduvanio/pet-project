import { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    component: ListBox,
};

export default meta;

type Story = StoryObj<typeof ListBox>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {
        defaultValue: 'Выберите значение',
        onChange: (value: string) => {},
        value: undefined,
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2', disabled: true },
            { value: '3', content: '3' },
        ],
    },
};
