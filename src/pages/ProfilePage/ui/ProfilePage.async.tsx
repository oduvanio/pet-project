import { ComponentType, lazy } from 'react';

export const ProfilePageAsync = lazy(async () => {
    const result = await new Promise<{default: ComponentType<any>}>((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
    });
    return result;
});
