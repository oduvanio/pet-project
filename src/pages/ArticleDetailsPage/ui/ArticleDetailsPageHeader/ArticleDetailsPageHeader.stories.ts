import { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    component: ArticleDetailsPageHeader,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPageHeader>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
