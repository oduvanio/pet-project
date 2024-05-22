import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => {
    const result = await new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
    });
    return result;
});
