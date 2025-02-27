import { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    component: ArticleDetailsPage,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
