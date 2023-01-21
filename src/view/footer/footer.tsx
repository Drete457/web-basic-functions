import '@/style/footer.css';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const licenceLink =
        'https://github.com/Drete457/web-basic-functions/blob/main/LICENSE';

    return (
        <footer className="footer-style">
            <p>© 2022 - {year} - Filipe Mota</p>

            <a href={licenceLink} target="_blank" rel="noreferrer">
                See the Licence
            </a>
        </footer>
    );
};

export default Footer;
