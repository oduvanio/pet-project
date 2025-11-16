import { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    component: ArticleRecommendationsList,
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>

export const Normal: Story = {
    decorators: [],
    name: 'ArticleRecommendationsList',
    args: {

    },
};
