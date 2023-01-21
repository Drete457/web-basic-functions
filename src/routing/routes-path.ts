const routesPath = Object.freeze({
    mainPage: { url: '/', name: 'Main Page' },
    convertHtmlToString: {
        url: '/convert-html-to-string',
        name: 'Convert HTML to String',
    },
    copyToClipboard: { url: '/copy-to-clipboard', name: 'Copy to Clipboard' },
    decodeJwt: { url: '/decode-jwt', name: 'Decode JWT' },
    downloadFile: { url: '/download-file', name: 'Download File' },
    sortListObject: { url: '/sort-list-object', name: 'Sort List Object' },
    getElementSizeAndPosition: {
        url: '/get-element-size-and-position',
        name: 'Get Element Size and Position',
    },
    squidexLabels: { url: '/squidex-labels', name: 'Squidex Labels' },
    getDogImage: { url: '/get-dog-image', name: 'Get Dog Image' },
});

export default routesPath;
