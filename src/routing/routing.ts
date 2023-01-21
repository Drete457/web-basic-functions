import { lazy } from 'react';
import routesPath from './routes-path';

/* A way to lazy load the components and routing the application. */
const MainPageView = lazy(() =>
    import('@/components/main-page').then(({ MainPage }) => ({
        default: MainPage,
    })),
);
const ConvertHtmlToStringComponentView = lazy(() =>
    import('@/components/convert-html-to-string').then(
        ({ ConvertHtmlToStringComponent }) => ({
            default: ConvertHtmlToStringComponent,
        }),
    ),
);
const CopyToClipboardComponentView = lazy(() =>
    import('@/components/copy-to-clipboard').then(
        ({ CopyToClipboardComponent }) => ({
            default: CopyToClipboardComponent,
        }),
    ),
);
const DecodedJwtComponentView = lazy(() =>
    import('@/components/decode-jwt').then(({ DecodedJwtComponent }) => ({
        default: DecodedJwtComponent,
    })),
);
const DownloadFileComponentView = lazy(() =>
    import('@/components/download-file').then(({ DownloadFileComponent }) => ({
        default: DownloadFileComponent,
    })),
);
const SortListObjectComponentView = lazy(() =>
    import('@/components/sort-list-object').then(
        ({ SortListObjectComponent }) => ({
            default: SortListObjectComponent,
        }),
    ),
);
const GetElementSizeAndPositionView = lazy(() =>
    import('@/components/get-element-size-and-position').then(
        ({ GetElementSizeAndPositionComponent }) => ({
            default: GetElementSizeAndPositionComponent,
        }),
    ),
);
const SquidexLabelsView = lazy(() =>
    import('@/components/squidex-labels').then(({ SquidexLabels }) => ({
        default: SquidexLabels,
    })),
);
const GetDogImageView = lazy(() =>
    import('@/components/get-dog-image').then(({ GetDogImage }) => ({
        default: GetDogImage,
    })),
);

interface RoutingProps {
    path: string;
    name: string;
    component: React.ComponentType<JSX.Element>;
}

const routing: ReadonlyArray<RoutingProps> = [
    {
        path: `${routesPath.mainPage.url}`,
        name: `${routesPath.mainPage.name}`,
        component: MainPageView,
    },
    {
        path: `${routesPath.convertHtmlToString.url}`,
        name: `${routesPath.convertHtmlToString.name}`,
        component: ConvertHtmlToStringComponentView,
    },
    {
        path: `${routesPath.copyToClipboard.url}`,
        name: `${routesPath.copyToClipboard.name}`,
        component: CopyToClipboardComponentView,
    },
    {
        path: `${routesPath.decodeJwt.url}`,
        name: `${routesPath.decodeJwt.name}`,
        component: DecodedJwtComponentView,
    },
    {
        path: `${routesPath.downloadFile.url}`,
        name: `${routesPath.downloadFile.name}`,
        component: DownloadFileComponentView,
    },
    {
        path: `${routesPath.sortListObject.url}`,
        name: `${routesPath.sortListObject.name}`,
        component: SortListObjectComponentView,
    },
    {
        path: `${routesPath.getElementSizeAndPosition.url}`,
        name: `${routesPath.getElementSizeAndPosition.name}`,
        component: GetElementSizeAndPositionView,
    },
    {
        path: `${routesPath.squidexLabels.url}`,
        name: `${routesPath.squidexLabels.name}`,
        component: SquidexLabelsView,
    },
    {
        path: `${routesPath.getDogImage.url}`,
        name: `${routesPath.getDogImage.name}`,
        component: GetDogImageView,
    },
];

export default routing;
