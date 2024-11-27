import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-900 text-background py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            © {currentYear} José Ghostwriter. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://www.linkedin.com/in/your-linkedin-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-background hover:text-secondary-300 transition-colors duration-300"
                            aria-label="Visita mi perfil de LinkedIn"
                        >
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
