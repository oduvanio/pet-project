import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '../Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '../../redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const text = short ? t('Короткий язык') : t('Язык');

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    className={classNames('', {}, [className])}
                    variant="clear"
                    onClick={toggle}
                >
                    {text}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    {text}
                </ButtonDeprecated>
            }
        />
    );
});
