import { ComponentType, lazy } from 'react';

export const ArticleEditPageAsync = lazy(async () => {
    const result = await new Promise<{default: ComponentType<any>}>((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./ArticleEditPage')); }, 400);
    });
    return result;
});
