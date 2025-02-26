import { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    component: CountrySelect,
};

export default meta;

type Story = StoryObj<typeof CountrySelect>

export const Primary: Story = {
    decorators: [],
    name: 'Primary',
    args: {},
};
