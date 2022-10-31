const sortListObject = (
    value1: object,
    value2: object,
    key: string,
): number => {
    if (typeof value1 !== 'object' && typeof value2 !== 'object') {
        throw new Error('value1 and value2 must be object');
    }

    if (typeof key !== 'string') throw new Error('key must be string');

    const obj1 = String(value1[key])?.toUpperCase();
    const obj2 = String(value2[key])?.toUpperCase();

    if (typeof obj1 !== 'string' && typeof obj2 !== 'string') {
        throw new Error(
            'value1 and value2 proprieties must be string or number',
        );
    }

    if (obj1 < obj2) {
        return -1;
    }

    if (obj1 > obj2) {
        return 1;
    }

    return 0;
};

export default sortListObject;
