import '@/style/footer.css';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const profileLink = 'https://github.com/Drete457';
    const licenceLink =
        'https://github.com/Drete457/web-basic-functions/blob/main/LICENSE';

    return (
        <footer className="footer-style">
            <p>
                © 2022 - {year}: Create by{' '}
                <a href={profileLink} rel="noreferrer" target="_blank">
                    Filipe Mota
                </a>
            </p>

            <a
                className="licence-link"
                href={licenceLink}
                rel="noreferrer"
                target="_blank"
            >
                See the Licence
            </a>
        </footer>
    );
};

export default Footer;
