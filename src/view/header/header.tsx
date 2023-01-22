import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routesPath } from '@/routing';
import logo from '@/assets/logo-no-background.png';
import '@/style/header.css';

const Header: React.FC = () => {
    const links = Object.entries(routesPath);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className="header-style">
            <Link
                onClick={() => setShowMenu(false)}
                to={routesPath.mainPage.url}
                title={`Go to ${routesPath.mainPage.name}`}
            >
                <img src={logo} alt="project logo" className="logo" />
            </Link>

            <nav>
                <button
                    className="dropdown-button"
                    onClick={() => setShowMenu((value: boolean) => !value)}
                    title="Show navigation menu"
                    type="button"
                >
                    <div
                        className={`menu-hamburger ${
                            showMenu ? 'open' : 'close'
                        }`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div
                    className={`${showMenu ? 'dropdown-menu' : 'hide-element'}`}
                >
                    <ul className="dropdown-content">
                        {links.map(link => {
                            const [key, { url, name }] = link;

                            return (
                                <li key={key} className="dropdown-content_item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'active-link'
                                                : 'disabled-link'
                                        }
                                        onClick={() => setShowMenu(false)}
                                        title={`Go to ${name}`}
                                        to={url}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
