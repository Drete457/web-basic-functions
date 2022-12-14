import { useState } from 'react';
import { copyToClipboard } from '@/lib';

const CopyToClipboard: React.FC = () => {
    const [copyToClipboardInput, setCopyToClipboardInput] =
        useState<string>('');
    const [copyToClipboardWasSuccess, setCopyToClipboardSuccess] =
        useState<boolean>();

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
                onChange={e => setCopyToClipboardInput(e.target.value)}
                placeholder="Enter text to copy to clipboard"
            />
            <button
                type="button"
                onClick={handleCopyToClipboard}
                disabled={!copyToClipboardInput}
            >
                Copy some text to clipboard
            </button>
            <span hidden={!copyToClipboardWasSuccess}>successfully copied</span>
        </section>
    );
};

export default CopyToClipboard;
