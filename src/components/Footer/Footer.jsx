import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        &copy; {currentYear} / Made by{" "}
        <a
          className="footerLink"
          href="https://github.com/odolczykd"
          target="_blank"
          rel="noreferrer"
        >
          Dawid Odolczyk
        </a>
      </span>
    </footer>
  );
}

export { Footer };
