import { useGetDogImage } from '@/lib/api';
import './style.css';

const GetDogImage: React.FC = () => {
    const { isLoading, error, data, setData, execute } = useGetDogImage();

    const handleDeleteDogImage = () => {
        setData({
            status: '',
            message: '',
        });
    };

    return (
        <section>
            <h2>Get Dog Image</h2>

            <button
                type="button"
                onClick={execute}
                hidden={data.message !== ''}
            >
                Get Dog Image
            </button>
            <button
                type="button"
                onClick={handleDeleteDogImage}
                hidden={data.message === '' || isLoading}
            >
                Delete Dog Image
            </button>

            <div className="loader" hidden={!isLoading}></div>

            <div className="show-image">
                <p hidden={isLoading || data.status !== 'success'}>
                    <img src={data.message} alt="dog" />
                </p>
            </div>

            <p hidden={error === null}>{error?.message}</p>
        </section>
    );
};

export default GetDogImage;
