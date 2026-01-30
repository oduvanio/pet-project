import { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';

import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    component: ArticleList,
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

const articleMock = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS За 2025 год',
    img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1714997029/lmcode/zAgHMAqShk-heLmb1Oi4Lg/89373153_01.png',
    views: 1022,
    createdAt: '26.02.2025',
    user: {
        id: '1',
        username: 'zoz',
        avatar: 'https://premiumkorea.ru/upload/1-1.jpg',
    },
    type: ['IT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                "Программа, которую по традиции называют 'Hello, world', очень проста.",
                'JavaScript - это язык, программы на котором можно выполнять в разных средах',
                'Существуют и другие способы запуска JS-кода в браузере',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            title: 'Заголовок этого блока',
            code: "const path = require('path'); \n\nconst server = jsonServer.create();",
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                "Программа, которую по традиции называют 'Hello, world', очень проста.",
                'Существуют и другие способы запуска JS-кода в браузере',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1714997029/lmcode/zAgHMAqShk-heLmb1Oi4Lg/89373153_01.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path'); \n\nconst server = jsonServer.create();",
        },
    ],
} as Article;

export const LoadingBig: Story = {
    decorators: [],
    name: 'LoadingBig',
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG,
    },
};

export const LoadingSmall: Story = {
    decorators: [],
    name: 'LoadingSmall',
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL,
    },
};

export const ListSmall: Story = {
    decorators: [],
    name: 'ListSmall',
    args: {
        isLoading: false,
        articles: new Array(9).fill(0).map((item, index) => ({
            ...articleMock,
            id: String(index),
        })),
        view: ArticleView.SMALL,
    },
};

export const ListBig: Story = {
    decorators: [],
    name: 'ListBig',
    args: {
        isLoading: false,
        articles: new Array(3).fill(0).map((item, index) => ({
            ...articleMock,
            id: String(index),
        })),
        view: ArticleView.BIG,
    },
};
