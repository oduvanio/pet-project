import { articleDetailsReducer } from './articleDetailsSlice';
import { ArcticleType, Article, ArticleBlockType } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS За 2025 год',
    img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1714997029/lmcode/zAgHMAqShk-heLmb1Oi4Lg/89373153_01.png',
    views: 1022,
    createdAt: '26.02.2025',
    type: [ArcticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                "Программа, которую по традиции называют 'Hello, world', очень проста.",
                'JavaScript - это язык, программы на котором можно выполнять в разных средах',
                'Существуют и другие способы запуска JS-кода в браузере',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: "const path = require('path'); \n\nconst server = jsonServer.create();",
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                "Программа, которую по традиции называют 'Hello, world', очень проста.",
                'Существуют и другие способы запуска JS-кода в браузере',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1714997029/lmcode/zAgHMAqShk-heLmb1Oi4Lg/89373153_01.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path'); \n\nconst server = jsonServer.create();",
        },
    ],
};

describe('articleDetailsSlice.test', () => {
    test('test fetchArticleById service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetchArticleById service fullfiled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '1', ''),
        )).toEqual({
            isLoading: false,
            data: article,
        });
    });
});
