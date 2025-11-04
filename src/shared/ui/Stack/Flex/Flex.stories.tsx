import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>

export const Row: Story = {
    decorators: [],
    name: 'Row',
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const Column: Story = {
    decorators: [],
    name: 'Column',
    args: {
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    decorators: [],
    name: 'RowGap4',
    args: {
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    decorators: [],
    name: 'RowGap8',
    args: {
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    decorators: [],
    name: 'RowGap16',
    args: {
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const RowGap32: Story = {
    decorators: [],
    name: 'RowGap32',
    args: {
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    decorators: [],
    name: 'ColumnGap16',
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    decorators: [],
    name: 'ColumnAlignEnd',
    args: {
        align: 'end',
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};
