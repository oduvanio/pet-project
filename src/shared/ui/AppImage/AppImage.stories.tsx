import { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
    component: AppImage,
};

export default meta;

type Story = StoryObj<typeof AppImage>

export const Normal: Story = {
    decorators: [],
    name: 'Normal',
    args: {

    },
};
