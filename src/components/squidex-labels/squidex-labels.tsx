import { ChangeEvent } from 'react';
import {
    LabelKeyProps,
    startSquidexLanguage,
    useHandleSquidexChangeLanguage,
    useTranslation,
} from '@/lib';
import languages from './languages.json';
import labels from './labels.json';

const SquidexLabels: React.FC = () => {
    // give the label key and return the translated label
    const { t } = useTranslation();

    // hook to handle the change of the language
    const { defaultLanguage, setDefaultLanguage } =
        useHandleSquidexChangeLanguage();

    // to start the squidex-language, start the startSquidexLanguage function and pass the default
    // language and labels from squidex, do this on the root of the application
    startSquidexLanguage({
        languagesArray: labels,
        defaultLanguage,
    });

    // build the language select list
    const languagesList: ReadonlyArray<LabelKeyProps> = languages.map(
        language => ({
            key: language.isoCode,
            text: language.displayName,
        }),
    );

    const handleLanguageSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setDefaultLanguage(event.target.value);
    };

    return (
        <div>
            <h1>Squidex Labels</h1>
            <p>Select one of the options to change the language displayed</p>
            <select value={defaultLanguage} onChange={handleLanguageSelect}>
                {languagesList.map(language => (
                    <option key={language.key} value={language.key}>
                        {language.text[defaultLanguage]}
                    </option>
                ))}
            </select>
            <p>{t('example1')}</p>
            <p>{t('example2')}</p>
            <p>{t('example3')}</p>
        </div>
    );
};

export default SquidexLabels;
