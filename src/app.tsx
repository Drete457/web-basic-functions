import { downloadFile } from './lib/common';

const handleDownloadFile = () => {
    const fileName = 'test_file';
    const fileContent = 'test_content';
    const file = new File([fileContent], fileName, {
        type: 'text/plain',
    });

    const url = URL.createObjectURL(file);
    downloadFile({ downloadUrl: url, fileName });
};

const App: React.FC = () => {
    return (
        <main>
            <button type="button" onClick={handleDownloadFile}>
                Download file test
            </button>
        </main>
    );
};

export default App;
