import { useState } from 'react';
import { convertHtmlToString } from '@/lib';

const ConvertHtmlToString: React.FC = () => {
    const exampleHtml = `<!DOCTYPE html><html><body><h4>My Text Html Title</h4><p>My Text Html Paragraph</p></body></html>`;
    const [resultOfTheConversion, setResultOfTheConversion] =
        useState<string>('');

    const handleConvertHtmlToString = () => {
        const result = convertHtmlToString(exampleHtml);
        setResultOfTheConversion(result);
    };

    return (
        <section>
            <h1>Example Html Converted to String</h1>
            <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: exampleHtml,
                }}
            />
            <button
                type="button"
                onClick={handleConvertHtmlToString}
                disabled={!!resultOfTheConversion}
            >
                Convert Html to String
            </button>
            <p hidden={!resultOfTheConversion}>
                Text converted with success {resultOfTheConversion}
            </p>
        </section>
    );
};

export default ConvertHtmlToString;
