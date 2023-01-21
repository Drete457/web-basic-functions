import infiniteCircleLoading from '@/assets/infinite-circle-loading.svg';
import '@/style/loading.css';

// loading svg from https://loading.io/
const Loading: React.FC = () => (
    <object
        type="image/svg+xml"
        data={infiniteCircleLoading}
        className="loading"
    >
        loading svg from https://loading.io/
    </object>
);

export default Loading;
