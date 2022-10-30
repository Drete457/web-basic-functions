import { ConvertHtmlToStringComponent } from './components/convert-html-to-string';
import { CopyToClipboardComponent } from './components/copy-to-clipboard';
import { DownloadFileComponent } from './components/download-file';

const App: React.FC = () => (
    <main>
        <DownloadFileComponent />
        <hr />
        <CopyToClipboardComponent />
        <hr />
        <ConvertHtmlToStringComponent />
    </main>
);

export default App;
