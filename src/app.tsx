import { lazy } from 'react';
import { apiLinkAndErrorHandling } from './lib/api';

const ConvertHtmlToStringComponentView = lazy(() =>
    import('./components/convert-html-to-string').then(
        ({ ConvertHtmlToStringComponent }) => ({
            default: ConvertHtmlToStringComponent,
        }),
    ),
);
const CopyToClipboardComponentView = lazy(() =>
    import('./components/copy-to-clipboard').then(
        ({ CopyToClipboardComponent }) => ({
            default: CopyToClipboardComponent,
        }),
    ),
);
const DecodedJwtComponentView = lazy(() =>
    import('./components/decode-jwt').then(({ DecodedJwtComponent }) => ({
        default: DecodedJwtComponent,
    })),
);
const DownloadFileComponentView = lazy(() =>
    import('./components/download-file').then(({ DownloadFileComponent }) => ({
        default: DownloadFileComponent,
    })),
);
const SortListObjectComponentView = lazy(() =>
    import('./components/sort-list-object').then(
        ({ SortListObjectComponent }) => ({
            default: SortListObjectComponent,
        }),
    ),
);
const GetElementSizeAndPositionView = lazy(() =>
    import('./components/get-element-size-and-position').then(
        ({ GetElementSizeAndPositionComponent }) => ({
            default: GetElementSizeAndPositionComponent,
        }),
    ),
);
const SquidexLabelsView = lazy(() =>
    import('./components/squidex-labels').then(({ SquidexLabels }) => ({
        default: SquidexLabels,
    })),
);

// for this component is necessary to give the base url of the api, in this case is dog.ceo
apiLinkAndErrorHandling({ baseUrl: 'https://dog.ceo/api' });
const GetDogImageView = lazy(() =>
    import('./components/get-dog-image').then(({ GetDogImage }) => ({
        default: GetDogImage,
    })),
);

const App: React.FC = () => (
    <main>
        <DownloadFileComponentView />
        <hr />
        <CopyToClipboardComponentView />
        <hr />
        <ConvertHtmlToStringComponentView />
        <hr />
        <DecodedJwtComponentView />
        <hr />
        <SortListObjectComponentView />
        <hr />
        <GetElementSizeAndPositionView />
        <hr />
        <SquidexLabelsView />
        <hr />
        <GetDogImageView />
    </main>
);

export default App;
