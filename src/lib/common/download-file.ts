interface DownloadFileProps {
    downloadUrl: string;
    fileName: string;
}

const downloadFile = async ({
    downloadUrl,
    fileName,
}: DownloadFileProps): Promise<void> => {
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);

    a.href = downloadUrl;
    a.setAttribute('download', fileName);
    a.click();
};

export default downloadFile;
