// eslint-disable-next-line zozu-plugin/layer-imports
import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (Story: StoryFn) => (
    <Suspense>
        <Story />
    </Suspense>
);
