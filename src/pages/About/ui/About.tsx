import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('about')}</h1>
        </div>
    );
};
