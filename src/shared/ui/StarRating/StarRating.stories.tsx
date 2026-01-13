import { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    component: StarRating,
};

export default meta;

type Story = StoryObj<typeof StarRating>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
