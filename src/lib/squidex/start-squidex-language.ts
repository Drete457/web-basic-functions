import { useState, useCallback } from 'react';

interface LabelKeyProps {
    key: string;
    text: { [key: string]: string };
}

let squidexLanguageArray: ReadonlyArray<LabelKeyProps> = [];
let squidexDefaultLanguage = 'en';

interface StartSquidexLanguageProps {
    languagesArray: ReadonlyArray<LabelKeyProps>;
    defaultLanguage: string;
}

const startSquidexLanguage = ({
    languagesArray,
    defaultLanguage,
}: StartSquidexLanguageProps) => {
    if (Array.isArray(languagesArray)) squidexLanguageArray = languagesArray;

    if (typeof defaultLanguage === 'string')
        squidexDefaultLanguage = defaultLanguage || 'en';
};

const useHandleSquidexChangeLanguage = () => {
    const [defaultLanguage, setDefaultLanguage] = useState<string>(
        squidexDefaultLanguage,
    );

    return {
        defaultLanguage,
        setDefaultLanguage,
    };
};

interface TFunctionProps {
    (key: string, option?: { [key: string]: string }): string;
}

const useTranslation = (): { t: CallableFunction } => {
    const t = useCallback(
        (key: string, option?: { [key: string]: string }): string => {
            const labelKeyInfo = squidexLanguageArray?.find?.(
                item => item.key === key,
            );
            let labelKeyText = labelKeyInfo?.text[squidexDefaultLanguage];

            if (option) {
                const optionArray = Object.entries(option);
                optionArray.forEach(item => {
                    if (labelKeyText) {
                        labelKeyText = labelKeyText.replaceAll(
                            `{{${item[0]}}}`,
                            item[1],
                        );
                    }
                });
            }

            return labelKeyText || key;
        },
        [],
    );

    return { t };
};

export default startSquidexLanguage;
export { useHandleSquidexChangeLanguage, useTranslation };
export type { TFunctionProps, LabelKeyProps };
