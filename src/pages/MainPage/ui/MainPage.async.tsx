import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
    const result = await new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./MainPage')); }, 1500);
    });
    return result;
});
