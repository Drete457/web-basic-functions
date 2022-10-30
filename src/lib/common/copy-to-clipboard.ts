const copyToClipboard = (
    text: string,
): boolean => {
    if (typeof text === "string") {
        navigator.clipboard.writeText(text);
        return true;
    }

    return false;
};

export default copyToClipboard;
