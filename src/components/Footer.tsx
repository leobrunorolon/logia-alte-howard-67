import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">
          <Logo size={24} color="var(--color-accent)" />
          <span>R∴L∴ ALMIRANTE HOWARD N° 67</span>
        </span>
        <span className="footer-copy">
          © {new Date().getFullYear()} leobrunorolon. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
