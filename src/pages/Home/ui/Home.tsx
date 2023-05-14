import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('home')}</h1>
        </div>
    );
};
