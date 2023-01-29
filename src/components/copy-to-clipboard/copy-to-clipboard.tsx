import { ChangeEvent, useState } from 'react';
import { copyToClipboard } from '@/lib';
import '@/style/copy-to-clipboard.css';

const CopyToClipboard: React.FC = () => {
    const [copyToClipboardInput, setCopyToClipboardInput] =
        useState<string>('');
    const [copyToClipboardWasSuccess, setCopyToClipboardSuccess] =
        useState<boolean>();

    const handleCopyInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { target } = event;
        const { value } = target;

        setCopyToClipboardInput(value);
        if (copyToClipboardWasSuccess) setCopyToClipboardSuccess(false);
    };

    const handleCopyToClipboard = () => {
        const result = copyToClipboard(copyToClipboardInput);
        setCopyToClipboardSuccess(result);
    };

    return (
        <section>
            <h1>Copy string to clipboard</h1>

            <input
                type="text"
                value={copyToClipboardInput}
                onChange={handleCopyInput}
                placeholder="Enter text to copy to clipboard"
                className="input-box"
            />

            <button
                type="button"
                onClick={handleCopyToClipboard}
                disabled={!copyToClipboardInput}
                className="copy-button"
            >
                Copy some text to clipboard
            </button>

            <p hidden={!copyToClipboardWasSuccess} className="result">
                successfully copied
            </p>
        </section>
    );
};

export default CopyToClipboard;
