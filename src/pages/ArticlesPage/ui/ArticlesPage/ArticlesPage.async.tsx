import { ComponentType, lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => {
    const result = await new Promise<{default: ComponentType<any>}>((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./ArticlesPage')); }, 400);
    });
    return result;
});
