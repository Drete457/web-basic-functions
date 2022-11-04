import { ConvertHtmlToStringComponent } from './components/convert-html-to-string';
import { CopyToClipboardComponent } from './components/copy-to-clipboard';
import { DecodedJwtComponent } from './components/decode-jwt';
import { DownloadFileComponent } from './components/download-file';
import { GetElementSizeAndPosition } from './components/get-element-size-and-position.tsx';
import { SortListObjectComponent } from './components/sort-list-object';

const App: React.FC = () => (
    <main>
        <DownloadFileComponent />
        <hr />
        <CopyToClipboardComponent />
        <hr />
        <ConvertHtmlToStringComponent />
        <hr />
        <DecodedJwtComponent />
        <hr />
        <SortListObjectComponent />
        <hr />
        <GetElementSizeAndPosition />
    </main>
);

export default App;
