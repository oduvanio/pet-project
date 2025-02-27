import { ComponentType, lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => {
    const result = await new Promise<{default: ComponentType<any>}>((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 1500);
    });
    return result;
});
