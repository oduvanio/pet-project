import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>

export const Light: Story = {
    decorators: [],
    name: 'Ligth',
    args: {
        isOpen: true,
        children: 'Много текста для модалки, для тестирования модалки в сторибуке, просто много текста',
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    name: 'Dark',
    args: {
        isOpen: true,
        children: 'Много текста для модалки, для тестирования модалки в сторибуке, просто много текста',
    },
};
