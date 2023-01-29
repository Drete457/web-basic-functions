import copyIcon from '@/assets/icons/copy.svg';
import { copyToClipboard } from '@/lib';
import '@/style/main-page.css';

const MainPage: React.FC = () => {
    const handleCopyToClipboard = (event): void => {
        const { target } = event;

        if (
            target &&
            target.parentElement &&
            target.parentElement.parentElement
        ) {
            const titleOfTheGrandparent =
                target.parentElement.parentElement.title;

            copyToClipboard(titleOfTheGrandparent);
        }
    };

    return (
        <section>
            <h1>Web Basic Functions</h1>

            <hr />

            <section>
                <h2>
                    Description The fundamental functions that a Front - End
                    Developer may require for their projects:
                </h2>

                <ul className="description-list">
                    <li>- 🛠️ Basic Front - End Functions</li>
                    <li>- 🔑 swiss army knife functions</li>
                    <li>- 📝 Documentation</li>
                    <li>- 📚 Examples</li>
                </ul>
            </section>

            <hr />

            <section>
                <h2>
                    Cloning the Repository With Git and Node.js installed on
                    your machine, choose location and clone repository, use this
                    commands:
                </h2>

                <ol className="starting-list">
                    <li
                        title="git clone
                        https://github.com/Drete457/web-basic-functions.git"
                    >
                        git clone
                        https://github.com/Drete457/web-basic-functions.git
                        <button type="button" onClick={handleCopyToClipboard}>
                            <img
                                src={copyIcon}
                                alt="Copy for git clone"
                                className="copy-icon"
                            />
                        </button>
                    </li>
                    <li title="cd web-basic-functions">
                        cd web-basic-functions
                        <button type="button" onClick={handleCopyToClipboard}>
                            <img
                                src={copyIcon}
                                alt="Copy for folder web-basic-function"
                                className="copy-icon"
                            />
                        </button>
                    </li>
                    <li title="yarn install">
                        yarn install
                        <button type="button" onClick={handleCopyToClipboard}>
                            <img
                                src={copyIcon}
                                alt="Copy for yarn install"
                                className="copy-icon"
                            />
                        </button>
                    </li>
                    <li title="yarn dev">
                        yarn dev - to run application
                        <button type="button" onClick={handleCopyToClipboard}>
                            <img
                                src={copyIcon}
                                alt="Copy for yarn dev"
                                className="copy-icon"
                            />
                        </button>
                    </li>
                    <li title="yarn build">
                        yarn build - to generate the package in the dist folder
                        <button type="button" onClick={handleCopyToClipboard}>
                            <img
                                src={copyIcon}
                                alt="Copy for yarn build"
                                className="copy-icon"
                            />
                        </button>
                    </li>
                    <li title="np">
                        np - to publish the package
                        <button type="button" onClick={handleCopyToClipboard}>
                            <img
                                src={copyIcon}
                                alt="Copy to np"
                                className="copy-icon"
                            />
                        </button>
                    </li>
                </ol>
            </section>

            <hr />

            <section>
                <h2>Documentation</h2>
                <p>- under construction</p>
            </section>
        </section>
    );
};

export default MainPage;
