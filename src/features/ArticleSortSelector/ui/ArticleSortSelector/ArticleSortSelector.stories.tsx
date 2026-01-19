import { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    component: ArticleSortSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>

export const Normal: Story = {
    decorators: [],
    name: 'ArticleSortSelector',
    args: {

    },
};
