import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-head">
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <span className="display text-sm tracking-wide">{title}</span>
      </div>

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
