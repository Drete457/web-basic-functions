import { ConvertHtmlToStringComponent } from './components/convert-html-to-string';
import { CopyToClipboardComponent } from './components/copy-to-clipboard';
import { DecodedJwtComponent } from './components/decode-jwt';
import { DownloadFileComponent } from './components/download-file';
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
    </main>
);

export default App;
