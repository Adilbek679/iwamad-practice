type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="site-head flex items-center justify-between">
      <span className="display text-sm tracking-wide">{title}</span>
      <span className="text-sm opacity-70">{subtitle}</span>
    </header>
  );
}

export default Header;