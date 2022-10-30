import { ConvertHtmlToStringComponent } from './components/convert-html-to-string';
import { CopyToClipboardComponent } from './components/copy-to-clipboard';
import { DecodedJwtComponent } from './components/decode-jwt';
import { DownloadFileComponent } from './components/download-file';

const App: React.FC = () => (
    <main>
        <DownloadFileComponent />
        <hr />
        <CopyToClipboardComponent />
        <hr />
        <ConvertHtmlToStringComponent />
        <hr />
        <DecodedJwtComponent />
    </main>
);

export default App;
