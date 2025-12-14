import { Meta, StoryObj } from '@storybook/react';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';
import { mswLoader } from 'msw-storybook-addon';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

console.log('🔧 API_URL для моков:', __API__);

const meta: Meta<typeof ArticleRecommendationsList> = {
    component: ArticleRecommendationsList,
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    name: 'ArticleRecommendationsList',
    args: {

    },
    parameters: {
        msw: {
            handlers: [
                http.get(`${__API__}articles`, ({ request }) => {
                    console.log('[MSW] Intercepted request to:', request.url);
                    const url = new URL(request.url);
                    const limit = url.searchParams.get('_limit');
                    console.log('🎯 [MSW] Запрос перехвачен!');
                    console.log('   URL:', request.url);
                    console.log('   Параметр _limit:', limit);

                    // Создаем массив рекомендаций
                    const recommendations = [];
                    for (let i = 1; i <= (limit ? parseInt(limit, 2) : 3); i += 1) {
                        recommendations.push({
                            ...article,
                            id: String(i),
                            title: `Рекомендация ${i}`,
                            views: 100 + i * 10,
                        });
                    }

                    console.log('   Отправляем:', recommendations.length, 'статей');
                    return HttpResponse.json(recommendations);
                }),
            ],
        },
    },
};
