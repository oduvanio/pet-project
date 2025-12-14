import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
    component: ArticleDetailsComments,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    name: 'Normal',
    args: {

    },
};
