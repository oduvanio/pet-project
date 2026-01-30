import { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    component: ArticlesPage,
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {},
};
