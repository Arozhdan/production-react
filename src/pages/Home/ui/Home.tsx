import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

export default () => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            <h1>{t('home')}</h1>
        </div>
    );
};
