type FooterProps = {
  year: number;
  author: string;
};

function Footer({ year, author }: FooterProps) {
  return (
    <footer className="site-foot text-center text-sm opacity-60">
      &copy; {year} {author}. Built for IWaMAD, Week 03.
    </footer>
  );
}

export default Footer;