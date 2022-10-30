import decodeJwt from './decode-jwt';

const isExpired = (exp: number): boolean => {
    if (!exp) return false;

    const now = new Date();
    return now.getTime() > exp * 1000;
};

const validToken = (token: string): boolean => {
    if (typeof token !== 'string') return false;

    const tokenDecoded = decodeJwt(token);
    const { exp } = tokenDecoded;

    if (tokenDecoded && exp && !isExpired(Number(exp))) return true;

    return false;
};

export default validToken;
