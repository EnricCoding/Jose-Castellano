'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = useCallback(() => {
        document.body.style.overflow = !isOpen ? 'hidden' : '';
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <header className="fixed w-full z-50">
            <div
                className={`absolute inset-0 transition-opacity duration-300 ${isOpen || isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    backgroundColor: isOpen ? 'white' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: isOpen ? 'none' : 'blur(10px)'
                }}
            ></div>

            <nav className="container mx-auto px-4 py-3 relative z-10">
                <div className="flex justify-between items-center">
                    <div
                        className={`text-lg font-bold transition-colors duration-300 ${isScrolled || isOpen ? 'text-heading' : 'text-white'
                            }`}
                    >
                        José Ghostwriter
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {[
                            { name: 'Sobre mí', id: '#sobre-mi' },
                            { name: 'Servicios', id: '#servicios' },
                            { name: 'Contacto', id: '#contacto' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.id}
                                className={`transition-colors duration-300 ${isScrolled || isOpen
                                    ? 'text-text hover:text-primary-500'
                                    : 'text-white hover:text-gray-300'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="#contacto"
                        className="hidden md:block px-4 py-2 rounded-lg transition-colors duration-300 bg-primary-500 text-white hover:bg-primary-600"
                    >
                        Trabaja Conmigo
                    </Link>
                    <button
                        className={`md:hidden z-50 transition-colors duration-300 ${isScrolled || isOpen ? 'text-heading' : 'text-white'
                            }`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-16 px-4">
                    {[
                        { name: 'Sobre mí', id: 'sobre-mi' },
                        { name: 'Servicios', id: 'servicios' },
                        { name: 'Contacto', id: 'contacto' }
                    ].map((item) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className="py-3 text-text hover:text-primary-500 transition-colors duration-200"
                            onClick={toggleMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        className="mt-auto mb-8 px-4 py-2 bg-primary-500 text-white text-center rounded-full hover:bg-primary-600 transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        Trabaja Conmigo
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </header>
    );
}

