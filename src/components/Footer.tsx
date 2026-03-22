import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-blue-deep text-primary-foreground">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <p className="text-sm font-semibold tracking-tight">
          Brito<span className="text-gold">.</span>Consultoria
        </p>
        <nav className="flex gap-6 text-sm text-white/70">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link>
          <Link to="/simulador" className="hover:text-white transition-colors">Simulador</Link>
          <Link to="/contato" className="hover:text-white transition-colors">Contato</Link>
        </nav>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Brito Consultoria</p>
      </div>
    </footer>
  );
}
