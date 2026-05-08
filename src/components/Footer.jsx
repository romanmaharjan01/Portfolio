function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>Designed for Fiverr, Upwork, and personal website conversions.</p>
        <p className="footer-links">
          <a href="https://www.fiverr.com/s/bdQAQLp" target="_blank" rel="noreferrer">
            Fiverr
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/roman-maharjan-32bb3b2b0/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>© {new Date().getFullYear()} Roman Maharjan</p>
      </div>
    </footer>
  );
}

export default Footer;
