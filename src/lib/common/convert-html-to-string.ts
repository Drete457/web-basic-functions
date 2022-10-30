const convertHtmlToString = (content: string): string => {
    if (typeof content === 'string') {
        const parser = new DOMParser();
        const htmlPage = parser.parseFromString(content, 'text/html');

        return htmlPage.body.textContent || '';
    }

    throw new Error('Content is not a string');
    return '';
};

export default convertHtmlToString;
