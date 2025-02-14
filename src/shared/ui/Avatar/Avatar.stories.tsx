import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    decorators: [],
    name: 'Small',
    argTypes: {
        className: {
            backgroundColor: { control: 'color' },
        },
    },
    args: {
        size: 50,
        src: AvatarImg,
    },
};

