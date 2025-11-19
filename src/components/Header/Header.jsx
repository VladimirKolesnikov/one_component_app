 import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="link">home</NavLink>
                <NavLink to="/favourite" className="link">favourite</NavLink>
                <NavLink to="/login" className="link">login</NavLink>
            </nav>
        </header>
    )
};
