import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
    // Ícone do WhatsApp SVG
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
            className="hover:text-green-400 transition"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );

    return (
        <footer className="bg-green-950 text-white pt-16 pb-8 border-t-4 border-green-600 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grid Principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Coluna 1: Sobre */}
                    <div>
                        {/* Logo no Rodapé */}
                        <div className="mb-6 inline-block bg-white/90 p-3 rounded-xl">
                            <img
                                src="/img/logo.png"
                                alt="Logo ACNP"
                                className="h-16 w-auto object-contain"
                            />
                        </div>

                        <p className="text-green-100/80 text-sm leading-relaxed mb-6">
                            Associação Cultural Nascente Pequena. Há mais de 37 anos transformando vidas e construindo legados em Guapimirim através da arte, cultura e educação.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/associacaoculturalnascentepequena" target="_blank" rel="noreferrer" className="bg-green-900 p-2 rounded-full hover:bg-green-700 transition" title="Facebook"><Facebook size={18} /></a>
                            <a href="https://instagram.com/associacaonascentepequena" target="_blank" rel="noreferrer" className="bg-green-900 p-2 rounded-full hover:bg-green-700 transition" title="Instagram"><Instagram size={18} /></a>
                            <a href="https://wa.me/5521988338594" target="_blank" rel="noreferrer" className="bg-green-900 p-2 rounded-full hover:bg-green-700 transition" title="WhatsApp"><WhatsAppIcon /></a>
                        </div>
                    </div>

                    {/* Coluna 2: Menu Rápido */}
                    <div>
                        <h4 className="text-lg font-bold text-green-400 mb-6 uppercase tracking-wider text-sm">Menu Rápido</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Página Inicial</Link></li>
                            <li><Link to="/historia" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Nossa História</Link></li>
                            <li><Link to="/cursos" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Cursos e Oficinas</Link></li>
                            <li><Link to="/projetos" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Projetos Sociais</Link></li>
                            <li><Link to="/parcerias" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Parcerias</Link></li>
                            <li><Link to="/contato" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Fale Conosco</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h4 className="text-lg font-bold text-green-400 mb-6 uppercase tracking-wider text-sm">Contato</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-green-500 shrink-0 mt-1" />
                                <span>Rua Joaquim Coelho, 230<br />Centro, Guapimirim - RJ<br />CEP 25.946-235</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-green-500 shrink-0" />
                                <span>(21) 98833-8594</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-green-500 shrink-0" />
                                <span>contato@nascentepequena.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Apoie */}
                    <div>
                        <h4 className="text-lg font-bold text-green-400 mb-6 uppercase tracking-wider text-sm">Faça Parte</h4>
                        <p className="text-green-100/80 text-sm mb-6">
                            Sua ajuda é fundamental para mantermos nossos projetos vivos. Seja um voluntário ou doador.
                        </p>
                        <Link
                            to="/contato"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold text-sm transition shadow-lg shadow-green-900/50"
                        >
                            <Heart size={16} fill="currentColor" /> Quero Apoiar
                        </Link>
                    </div>
                </div>

                {/* Linha Divisória e Copyright */}
                <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-green-100/60 gap-4">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Associação Cultural Nascente Pequena.</p>
                        <p>CNPJ: 31.828.296/0001-67</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>Site criado por:</span>
                        <span className="font-bold text-green-400">Augusto Queiroz</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;