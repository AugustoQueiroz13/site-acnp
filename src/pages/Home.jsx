import React, { useEffect } from 'react'; // Adicionei useEffect
import { Link } from 'react-router-dom';
import { Lightbulb, Target, Heart, ArrowRight, Users, Sprout, Leaf, Globe } from 'lucide-react';

const Home = () => {

    // Atualiza o título da aba do navegador
    useEffect(() => {
        document.title = "Início | ACNP - Associação Cultural Nascente Pequena";
    }, []);

    return (
        <div className="flex flex-col min-h-screen font-sans text-slate-700">

            {/* --- 1. HERO SECTION (TOPO) --- */}
            {/* Aumentei a altura para min-h-[900px] para caber tudo sem sobrepor */}
            <section
                className="relative min-h-[900px] flex items-center justify-center bg-cover bg-fixed bg-center pt-20 pb-32"
                style={{ backgroundImage: "url('/img/home/foto-home-incio.jpg')" }}
            >
                {/* Gradiente Verde Moderno sobre a foto */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/70 to-transparent"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">

                    {/* --- LOGO GRANDE COM FUNDO BRANCO --- */}
                    <div className="inline-block bg-white p-6 rounded-[2.5rem] mb-10 shadow-2xl">
                        <img
                            src="/img/logo.png"
                            alt="Logo ACNP Destaque"
                            className="h-28 md:h-44 mx-auto object-contain"
                        />
                    </div>

                    <div className="block mb-6">
                        <div className="inline-block px-5 py-2 border border-green-300/50 rounded-full bg-green-900/40 backdrop-blur-md">
                            <span className="text-sm md:text-base font-medium tracking-wider uppercase text-green-100">
                                37 Anos de História
                            </span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-sm">
                        Descubra a ACNP
                    </h1>

                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light text-green-50">
                        Bem-vindo à Associação Cultural Nascente Pequena. Há 37 anos canalizamos nossa paixão pela cultura, transformando vidas e o cenário sociocultural de Guapimirim.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/historia"
                            className="px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/50 flex items-center justify-center gap-2"
                        >
                            Nossa Jornada <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contato"
                            className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all flex items-center justify-center"
                        >
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- 2. MISSÃO, VISÃO E VALORES (Cards Flutuantes) --- */}
            {/* Ajustei a margem negativa para funcionar com a nova altura */}
            <section className="relative z-20 px-4 -mt-20 md:-mt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card Missão */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-green-600 hover:shadow-2xl transition duration-300">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-700">
                                <Users size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Missão</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Promover a inclusão social através de ações socioeducativas que mobilizem cidadãos como protagonista na transformação da sua realidade.
                            </p>
                        </div>

                        {/* Card Visão */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-green-500 hover:shadow-2xl transition duration-300">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Visão</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ser uma OSC reconhecida pela liderança, excelência, inovação e impacto social.
                            </p>
                        </div>

                        {/* Card Valores */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-emerald-400 hover:shadow-2xl transition duration-300">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-emerald-500">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Valores</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Credibilidade, solidariedade, ética, transparência e responsabilidade social.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 3. JORNADA CULTURAL --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-50 rounded-full z-0"></div>
                            <img
                                src="/img/home/nossa-jornada-cultural.jpg"
                                alt="Roda de conversa cultural"
                                className="relative z-10 rounded-[2rem] rounded-tr-[5rem] shadow-2xl w-full object-cover h-[450px]"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">Nossa História</h4>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Nossa Jornada Cultural
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Desde o início em 1987, a ACNP se tornou a casa da cultura em Guapimirim. Nosso comprometimento com a arte e a preservação do patrimônio cultural da região é a essência que impulsiona nossas ações.
                            </p>
                            <Link to="/historia" className="group text-green-700 font-bold flex items-center gap-2 hover:text-green-900 transition">
                                Ler história completa <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. SEÇÃO FOCO --- */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100/30 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 space-y-10">
                            <div>
                                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Nosso Propósito</span>
                                <h2 className="text-4xl font-bold text-gray-900 mt-2">Nosso Foco é Você</h2>
                            </div>
                            <div className="bg-gradient-to-r from-green-700 to-green-600 p-8 rounded-3xl text-white shadow-lg transform transition hover:-translate-y-1">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                    <Globe className="text-green-200" size={24} /> Ajudando a Comunidade
                                </h3>
                                <p className="text-green-50 leading-relaxed font-light">
                                    Atuamos em parceria com instituições e comunidades locais. Desde crianças, adolescentes, mulheres e família em vulnerabilidade social. Nosso objetivo é proporcionar oportunidades de aprendizado e expressão cultural.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                                    <Users className="text-green-600" size={24} /> Conexões Fortes
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Estabelecemos parcerias estratégicas com organizações governamentais e não governamentais, ampliando nosso alcance e possibilitando a realização de projetos impactantes.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 border-2 border-green-500 rounded-[3rem] transform translate-x-4 translate-y-4"></div>
                                <img
                                    src="/img/home/nosso-foco-e-voce.jpg"
                                    alt="Comunidade unida"
                                    className="relative bg-white p-2 rounded-[3rem] shadow-2xl w-full object-cover h-[550px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. O QUE FAZEMOS --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">Áreas de Atuação</h2>
                        <h3 className="text-4xl font-bold text-gray-900">O que Fazemos</h3>
                    </div>
                    <div className="space-y-24">
                        <div className="flex flex-col md:flex-row items-center gap-12 group">
                            <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-lg">
                                <img
                                    src="/img/home/cursos-oficinas.jpg"
                                    alt="Cursos de Arte"
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 rounded-lg text-green-700"><Lightbulb size={24} /></div>
                                    <h3 className="text-3xl font-bold text-gray-900">Cursos e Oficinas</h3>
                                </div>
                                <h4 className="text-xl text-green-700 font-medium mb-4">Transformadoras</h4>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Desenvolvemos cursos e oficinas que transcendem os limites do ensino convencional. De arte a dança, de música a atividades culturais, nossas iniciativas visam não apenas educar, mas também impactar positivamente vidas.
                                </p>
                                <Link to="/cursos" className="inline-flex items-center text-green-700 font-bold border-b-2 border-green-200 hover:border-green-600 transition pb-1">
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                            <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-lg">
                                <img
                                    src="/img/home/projetos-sociambientais.jpg"
                                    alt="Meio Ambiente"
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 rounded-lg text-green-700"><Sprout size={24} /></div>
                                    <h3 className="text-3xl font-bold text-gray-900">Projetos Socioambientais</h3>
                                </div>
                                <h4 className="text-xl text-green-700 font-medium mb-4">Inovadores e Sustentáveis</h4>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Acreditamos na sustentabilidade como um pilar fundamental. Da coleta de óleo de cozinha à inovação em iniciativas de reciclagem, estamos empenhados em preservar o meio ambiente.
                                </p>
                                <Link to="/projetos" className="inline-flex items-center text-green-700 font-bold border-b-2 border-green-200 hover:border-green-600 transition pb-1">
                                    Conheça os Projetos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. GRATIDÃO --- */}
            <section className="py-24 bg-green-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gratidão à Comunidade</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    A expressão da nossa gratidão é o alicerce do nosso trabalho. À nossa comunidade dedicada, parceiros engajados, voluntários incansáveis e a todos que contribuíram para a nossa jornada.
                                </p>
                                <p className="font-medium text-green-800">
                                    Com vocês, construímos um legado cultural que inspira, educa e transforma.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <img
                                src="/img/home/gratidao-comunidade.jpg"
                                alt="Comunidade feliz"
                                className="rounded-2xl shadow-lg rotate-2 hover:rotate-0 transition duration-500 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 7. CTA FINAL --- */}
            <section className="py-20 bg-green-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Explore Nossa História em Constante Evolução</h2>
                    <p className="text-green-100 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
                        Embarque nessa jornada cultural. Descubra nossos projetos atuais e conecte-se com nossa paixão pela cultura.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/historia"
                            className="px-8 py-3 bg-white text-green-900 font-bold rounded-full hover:bg-green-50 transition shadow-lg w-full sm:w-auto"
                        >
                            Conheça Nossa História
                        </Link>
                        <Link
                            to="/contato"
                            className="px-8 py-3 border border-green-400 text-white font-semibold rounded-full hover:bg-green-800 transition w-full sm:w-auto"
                        >
                            Fazer Parte
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;