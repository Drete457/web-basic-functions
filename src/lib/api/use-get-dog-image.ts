import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { get, URLS } from '@/lib/api';

interface ImageDogResponse {
    message: string;
    status: string;
}

const getDogImage = (
    setData: Dispatch<SetStateAction<ImageDogResponse>>,
    setError: Dispatch<SetStateAction<Error | null>>,
) => {
    const url: string = URLS.imageDog;

    get({ url })
        .then(res => setData(res.data))
        .catch(err => setError(err));
};

const useGetDogImage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<ImageDogResponse>({
        message: '',
        status: '',
    });

    const execute = async () => {
        try {
            setIsLoading(true);
            await getDogImage(setData, setError);
        } finally {
            setTimeout(() => setIsLoading(false), 2000);
        }
    };

    return {
        isLoading,
        data,
        setData,
        error,
        execute: useCallback(execute, []),
    };
};

export default useGetDogImage;
