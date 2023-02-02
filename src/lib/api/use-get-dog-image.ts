import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { get, URLS } from '@/lib/api';

const initialState = Object.freeze({
    message: '',
    status: '',
});

interface ImageDogResponse {
    message: string;
    status: string;
}

const getDogImage = (
    setData: Dispatch<SetStateAction<ImageDogResponse>>,
    setError: Dispatch<SetStateAction<Error | null>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
    const url: string = URLS.imageDog;

    get({ url })
        .then(res => {
            setData(res.data);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err);
            setIsLoading(false);
        });
};

const useGetDogImage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<ImageDogResponse>(initialState);

    const execute = async () => {
        setData(initialState);
        setIsLoading(true);
        await getDogImage(setData, setError, setIsLoading);
    };

    return {
        isLoading,
        data,
        error,
        execute: useCallback(execute, []),
    };
};

export default useGetDogImage;
