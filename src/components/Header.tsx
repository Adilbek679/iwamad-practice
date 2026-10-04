import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-head flex items-center justify-between">
      <span className="display text-sm tracking-wide">{title}</span>

      <nav className="main-nav text-sm">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <span className="header-likes">♥ {likes}</span>
      </nav>
    </header>
  );
}

export default Header;
