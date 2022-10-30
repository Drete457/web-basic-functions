import { CopyToClipboardComponent } from './components/copy-to-clipboard';
import { DownloadFileComponent } from './components/download-file';

const App: React.FC = () => (
    <main>
        <DownloadFileComponent />

        <CopyToClipboardComponent />
    </main>
);

export default App;
