import { downloadFile } from '@/lib';

const handleDownloadFile = () => {
    const fileName = 'test_file';
    const fileContent = 'test_content';
    const file = new File([fileContent], fileName, {
        type: 'text/plain',
    });

    const url = URL.createObjectURL(file);
    downloadFile({ downloadUrl: url, fileName });
};

const DownloadFile: React.FC = () => (
    <section>
        <h1>Download test file</h1>
        <button type="button" onClick={handleDownloadFile}>
            Download file test
        </button>
    </section>
);

export default DownloadFile;
