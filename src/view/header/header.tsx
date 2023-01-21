import { NavLink } from 'react-router-dom';
import { routesPath } from '@/routing';
import logo from '@/assets/logo-no-background.png';
import '@/style/header.css';

const Header: React.FC = () => {
    const links = Object.entries(routesPath);

    return (
        <header className="header-style">
            <img src={logo} alt="project logo" />
            <nav>
                {links.map(link => {
                    const [key, { url, name }] = link;

                    return (
                        <NavLink
                            key={key}
                            to={url}
                            className={({ isActive }) =>
                                isActive ? 'active-link' : 'disabled-link'
                            }
                        >
                            {name}
                        </NavLink>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
