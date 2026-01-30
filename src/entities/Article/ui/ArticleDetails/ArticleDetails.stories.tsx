import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '../../model/types/article';

import {
    ArticleType,
    ArticleBlockType,
} from '../../model/consts/articleConsts';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    component: ArticleDetails,
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS За 2025 год',
    img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1714997029/lmcode/zAgHMAqShk-heLmb1Oi4Lg/89373153_01.png',
    views: 1022,
    createdAt: '26.02.2025',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'zoz',
    },
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

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
    name: 'Normal',
    args: {},
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
    name: 'Loading',
    args: {},
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
    ],
    name: 'Error',
    args: {},
};
