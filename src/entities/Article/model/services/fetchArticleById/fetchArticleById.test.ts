import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { ArticleType, ArticleBlockType } from '../../consts/articleConsts';

const data = {
    article: {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS За 2025 год',
        img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1714997029/lmcode/zAgHMAqShk-heLmb1Oi4Lg/89373153_01.png',
        views: 1022,
        createdAt: '26.02.2025',
        type: [ArticleType.IT],
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
    },
};

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
