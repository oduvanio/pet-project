import { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    component: ArticleInfiniteList,
};

export default meta;

type Story = StoryObj<typeof ArticleInfiniteList>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
