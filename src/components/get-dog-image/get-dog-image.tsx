import { lazy } from 'react';
import { useGetDogImage } from '@/lib/api';
import '@/style/get-dog-image.css';

const Loading = lazy(() =>
    import('@/components/loading').then(module => ({
        default: module.Loading,
    })),
);

const GetDogImage: React.FC = () => {
    const { isLoading, error, data, execute } = useGetDogImage();

    return (
        <section>
            <h1>Get Dog Image</h1>

            <section className="button-component">
                <button
                    type="button"
                    onClick={execute}
                    className="download-button"
                    disabled={isLoading}
                >
                    Get Dog Image
                </button>
            </section>

            <div hidden={!isLoading}>
                <Loading />
            </div>

            <div hidden={data.message === ''}>
                <div className="show-image">
                    <img
                        src={data.message || ''}
                        alt="dog"
                        loading="lazy"
                        hidden={isLoading}
                    />
                </div>
            </div>

            <p hidden={error === null}>{error?.message}</p>
        </section>
    );
};

export default GetDogImage;
