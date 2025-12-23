import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Handshake, Heart, Users, Video, Music, Target, Lightbulb, ArrowRight
} from 'lucide-react';

const Parcerias = () => {
    useEffect(() => {
        document.title = "Parcerias | ACNP - Associação Cultural Nascente Pequena";
    }, []);

    // Placeholder de imagens para cada projeto
    const imgsEmpreenda = [
        "img/parcerias/pem1.jpg",
        "img/parcerias/pem2.jpg",
        "img/parcerias/pem3.jpg",
        "img/parcerias/pem4.jpg"
    ];
    const imgsTeama = [
        "img/parcerias/teama1.jpg",
        "img/parcerias/teama2.png",
        "img/parcerias/teama3.png",
        "img/parcerias/teama4.png"
    ];
    const imgsTverde = [
        "img/parcerias/tverde1.jpg",
        "img/parcerias/tverde2.jpg",
        "img/parcerias/tverde3.jpg",
        "img/parcerias/tverde4.jpg"
    ];
    const imgsAgencia = [
        "img/parcerias/agenciadobem1.jpg",
        "img/parcerias/agenciadobem2.jpg",
        "img/parcerias/agenciadobem3.jpg",
        "img/parcerias/agenciadobem4.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-700">

            {/* --- 1. HERO SECTION --- */}
            <section
                className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('img/parcerias/parcerias.jpg')" }}
            >
                <div className="absolute inset-0 bg-green-900/85"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                    <span className="inline-block py-1 px-3 border border-green-400 rounded-full text-green-300 text-sm font-bold tracking-widest uppercase mb-4 bg-green-900/50">
                        Juntos Vamos Mais Longe
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossas Parcerias</h1>
                    <p className="text-xl font-light text-green-100 max-w-2xl mx-auto">
                        Acreditamos no poder da colaboração. Conheça as iniciativas e organizações que caminham ao nosso lado na transformação de Guapimirim.
                    </p>
                </div>
            </section>

            {/* --- PARCERIA 1: EMPREENDA MULHER (Layout de Largura Total devido ao conteúdo extenso) --- */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-pink-100 text-pink-600 rounded-full"><Heart size={28} /></div>
                        <h2 className="text-3xl font-bold text-gray-900">Projeto Empreenda Mulher</h2>
                    </div>

                    {/* Texto Introdutório e História */}
                    <div className="mb-12 space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            O Projeto Empreenda Mulher foi idealizado pela <strong>Rosana Dias da Silva Castro</strong> com apoio da Associação Cultural Nascente Pequena (ACNP).
                        </p>
                        <p className="italic pl-4 border-l-4 border-pink-300 bg-pink-50/50 p-4 rounded-r-lg">
                            "Em alguns encontros realizados com mulheres empreendedoras de Guapimirim (RJ), nos deparamos com muitas mulheres cheias de vida e criatividade. Observamos que as mesmas não davam continuidade ao seu sonho de empreender por falta de conhecimento, oportunidade e rede de apoio. Foi quando me vi na mesma situação. Então, decidi ajudá-las de forma amadora, mas sonhando em algo grande… Sou casada, mãe de 2 filhos, empreendedora e moradora da cidade. Hoje atuo como Social Media Estratégico e sou Diretora de Relações Públicas da ACEG."
                        </p>
                    </div>

                    {/* Blocos de Missão, Visão e Público */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Missão */}
                        <div className="bg-pink-50 p-8 rounded-2xl border-t-4 border-pink-500 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2"><Target size={20} /> Missão do Projeto</h3>
                            <p className="text-gray-700">
                                Transformar Mulheres Empreendedoras da cidade de Guapimirim (RJ) em um grande potencial de desenvolvimento, cultura e educação. Trazendo também acolhimento, rede de apoio e mudança de vida.
                            </p>
                        </div>
                        {/* Visão */}
                        <div className="bg-purple-50 p-8 rounded-2xl border-t-4 border-purple-500 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2"><Lightbulb size={20} /> Visão do Projeto</h3>
                            <p className="text-gray-700">
                                Alcançar as Mulheres de Guapimirim com capacitação, atendimentos psicológicos e ações educacionais para fortalecer o empreendedorismo feminino. Desenvolver também rede de apoio aos filhos com oficinas de cidadania.
                            </p>
                        </div>
                        {/* Público Alvo */}
                        <div className="bg-orange-50 p-8 rounded-2xl border-t-4 border-orange-500 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2"><Users size={20} /> Público Alvo</h3>
                            <ul className="text-gray-700 space-y-2 list-disc list-inside">
                                <li>Mulheres Empreendedoras</li>
                                <li>Mães empreendedoras (sem rede de apoio)</li>
                                <li>Mulheres em transição de carreira</li>
                                <li>Mulheres desempregadas</li>
                                <li>Mulheres em busca de capacitação</li>
                            </ul>
                        </div>
                    </div>

                    {/* Galeria de 4 Imagens */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {imgsEmpreenda.map((img, idx) => (
                            <div key={idx} className="h-48 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <img src={img} alt={`Empreenda Mulher ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- DIVISOR --- */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* --- PARCERIA 2: TEAMA (Layout Dividido: Texto Esquerda / Fotos Direita) --- */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    {/* Texto */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><Users size={28} /></div>
                            <h2 className="text-3xl font-bold text-gray-900">TEAMA</h2>
                        </div>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Em 2018 nasceu a TEAma. Uma iniciativa coletiva por um grupo de pais da nossa cidade de Guapimirim-RJ, acolhidos e incentivados pela Associação TEIAA (Teresópolis) através da Fundadora Valéria Viana.
                            </p>
                            <p>
                                A I Caminhada de Conscientização do Autismo foi organizada em 2017 pela primeira formação do grupo TEIAA GUAPI.
                            </p>
                            <div className="bg-blue-100/50 p-6 rounded-xl border-l-4 border-blue-500">
                                <p className="font-medium text-blue-900">
                                    A TEAma é um MOVIMENTO SOCIAL PRÓ-INCLUSÃO, acolhido em espaço para reuniões e ações pela ACNP. Essa parceria nos agrega numa perspectiva fundamental: incentivar o convívio social das famílias que cuidam de pessoas com deficiência, possibilitando conhecimento, aprendizagem e acesso a ações culturais.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Grid de 4 Fotos (2x2) */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
                        {imgsTeama.map((img, idx) => (
                            <div key={idx} className={`h-48 sm:h-64 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${idx % 3 === 0 ? 'md:row-span-1' : ''}`}>
                                <img src={img} alt={`TEAMA ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- DIVISOR --- */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* --- PARCERIA 3: TVERDE (Layout Invertido: Fotos Esquerda / Texto Direita) --- */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    {/* Grid de 4 Fotos (2x2) */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        {imgsTverde.map((img, idx) => (
                            <div key={idx} className="h-48 sm:h-64 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <img src={img} alt={`TVERDE ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    {/* Texto */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-100 text-green-700 rounded-full"><Video size={28} /></div>
                            <h2 className="text-3xl font-bold text-gray-900">TVERDE - Associação Cultural Onda Verde</h2>
                        </div>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Instituição sem fins lucrativos com aproximadamente 25 anos de atividades. Engajada no crescimento social, político, educacional e ambiental, atuando no processo de inclusão de crianças, adolescentes e jovens através da área de Audiovisual.
                            </p>
                            <p>
                                Preparou diversos profissionais para o mercado de trabalho em emissoras como TV Record, Rede Globo, Magé Online, entre outras. O trabalho vai além de formar profissionais; busca torná-los cidadãos capazes de transformar o meio em que vivem.
                            </p>
                            <p className="font-medium text-green-800">
                                Trabalha hoje com inclusão social de pessoas com deficiência e Adolescentes em Medida Socioeducativa. Possui um acervo de valor incalculável com o objetivo de criar o museu da memória audiovisual de Guapimirim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DIVISOR --- */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* --- PARCERIA 4: AGÊNCIA DO BEM (Layout Dividido: Texto Esquerda / Fotos Direita) --- */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    {/* Texto */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-amber-100 text-amber-600 rounded-full"><Music size={28} /></div>
                            <h2 className="text-3xl font-bold text-gray-900">Agência do Bem</h2>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Projeto Escola de Música e Cidadania</h3>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                                <p className="mb-4">
                                    Uma parceria da <strong>OSC Agência do Bem</strong> com a <strong>Petrobrás</strong>.
                                </p>
                                <p className="text-xl font-bold text-amber-800">
                                    Atendendo 50 crianças e adolescentes com aulas de cidadania, teoria musical, violino e viola de corda.
                                </p>
                            </div>
                            <p>
                                Transformando realidades através da música clássica e da formação cidadã.
                            </p>
                        </div>
                    </div>
                    {/* Grid de 4 Fotos (2x2) */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
                        {imgsAgencia.map((img, idx) => (
                            <div key={idx} className="h-48 sm:h-64 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <img src={img} alt={`Agência do Bem ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA FINAL --- */}
            <section className="py-20 bg-green-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Quer ser um parceiro da ACNP?</h2>
                    <p className="text-green-100 mb-8 text-lg">
                        Juntos podemos ampliar nosso impacto e transformar mais vidas em Guapimirim. Entre em contato e vamos conversar sobre como podemos colaborar.
                    </p>
                    <Link
                        to="/contato"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-green-900 rounded-full font-bold hover:bg-green-100 transition shadow-lg"
                    >
                        Seja um Parceiro <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Parcerias;