import { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    component: ListBox,
};

export default meta;

type Story = StoryObj<typeof ListBox>

export const TopLeft: Story = {
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    name: 'TopLeft',
    args: {
        defaultValue: 'Выберите значение',
        onChange: (value: string) => {},
        value: undefined,
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2', disabled: true },
            { value: '3', content: '3' },
        ],
        direction: 'top left',
    },
};

export const TopRight: Story = {
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    name: 'TopRight',
    args: {
        defaultValue: 'Выберите значение',
        onChange: (value: string) => {},
        value: undefined,
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2', disabled: true },
            { value: '3', content: '3' },
        ],
        direction: 'top right',
    },
};

export const BottomLeft: Story = {
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    name: 'BottomLeft',
    args: {
        defaultValue: 'Выберите значение',
        onChange: (value: string) => {},
        value: undefined,
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2', disabled: true },
            { value: '3', content: '3' },
        ],
        direction: 'bottom left',
    },
};

export const BottomRight: Story = {
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    name: 'BottomRight',
    args: {
        defaultValue: 'Выберите значение',
        onChange: (value: string) => {},
        value: undefined,
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2', disabled: true },
            { value: '3', content: '3' },
        ],
        direction: 'bottom right',
    },
};
