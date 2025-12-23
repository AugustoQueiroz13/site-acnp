import React, { useEffect } from 'react';
import {
    Calendar, Award, Star, User, Heart, Leaf,
    FileText, TrendingUp, Building, HeartHandshake, Palette,
    BookOpen, Sprout, Lightbulb, Megaphone, ShieldCheck
} from 'lucide-react';

const Historia = () => {
    useEffect(() => {
        document.title = "História | ACNP - Associação Cultural Nascente Pequena";
    }, []);

    // Ícones da Diretoria (Estrela para Presidente)
    const getIconByRole = (role) => {
        if (role.includes('Presidente') || role.includes('Vice')) return <Star size={24} className="text-yellow-400 fill-yellow-400" />;
        if (role.includes('Secretária')) return <FileText size={24} className="text-blue-300" />;
        if (role.includes('Financeiro')) return <TrendingUp size={24} className="text-emerald-300" />;
        if (role.includes('Patrimônio')) return <Building size={24} className="text-orange-300" />;
        if (role.includes('Sociais')) return <HeartHandshake size={24} className="text-rose-300" />;
        if (role.includes('Cultura')) return <Palette size={24} className="text-purple-300" />;
        if (role.includes('Educação')) return <BookOpen size={24} className="text-indigo-300" />;
        if (role.includes('Socioambiental')) return <Sprout size={24} className="text-green-300" />;
        if (role.includes('Criativa')) return <Lightbulb size={24} className="text-yellow-200" />;
        if (role.includes('Comunicação')) return <Megaphone size={24} className="text-cyan-300" />;
        if (role.includes('Conselho')) return <ShieldCheck size={24} className="text-gray-300" />;
        return <User size={24} className="text-green-200" />;
    };

    const diretoria = [
        { cargo: "Presidente", nome: "Marinete Seixas Chaves Cheppi" },
        { cargo: "Vice-presidente", nome: "Ivan de Araújo Coutinho" },
        { cargo: "1ª Secretária", nome: "Marcia Teixeira de Mônaco" },
        { cargo: "2ª Secretária", nome: "Priscilla Teixeira de Mônaco" },
        { cargo: "Diretor Financeiro", nome: "Paulo Sergio da Costa Martins" },
        { cargo: "Coord. de Patrimônio", nome: "Cheila Ferreira da Silva" },
        { cargo: "Coord. de Projetos Sociais", nome: "Maria Regina Gonçalves Martins" },
        { cargo: "Coord. Cultura e Promoção", nome: "Andréa Antunes Nascimento" },
        { cargo: "Coord. de Educação", nome: "Gécica Berude Chaves" },
        { cargo: "Coord. Socioambiental", nome: "Aurea da Costa Mantoan" },
        { cargo: "Coord. Economia Criativa", nome: "Rosana Dias da Silva Castro" },
        { cargo: "Coord. Comunicação", nome: "Juliana Mello Fernandes" },
    ];

    const conselhoFiscal = [
        { cargo: "Presidente do Conselho", nome: "Aline Vivas de Freitas Aragão" },
        { cargo: "Membro efetivo", nome: "Jussara Valsivia Andrade" },
        { cargo: "Membro efetivo", nome: "Deborah de Almeida Pessôa de Souza" },
        { cargo: "Membro Suplente", nome: "Monique Tolardo Lopes Pereira" },
        { cargo: "Membro Suplente", nome: "Líliam da Silva Souza" },
        { cargo: "Membro Suplente", nome: "Bernardo Julian Souza Cheppi" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-700">

            {/* --- 1. HERO SECTION --- */}
            <section
                className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
            >
                <div className="absolute inset-0 bg-green-900/85"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                    <span className="inline-block py-1 px-3 border border-green-400 rounded-full text-green-300 text-sm font-bold tracking-widest uppercase mb-4 bg-green-900/50">
                        Nossa Trajetória
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        História Inspiradora da ACNP
                    </h1>
                    <p className="text-xl font-light text-green-100 max-w-2xl mx-auto">
                        Conheça os passos que nos trouxeram até aqui.
                    </p>
                </div>
            </section>

            {/* --- 2. SOBRE NÓS --- */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute top-0 left-0 w-20 h-20 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <img
                            src="img/historia/construindo-legado.jpg"
                            alt="Construindo Legados" className="relative z-10 rounded-tr-[5rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h4 className="text-green-600 font-bold uppercase tracking-wider mb-2">Sobre Nós</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Construindo Legados, Transformando Vidas
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            A Associação Cultural Nascente Pequena (ACNP) é mais do que uma organização; é uma comunidade unida por uma paixão comum – transformar vidas e criar um legado cultural em Guapimirim.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Desde o seu início até os dias atuais, nossa jornada tem sido marcada por desafios superados e conquistas notáveis, tudo graças ao apoio incansável de nossa comunidade, parceiros e voluntários.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- 3. LINHA DO TEMPO --- */}
            <section className="py-20 bg-green-50 relative overflow-hidden">
                {/* Linha vertical */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-green-200 transform md:-translate-x-1/2"></div>

                <div className="max-w-6xl mx-auto space-y-16 relative px-4">

                    {/* ITEM 1: 1987-1995 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="hidden md:block w-5/12 text-right pr-12">
                            <h3 className="text-2xl font-bold text-green-800">Início da Jornada</h3>
                            <span className="inline-block mt-1 px-3 py-1 bg-white border border-green-200 text-green-700 text-sm font-bold rounded-full shadow-sm">1987 - 1995</span>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                Nascida em 1987, a ACNP teve sua raiz na determinação de um grupo visionário. Nos primeiros anos, enfrentamos desafios e superamos obstáculos para realizar um trabalho dedicado ao desenvolvimento sociocultural de Guapimirim.
                            </p>
                        </div>

                        <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-green-600 rounded-full border-4 border-green-100 shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10">
                            <Star size={18} className="text-white" />
                        </div>

                        <div className="w-full md:w-5/12 pl-12 md:pl-12">
                            <div className="md:hidden mb-2">
                                <span className="px-3 py-1 bg-white text-green-700 text-xs font-bold rounded-full border border-green-200">1987 - 1995</span>
                                <h3 className="text-xl font-bold text-green-800 mt-1">Início da Jornada</h3>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-600">
                                <p className="text-gray-600 italic text-sm leading-relaxed">
                                    "Esses anos fundamentais foram a base para nossa missão de defesa da arte, cultura regional, geração de renda e preservação do meio ambiente."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 2: 1996-2010 (COM A LEI 452/2003 ADICIONADA) */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="w-full md:w-5/12 text-right pr-12 md:pr-12 md:order-1 order-2">
                            <div className="bg-white p-5 rounded-2xl shadow-md border-r-4 border-green-500">
                                <img
                                    src="img/historia/expansao.jpg"
                                    alt="Expansão ACNP"
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />
                                <p className="text-gray-600 text-sm leading-relaxed text-left mb-4">
                                    Ao longo dos anos, expandimos nossos horizontes. Cursos, oficinas e projetos como <strong>“Guapimirim em Foco”</strong> e <strong>“Maquinetando”</strong> ganharam destaque, atendendo crianças, adolescentes e adultos.
                                </p>

                                {/* --- INSERÇÃO DO RECONHECIMENTO PÚBLICO (2003) --- */}
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-3 text-left">
                                    <div className="p-2 bg-green-100 rounded-lg shrink-0">
                                        <Award size={20} className="text-green-700" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-green-800 text-sm">Marco Histórico (2003)</h5>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Reconhecimento com Título de Utilidade Pública Municipal pela <strong>Lei 452/2003</strong> de Guapimirim/RJ.
                                        </p>
                                    </div>
                                </div>
                                {/* --- FIM DA INSERÇÃO --- */}

                            </div>
                        </div>

                        <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 border-green-500 rounded-full shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10 md:order-2">
                            <Calendar size={18} className="text-green-600" />
                        </div>

                        <div className="w-full md:w-5/12 pl-12 md:pl-12 md:order-3 order-1 mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-green-800">Expansão e Desenvolvimento</h3>
                            <span className="inline-block mt-1 px-3 py-1 bg-white border border-green-200 text-green-700 text-sm font-bold rounded-full shadow-sm">1996 - 2010</span>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed md:block">
                                A parceria escola-comunidade fortaleceu-se, e eventos culturais foram realizados para enriquecer a vida local.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 3: 2011-2022 */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="hidden md:block w-5/12 text-right pr-12">
                            <h3 className="text-2xl font-bold text-green-800">Resiliência e Inovação</h3>
                            <span className="inline-block mt-1 px-3 py-1 bg-white border border-green-200 text-green-700 text-sm font-bold rounded-full shadow-sm">2011 - 2022</span>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                Em meio a desafios, como a pandemia em 2020, a ACNP demonstrou resiliência. Inovações como a <strong>Escola de Pais</strong> e a parceria com a Secretaria do Ambiente destacaram nosso compromisso sustentável.
                            </p>
                        </div>

                        <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-green-600 rounded-full border-4 border-green-100 shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10">
                            <Leaf size={18} className="text-white" />
                        </div>

                        <div className="w-full md:w-5/12 pl-12 md:pl-12">
                            <div className="md:hidden mb-2">
                                <span className="px-3 py-1 bg-white text-green-700 text-xs font-bold rounded-full border border-green-200">2011 - 2022</span>
                                <h3 className="text-xl font-bold text-green-800 mt-1">Resiliência e Inovação</h3>
                                <p className="text-gray-600 text-sm mt-2 mb-4">
                                    Em meio a desafios, a ACNP demonstrou resiliência.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-600">
                                <h4 className="text-green-800 font-bold mb-3 text-sm uppercase tracking-wider">Marcos Importantes:</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <Award size={20} className="text-green-500 shrink-0 mt-0.5" />
                                        <span>Seleção para mentoria do <strong>Instituto Salvador Arena</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Award size={20} className="text-green-500 shrink-0 mt-0.5" />
                                        <span>Projeto <strong>“Arte, Ambiente e Passos Digitais”</strong>.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 4: 2023 em diante */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="w-full md:w-5/12 text-right pr-12 md:pr-12 md:order-1 order-2">
                            <div className="bg-gradient-to-br from-green-600 to-green-800 p-5 rounded-2xl shadow-lg text-white">
                                <img
                                    src="img/historia/orgulho-anos.jpg"
                                    alt="Orgulho Recente ACNP"
                                    className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-green-400/50"
                                />
                                <p className="leading-relaxed text-sm text-left font-medium">
                                    "Chegamos a 2023 com uma gratidão imensa. Enfrentamos inúmeros desafios, mas nossa determinação e pluralidade nos mostraram que tudo é possível."
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 border-green-700 rounded-full shadow-lg transform md:-translate-x-1/2 flex items-center justify-center z-10 md:order-2">
                            <Heart size={18} className="text-green-700" />
                        </div>

                        <div className="w-full md:w-5/12 pl-12 md:pl-12 md:order-3 order-1 mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-green-800">Orgulho nos Últimos Anos</h3>
                            <span className="inline-block mt-1 px-3 py-1 bg-white border border-green-200 text-green-700 text-sm font-bold rounded-full shadow-sm">2023 em diante</span>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed md:block">
                                Continuamos focados na defesa da arte, cultura e meio ambiente, construindo um legado que inspira as gerações futuras.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- 4. AGRADECIMENTOS E PALAVRA DA PRESIDENTE --- */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 shadow-inner border border-slate-100 text-center">

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-green-800 mb-4">Agradecimentos Especiais</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Queremos expressar nossa sincera gratidão à nossa comunidade, parceiros, voluntários e a todos que contribuíram para nossa trajetória. Juntos, continuamos a construir um legado cultural inspirador em Guapimirim.
                            </p>
                        </div>

                        <div className="w-full h-px bg-green-200 my-8 mx-auto max-w-xs"></div>

                        <div className="flex flex-col items-center">
                            <div className="relative mb-6">
                                <span className="absolute -top-6 -left-8 text-6xl text-green-300 font-serif opacity-50">“</span>
                                <p className="text-xl md:text-2xl font-serif italic text-gray-800 max-w-3xl leading-relaxed">
                                    Seja bem-vindo à ACNP, onde a transformação é uma arte e a cultura é a força motriz para um futuro vibrante.
                                </p>
                                <span className="absolute -bottom-10 -right-4 text-6xl text-green-300 font-serif opacity-50 transform rotate-180">“</span>
                            </div>

                            <div className="mt-8 flex flex-col items-center">
                                {/* Placeholder Presidente */}
                                <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mb-3 border-2 border-green-400">
                                    <User size={40} className="text-green-700" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Marinete Seixas Chaves Cheppi</h4>
                                <p className="text-green-600 font-medium">Presidente da ACNP</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 5. DIRIGENTES VOLUNTÁRIOS --- */}
            <section className="py-20 bg-green-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Dirigentes Voluntários</h2>
                        <p className="text-green-200">Relação dos membros eleitos para o biênio 2024-2026</p>
                    </div>

                    {/* Diretoria Executiva */}
                    <h3 className="text-xl font-semibold text-green-300 mb-6 border-b border-green-700 pb-2">Diretoria e Coordenações</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {diretoria.map((membro, index) => (
                            <div key={index} className="bg-green-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-700 hover:bg-green-800 transition flex items-center gap-4 group">
                                <div className="p-3 bg-green-900/50 rounded-lg group-hover:scale-110 transition">
                                    {getIconByRole(membro.cargo)}
                                </div>
                                <div>
                                    <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-1">{membro.cargo}</p>
                                    <p className="font-medium text-white text-sm md:text-base">{membro.nome}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conselho Fiscal */}
                    <h3 className="text-xl font-semibold text-green-300 mb-6 border-b border-green-700 pb-2">Conselho Fiscal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conselhoFiscal.map((membro, index) => (
                            <div key={index} className="bg-green-800/30 backdrop-blur-sm p-6 rounded-xl border border-green-700/50 flex items-center gap-4">
                                <div className="p-3 bg-green-900/30 rounded-lg">
                                    {getIconByRole(membro.cargo)}
                                </div>
                                <div>
                                    <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">{membro.cargo}</p>
                                    <p className="font-medium text-white">{membro.nome}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Historia;