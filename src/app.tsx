import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { apiLinkAndErrorHandling } from './lib/api';

const Header = lazy(() =>
    import('@/view/header').then(module => ({ default: module.Header })),
);
const Body = lazy(() =>
    import('@/view/body').then(module => ({ default: module.Body })),
);
const Footer = lazy(() =>
    import('@/view/footer').then(module => ({ default: module.Footer })),
);

// for this component is necessary to give the base url of the api, in this case is dog.ceo
apiLinkAndErrorHandling({ baseUrl: 'https://dog.ceo/api' });

const App: React.FC = () => (
    <BrowserRouter>
        <Header />
        <Body />
        <Footer />
    </BrowserRouter>
);

export default App;
