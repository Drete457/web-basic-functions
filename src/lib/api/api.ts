/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';

interface QueryParams {
    [key: string]: string;
}

interface AxiosProps {
    url: string;
    query?: QueryParams;
    body?: { [key: string]: any };
    localAxiosInstance?: AxiosInstance;
}

let BASE_URL = '';
let axiosErrorHandler: any = '';

const API = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};
const axiosInstance = axios.create({
    headers: API.headers,
});
const axiosAdminInstance = axios.create({
    headers: { ...API.headers },
});

const apiLinkAndErrorHandling = ({
    baseUrl,
    errorHandler,
}: {
    baseUrl: string;
    errorHandler?: (err: Error) => any;
}) => {
    const baseErrorHandlerFunction = err => {
        alert(`Example ${err.message}`);
    };

    BASE_URL = baseUrl;
    axiosErrorHandler = errorHandler ?? baseErrorHandlerFunction;
};

const requestHandler = async request => {
    if (request.data?.isAppJsonHeader) {
        delete request.data.isAppJsonHeader;
        request.headers['Content-Type'] = 'application/json';
    }

    if (request.isAppJsonHeader) {
        delete request.isAppJsonHeader;
        request.headers['Content-Type'] = 'application/json';
    }

    return request;
};

axiosInstance.interceptors.request.use(requestHandler);
axiosAdminInstance.interceptors.request.use(requestHandler);

const addQueryToUrl = (url: string, query: QueryParams) => {
    const queryKeys = Object.keys(query);

    return queryKeys.length > 0
        ? `${url}?${new URLSearchParams({ ...query }).toString()}`
        : url;
};

const get = async ({
    url,
    query = {},
    localAxiosInstance = axiosInstance,
}: Omit<AxiosProps, 'body'>) => {
    if (BASE_URL === '') throw new Error('BASE_URL is not set');

    const uri = addQueryToUrl(url, query);

    try {
        const result = await localAxiosInstance.get(`${BASE_URL}${uri}`, {
            responseType: `json`,
            headers: { ...API.headers },
        });
        return Promise.resolve(result);
    } catch (err) {
        axiosErrorHandler(err);
        return Promise.reject(err.response);
    }
};

const post = async ({
    url,
    query = {},
    body = {},
    localAxiosInstance = axiosInstance,
}: AxiosProps) => {
    if (BASE_URL === '') throw new Error('BASE_URL is not set');

    const uri = addQueryToUrl(url, query);

    try {
        const result = await localAxiosInstance.post(`${BASE_URL}${uri}`, {
            ...body,
            headers: { ...API.headers },
        });

        return Promise.resolve(result);
    } catch (err) {
        axiosErrorHandler(err);
        return Promise.reject(err.response);
    }
};

const put = async ({
    url,
    query = {},
    body = {},
    localAxiosInstance = axiosInstance,
}: AxiosProps) => {
    if (BASE_URL === '') throw new Error('BASE_URL is not set');

    const uri = addQueryToUrl(url, query);

    try {
        const result = await localAxiosInstance.put(`${BASE_URL}${uri}`, {
            ...body,
            headers: { ...API.headers },
        });

        return Promise.resolve(result);
    } catch (err) {
        axiosErrorHandler(err);
        return Promise.reject(err.response);
    }
};

const remove = async ({
    url,
    body = {},
    localAxiosInstance = axiosInstance,
}: Omit<AxiosProps, 'query'>) => {
    if (BASE_URL === '') throw new Error('BASE_URL is not set');

    try {
        const result = await localAxiosInstance.delete(`${BASE_URL}${url}`, {
            data: { source: body },
        });

        return Promise.resolve(result);
    } catch (err) {
        axiosErrorHandler(err);
        return Promise.reject(err.response);
    }
};

export default apiLinkAndErrorHandling;
export { get, post, put, remove };
