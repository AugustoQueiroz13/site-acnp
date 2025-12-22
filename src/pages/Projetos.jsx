import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Sprout, Recycle, Scissors, BookOpen,
    Video, Users, Heart, Laptop, Smile, MapPin
} from 'lucide-react';

const Projetos = () => {
    useEffect(() => {
        document.title = "Projetos | ACNP - Associação Cultural Nascente Pequena";
    }, []);

    const listaProjetos = [
        {
            titulo: "Programa Fazendo Arte na Praça",
            data: "desde 1987",
            descricao: "Resgate dos jogos e brincadeiras populares que estimulam a criatividade, a manutenção e a divulgação da cultura local e enriquecimento do currículo do Curso de Formação de Professores do Colégio Estadual Alcindo Guanabara, através das atividades públicas culturais.",
            imagem: "/img/projetos/fazendo-arte.jpg",
            icone: <Smile size={24} />
        },
        {
            titulo: "Projeto Plantando o Futuro",
            data: "2001",
            descricao: "Formação de 30 jovens em Jardinagem, Horticultura e Paisagismo, realizando, assim, mais um de nossos sonhos patrocinado pelo governo federal.",
            imagem: "/img/projetos/plantando-futuro.jpg",
            icone: <Sprout size={24} />
        },
        {
            titulo: "Projeto Piloto - Descobrindo Novas Competências",
            data: "2006",
            descricao: "Em parceria com o Colégio Estadual Alcindo Guanabara, que atendeu alunos da 5ª série com dificuldade de aprendizagem e proporcionou estágio supervisionado qualificando a prática pedagógica de professorandos do 3º ano do Curso Normal.",
            imagem: "/img/projetos/descobrindo-novas.jpg",
            icone: <BookOpen size={24} />
        },
        {
            titulo: "Projeto FÊNIX - Descobrindo Novas Competências",
            data: "2007 a 2010",
            descricao: "Com o apoio do INSTITUTO DA CRIANÇA, a ACNP realizou o Projeto que teve como conquistas, a elevação dos índices de aprovação dos alunos do Projeto Fênix, da participação dos pais e do desenvolvimento de novas metodologias e estratégias visando o aprimoramento das atividades, com a inclusão de Oficinas de Yoga, de Sensibilização e Rodinha da Cidadania.",
            imagem: "/img/projetos/projeto-fenix.jpg",
            icone: <Heart size={24} />
        },
        {
            titulo: "Projeto Óleo em Pet",
            data: "desde 2008",
            descricao: "Conscientização da população sobre o reaproveitamento do óleo de cozinha usado e embalagens de detergentes e pets, com produção artesanal de detergentes. O projeto virou política pública da Secretaria Municipal do Ambiente e Saneamento Básico.",
            imagem: "/img/projetos/oleo-em-pet.jpg",
            icone: <Recycle size={24} />
        },
        {
            titulo: "Projeto Maquinetando - Fazendo Arte na Máquina",
            data: "2008 até 2017",
            descricao: "Formação semiprofissionalizante de Corte e Costura; patchwork; confecção de bolsas ecológicas e customização com reaproveitamento de tecido, banners e outros materiais.",
            imagem: "/img/projetos/maquinetando.jpg",
            icone: <Scissors size={24} />
        },
        {
            titulo: "Projeto Preservarte - A Arte de Preservar o Ser Humano",
            data: "2011 até 2013",
            descricao: "Educação Ambiental para crianças e jovens de 12 a 18 anos, utilizando como ferramenta o Teatro, enriquecido com as oficinas de reaproveitamento para a confecção dos figurinos e cenários, e aulas de informática. Culminando com peças teatrais para a comunidade.",
            imagem: "/img/projetos/preservarte.jpg",
            icone: <Users size={24} />
        },
        {
            titulo: "Projeto Ponto de Cultura – Guapimirim em Foco",
            data: "2012",
            descricao: "A cultura no olhar de seu povo fortalecendo os talentos da nossa cidade, nas área de dança, música, teatro, gastronomia e exposição de artesanato com cadastro destes talentos.",
            imagem: "/img/projetos/ponto-de-cultura.jpg",
            icone: <MapPin size={24} />
        },
        {
            titulo: "Projeto Roda de Histórias",
            data: "desde 2014",
            descricao: "A partir de 2014 foi criado o Roda de Histórias fortalecendo o projeto “Guapimirim em Foco” – uma roda de conversa com convidados que participaram da história do desenvolvimento da cidade. A TVerde edita a entrevista e é passada por esta emissora. O diferencial deste trabalho é o resgate da história do Município sob o olhar do seu povo.",
            imagem: "/img/projetos/roda-historias.jpg",
            icone: <Video size={24} />
        },
        {
            titulo: "Projeto Maquinetando – NA 3ª IDADE",
            data: "2015",
            descricao: "Aprovado no edital do IC trazendo novidades: a customização, exercícios corporais, noções de saúde, para atender 60 mulheres a partir dos 60 anos.",
            imagem: "/img/projetos/maquinetando-3-idade.jpg",
            icone: <Heart size={24} />
        },
        {
            titulo: "Projeto Baixada Para Cima",
            data: "2017",
            descricao: "ONG brasileira Se Essa Rua Fosse Minha – SER. A ACNP desenvolveu a oficina de teatro com objetivo de aumentar a inserção e a participação ativa de adolescentes e jovens moradores da Baixada Fluminense nos programas de assistência social municipais, estaduais e federais, contribuindo assim para o exercício pleno de cidadania.",
            imagem: "/img/projetos/baixada-ser.jpg",
            icone: <Users size={24} />
        },
        {
            titulo: "Projeto Arte, Ambiente e Passos Digitais",
            data: "2021/2022",
            descricao: "Recursos do FCMDCA. Educação Ambiental através de vivência prática com enfoque no plantio, no contato com a terra, utilizando como ferramentas o Teatro e a Programação digital para 20 crianças de 8 a 13 anos, culminando com apresentação de peça teatral sobre sustentabilidade. Algumas aulas foram online por conta da Pandemia da Covid-19.",
            imagem: "/img/projetos/arte-ambiente-passos-digitais.jpg",
            icone: <Laptop size={24} />
        },
        {
            titulo: "O Projeto Arte na Máquina",
            data: "2018",
            descricao: "Aulas de corte e costura e confecção de bolsas ecológicas.",
            imagem: "/img/projetos/arte-na-maquina.jpg",
            icone: <Scissors size={24} />
        },
        {
            titulo: "Projeto Quintal de Trocas - Compartilhando Saberes",
            data: "2019",
            descricao: "Acesso à leitura através da troca de livros e da doação consciente, com uma grande procura.",
            imagem: "/img/projetos/quintal-de-trocas.jpg",
            icone: <BookOpen size={24} />
        },
        {
            titulo: "Projeto O Universo Mágico da Contação de Histórias",
            data: "2021",
            descricao: "Totalmente online. Como contrapartida do financiamento dos recursos da Lei Aldir Blanc pela pandemia da Covid-19, foi oferecida esta capacitação para os normalistas do CEAG, impactando mais de 300 alunos.",
            imagem: "/img/projetos/contacao-historias.jpg",
            icone: <Laptop size={24} />
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-700">

            {/* --- 1. HERO SECTION --- */}
            <section
                className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/img/projetos/projetos-acnp.jpg')" }}
            >
                <div className="absolute inset-0 bg-green-900/85"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
                    <span className="inline-block py-1 px-3 border border-green-400 rounded-full text-green-300 text-sm font-bold tracking-widest uppercase mb-4 bg-green-900/50">
                        Nossa Contribuição
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Projetos Sociais</h1>
                    <p className="text-xl font-light text-green-100 max-w-2xl mx-auto">
                        Uma linha do tempo de impacto. Conheça as iniciativas que moldaram nossa história e transformaram a realidade de Guapimirim.
                    </p>
                </div>
            </section>

            {/* --- 2. INTRODUÇÃO --- */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformando Vidas Através de Projetos</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Desde 1987, a ACNP desenvolve projetos focados em educação, cultura, meio ambiente e cidadania. Cada iniciativa abaixo representa um capítulo importante da nossa missão de servir à comunidade.
                    </p>
                </div>
            </section>

            {/* --- 3. GRID DE PROJETOS --- */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {listaProjetos.map((projeto, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col">
                                {/* Imagem */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/0 transition"></div>
                                    <img
                                        src={projeto.imagem}
                                        alt={projeto.titulo}
                                        className="w-full h-full object-cover hover:scale-110 transition duration-700"
                                    />
                                    {/* Badge da Data */}
                                    <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                        {projeto.data}
                                    </div>
                                    {/* Ícone Flutuante */}
                                    <div className="absolute bottom-4 right-4 bg-white text-green-700 p-2 rounded-full shadow-md">
                                        {projeto.icone}
                                    </div>
                                </div>

                                {/* Conteúdo */}
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                                        {projeto.titulo}
                                    </h3>
                                    <div className="h-1 w-12 bg-green-300 mb-6 rounded-full"></div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {projeto.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* --- 4. CTA (VOLUNTARIADO) --- */}
            <section className="py-20 bg-green-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Você tem uma ideia de projeto?</h2>
                    <p className="text-green-100 mb-8 text-lg">
                        A ACNP está sempre aberta a novas ideias que possam beneficiar nossa comunidade. Venha conversar conosco.
                    </p>
                    <Link
                        to="/contato"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-green-900 rounded-full font-bold hover:bg-green-100 transition shadow-lg"
                    >
                        Fale com a Gente <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Projetos;