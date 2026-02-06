import { Meta, StoryObj } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';

const meta: Meta<typeof ArticlePageGreeting> = {
    component: ArticlePageGreeting,
};

export default meta;

type Story = StoryObj<typeof ArticlePageGreeting>;

export const Normal: Story = {
    decorators: [],
    name: 'ArticlePageGreeting',
    args: {},
};
