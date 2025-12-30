import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    component: ArticleDetailsPageHeader,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPageHeader>

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    name: 'Normal',
    args: {

    },
};
