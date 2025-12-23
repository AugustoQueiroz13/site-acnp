import React, { useEffect } from 'react';
import {
    Phone, MapPin, Instagram, Facebook,
    Copy, Check, Heart, Mail
} from 'lucide-react';

const Contato = () => {
    useEffect(() => {
        document.title = "Contato | ACNP - Associação Cultural Nascente Pequena";
    }, []);

    // MUDANÇA AQUI: Usando React.useState direto para evitar erro de import
    const [copied, setCopied] = React.useState(false);
    const pixKey = "31.828.296/0001-67";

    // Função para copiar o PIX
    const handleCopyPix = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-700">

            {/* --- 1. HERO SECTION --- */}
            <section
                className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('img/contato/acnp-sede2.jpg')" }}
            >
                <div className="absolute inset-0 bg-green-900/85"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                    <span className="inline-block py-1 px-3 border border-green-400 rounded-full text-green-300 text-sm font-bold tracking-widest uppercase mb-4 bg-green-900/50">
                        Fale Conosco
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
                    <p className="text-xl font-light text-green-100 max-w-2xl mx-auto">
                        Queremos ouvir você. Seja para tirar dúvidas, fazer parcerias ou colaborar com nossa causa.
                    </p>
                </div>
            </section>

            {/* --- 2. SEJA UM COLABORADOR (FOTO 1) --- */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Lado Esquerdo: Texto e PIX */}
                    <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="text-pink-500 fill-pink-500" />
                            <h2 className="text-3xl font-bold text-gray-900">Seja um Colaborador</h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Há 35 anos a Associação Cultural Nascente Pequena (ACNP) é uma OSC sem fins lucrativos que visa contribuir para o fortalecimento da cidadania, através de cursos, oficinas e projetos na cidade de Guapimirim.
                            <br /><br />
                            <strong>Faça parte dessa linda história, seja um colaborador!</strong>
                        </p>

                        {/* Card do PIX */}
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 relative">
                            <p className="text-sm text-green-800 font-bold uppercase tracking-wider mb-2">Chave Pix (CNPJ)</p>
                            <div className="flex items-center justify-between bg-white border border-green-300 rounded-lg p-3">
                                <code className="text-lg font-mono text-gray-800 font-bold">{pixKey}</code>
                                <button
                                    onClick={handleCopyPix}
                                    className="p-2 hover:bg-green-100 rounded-md transition text-green-700"
                                    title="Copiar Chave"
                                >
                                    {copied ? <Check size={20} /> : <Copy size={20} />}
                                </button>
                            </div>
                            <p className="text-xs text-green-600 mt-2">
                                {copied ? "Chave copiada!" : "Clique no ícone para copiar"}
                            </p>
                        </div>
                    </div>

                    {/* Lado Direito: Foto 1 */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                        <img
                            src="img/contato/acnp-venha-fazer-parte.jpg"
                            alt="Mãos unidas colaboração"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent md:hidden"></div>
                    </div>

                </div>
            </section>

            {/* --- 3. INFORMAÇÕES DE CONTATO (FOTO 2) --- */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                    {/* Foto 2 (Decorativa) */}
                    <div className="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-lg relative">
                        <img
                            src="img/contato/acnp-sede1.jpg"
                            alt="Atendimento ACNP"
                            className="w-full h-full object-cover hover:scale-105 transition duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                            <h3 className="text-xl font-bold">Venha nos visitar</h3>
                            <p className="text-gray-200">Nossas portas estão abertas para você.</p>
                        </div>
                    </div>

                    {/* Lista de Contatos */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações da ACNP</h2>

                        {/* Telefone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Telefone / WhatsApp</h4>
                                <a href="https://wa.me/5521988338594" target="_blank" rel="noreferrer" className="text-lg text-gray-600 hover:text-green-600 transition">
                                    (21) 98833-8594
                                </a>
                            </div>
                        </div>

                        {/* Endereço */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Endereço</h4>
                                <p className="text-lg text-gray-600">
                                    Rua Joaquim Coelho 230, Centro<br />Guapimirim - RJ
                                </p>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full shrink-0">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Redes Sociais</h4>
                                <div className="flex flex-col gap-1 mt-1">
                                    <a href="https://instagram.com/associacaonascentepequena" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-pink-600 transition flex items-center gap-2">
                                        @associacaonascentepequena
                                    </a>
                                    <a href="https://facebook.com/associacaoculturalnascentepequena" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition flex items-center gap-2">
                                        <Facebook size={16} /> @associacaoculturalnascentepequena
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 4. MAPA (GOOGLE MAPS) --- */}
            <section className="py-10 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <MapPin className="text-green-600" /> Localização
                    </h3>
                    <div className="w-full h-[450px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-300">
                        {/* ATENÇÃO: O src abaixo precisa ser um link de EMBED válido do Google Maps. */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.685973801289!2d-42.98064692391626!3d-22.47844287955877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a9a3b7b3b3b3%3A0x123456789abc!2sRua%20Joaquim%20Coelho%20230%2C%20Guapimirim!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa ACNP"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contato;