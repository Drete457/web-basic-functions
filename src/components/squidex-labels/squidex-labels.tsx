import { ChangeEvent } from 'react';
import {
    LabelKeyProps,
    startSquidexLanguage,
    useHandleSquidexChangeLanguage,
    useTranslation,
} from '@/lib';
import languages from './languages.json';
import labels from './labels.json';
import '@/style/squidex-labels.css';

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
        <section>
            <h1>Squidex Labels</h1>

            <section className="sort-option_explanation">
                <p className="sort-option_text">{t('description')}</p>

                <select
                    value={defaultLanguage}
                    onChange={handleLanguageSelect}
                    className="sort-option_select"
                >
                    {languagesList.map(language => (
                        <option
                            key={language.key}
                            value={language.key}
                            className="sort-option_select_option"
                        >
                            {language.text[defaultLanguage]}
                        </option>
                    ))}
                </select>
            </section>

            <p className="example1">{t('example1')}</p>

            <p className="example2">{t('example2')}</p>

            <p className="example3">{t('example3')}</p>
        </section>
    );
};

export default SquidexLabels;
