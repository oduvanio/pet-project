import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    component: ArticleRating,
};

export default meta;

type Story = StoryObj<typeof ArticleRating>

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    name: 'Normal',
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/article-ratings`, ({ request }) => {
                    console.log('[MSW] Intercepted request to:', request.url);
                    const url = new URL(request.url);
                    const userId = url.searchParams.get('userId');
                    const articleId = url.searchParams.get('articleId');
                    console.log('🎯 [MSW] Запрос перехвачен!');
                    console.log('   URL:', request.url);

                    const response = [
                        {
                            rate: 3,
                        },
                    ];
                    return HttpResponse.json(response);
                }),
            ],
        },
    },
};

export const WithoutRate: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    name: 'WithoutRate',
    args: {
        articleId: '1',
    },
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}/article-ratings`, ({ request }) => {
                    console.log('[MSW] Intercepted request to:', request.url);
                    const url = new URL(request.url);
                    const userId = url.searchParams.get('userId');
                    const articleId = url.searchParams.get('articleId');
                    console.log('🎯 [MSW] Запрос перехвачен!');
                    console.log('   URL:', request.url);

                    return HttpResponse.json([]);
                }),
            ],
        },
    },
};
