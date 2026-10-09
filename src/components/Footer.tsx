type FooterProps = {
  year: number;
  author: string;
};

function Footer({ year, author }: FooterProps) {
  return (
    <footer className="site-foot text-center text-sm text-muted">
      &copy; {year} {author}. Built for IWaMAD, Week 05.
    </footer>
  );
}

export default Footer;
