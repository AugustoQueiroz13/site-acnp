import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Ícone do WhatsApp
    const WhatsAppIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:text-green-500 transition"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">

                    {/* Logo Imagem */}
                    <div className="flex items-center shrink-0">
                        <Link to="/">
                            <img
                                src="img/logo.png"
                                alt="Logo ACNP"
                                className="h-20 w-auto object-contain py-1"
                            />
                        </Link>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-green-700 font-medium transition">Início</Link>
                        <Link to="/historia" className="text-gray-600 hover:text-green-700 font-medium transition">História</Link>
                        <Link to="/cursos" className="text-gray-600 hover:text-green-700 font-medium transition">Cursos</Link>
                        <Link to="/parcerias" className="text-gray-600 hover:text-green-700 font-medium transition">Parcerias</Link>
                        <Link to="/projetos" className="text-gray-600 hover:text-green-700 font-medium transition">Projetos</Link>
                        <Link to="/contato" className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition shadow-md hover:shadow-lg">
                            Contato
                        </Link>

                        {/* Ícones Sociais (Links Atualizados) */}
                        <div className="flex items-center space-x-4 border-l pl-6 ml-2 border-gray-200">
                            <a
                                href="https://facebook.com/associacaoculturalnascentepequena"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition"
                                title="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com/associacaonascentepequena"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition"
                                title="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://wa.me/5521988338594"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-green-500 transition"
                                title="WhatsApp"
                            >
                                <WhatsAppIcon />
                            </a>
                        </div>
                    </div>

                    {/* Botão Mobile */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-green-700 focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
                    <div className="flex flex-col px-6 py-4 space-y-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-50">Início</Link>
                        <Link to="/historia" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-50">História</Link>
                        <Link to="/cursos" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-50">Cursos</Link>
                        <Link to="/parcerias" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-50">Parcerias</Link>
                        <Link to="/projetos" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-green-700 py-2 border-b border-gray-50">Projetos</Link>
                        <Link to="/contato" onClick={() => setIsOpen(false)} className="text-green-700 font-bold py-2">Contato</Link>

                        <div className="flex space-x-6 pt-4 mt-2 justify-center">
                            <a href="https://facebook.com/associacaoculturalnascentepequena" target="_blank" className="text-gray-400 hover:text-blue-600"><Facebook size={24} /></a>
                            <a href="https://instagram.com/associacaonascentepequena" target="_blank" className="text-gray-400 hover:text-pink-600"><Instagram size={24} /></a>
                            <a href="https://wa.me/5521988338594" target="_blank" className="text-gray-400 hover:text-green-500"><WhatsAppIcon /></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;