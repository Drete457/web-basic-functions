import { lazy } from 'react';

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
    </main>
);

export default App;
