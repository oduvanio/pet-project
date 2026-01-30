import { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    component: ArticleViewSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
    decorators: [],
    name: 'ArticleViewSelector',
    args: {},
};
