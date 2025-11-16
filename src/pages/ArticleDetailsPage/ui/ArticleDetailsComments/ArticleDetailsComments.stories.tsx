import { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
    component: ArticleDetailsComments,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
