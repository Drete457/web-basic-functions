const decodeJwt = (token: string): object => {
    if (typeof token !== 'string') return { result: '' };

    const base64Url = token?.split('.')[1];
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');

    if (!base64) {
        return { result: '' };
    }

    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''),
    );

    return JSON.parse(jsonPayload);
};

export default decodeJwt;
