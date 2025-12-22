import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Leaf
} from 'lucide-react';

const Cursos = () => {
  useEffect(() => {
    document.title = "Cursos e Oficinas | ACNP - Associação Cultural Nascente Pequena";
  }, []);

  // GRUPO 1: Cursos Principais / Projetos Especiais
  const cursosPrincipal = [
    {
      id: 1,
      titulo: "Robótica Educacional",
      categoria: "Tecnologia",
      descricao: "Estimula o raciocínio lógico, a criatividade e a resolução de problemas através da construção e programação de robôs. Um passo para o futuro.",
      imagem: "/img/cursos/robotica.jpg",
    },
    {
      id: 2,
      titulo: "Curso de Corte e Costura",
      categoria: "Projeto Costurando Vidas",
      descricao: "Capacitação profissional e geração de renda através da arte da costura, transformando tecidos em oportunidades.",
      imagem: "/img/cursos/corte-costura.jpg"
    },
    {
      id: 3,
      titulo: "Projeto EncantoGuapi",
      categoria: "Coral da Maior Idade",
      descricao: "Promovendo a socialização e a alegria através da música para a melhor idade. Um encontro de vozes e histórias de vida.",
      imagem: "/img/cursos/encanto-guapi.jpg"
    },
    {
      id: 4,
      titulo: "Aula de Canto",
      categoria: "Música",
      descricao: "Descubra e aperfeiçoe sua voz. Trabalhamos técnica vocal, respiração e repertório em um ambiente acolhedor e inspirador.",
      imagem: "/img/cursos/canto.jpg"
    },
    {
      id: 5,
      titulo: "Aula de Teclado",
      categoria: "Música",
      descricao: "Desenvolva a musicalidade, coordenação motora e sensibilidade artística através do aprendizado prático do instrumento.",
      imagem: "/img/cursos/teclado.jpg"
    },
    {
      id: 6,
      titulo: "Aula de Balé",
      categoria: "Dança",
      descricao: "Clássico e encantador, o balé trabalha disciplina, postura e leveza, promovendo a expressão corporal desde a infância.",
      imagem: "/img/cursos/bale.jpg"
    },
    {
      id: 7,
      titulo: "Curso de Amigurumi",
      categoria: "Artesanato",
      descricao: "Aprenda a técnica japonesa de criar pequenos bonecos feitos de crochê ou tricô. Uma atividade relaxante e criativa.",
      imagem: "/img/cursos/amigurumi.jpg"
    },
    {
      id: 8,
      titulo: "Yoga para Mães Atípicas",
      categoria: "Projeto Teama",
      descricao: "Um espaço de acolhimento e cuidado especial, focado no bem-estar físico e emocional de mães atípicas através da prática do Yoga.",
      imagem: "/img/cursos/yoga-maes-atipicas.jpg"
    },
    {
      id: 9,
      titulo: "Capoeira – Contramestre Café",
      categoria: "Esporte e Cultura",
      descricao: "Uma mistura de arte marcial, esporte, cultura popular, dança e música. Fortalece o corpo e a mente honrando as tradições.",
      imagem: "/img/cursos/capoeira.jpg"
    },
  ];

  // GRUPO 2: Atividades Complementares
  const cursosSecundario = [
    {
      id: 10,
      titulo: "Dança do Ventre",
      categoria: "Dança",
      descricao: "É uma dança primitiva praticada originalmente em diversas regiões do Oriente Médio e da Ásia Meridional. É composta por uma série de movimentos vibrantes, impactantes, ondulações e rotações que envolvem o corpo como um todo.",
      imagem: "/img/cursos/danca-ventre.jpg"
    },
    {
      id: 11,
      titulo: "Dança de Salão",
      categoria: "Dança",
      descricao: "A dança de salão é uma expressão generalista que refere-se a diversos tipos de danças em casal, que são executadas em salões seguindo técnica e arte. Considerada uma forma de entretenimento, integração social e atividade física.",
      imagem: "/img/cursos/danca-salao.jpg"
    },
    {
      id: 12,
      titulo: "Yoga",
      categoria: "Bem-estar",
      descricao: "É um conceito e uma filosofia, que trabalha o corpo e a mente, mediante disciplinas tradicionais de quem a pratica. Yoga é relacionada ao budismo e ao hinduísmo, com práticas como exercícios e meditação.",
      imagem: "/img/cursos/yoga.jpg"
    },
    {
      id: 13,
      titulo: "Pintura em Tecido",
      categoria: "Artes",
      descricao: "Técnicas de pintura aplicadas ao tecido, permitindo a personalização de peças e o desenvolvimento da expressão artística.",
      imagem: "/img/cursos/pintura-tecido.jpg"
    },
    {
      id: 14,
      titulo: "Crochê",
      categoria: "Artesanato",
      descricao: "Processo de criação de tecidos usando a agulha de crochê e algum fio contínuo. Mas também pode se usar arame, barbante ou outro material inovador.",
      imagem: "/img/cursos/croche.jpg"
    },
    {
      id: 15,
      titulo: "Oficina de Programação Code Club",
      categoria: "Tecnologia",
      descricao: "Parte de uma rede global, ensinamos crianças e jovens a programar computadores, criar jogos e animações de forma lúdica e colaborativa.",
      imagem: "/img/cursos/code-club.jpg",
    },
  ];

  // Cursos da ACIAG
  const cursosParceria = [
    {
      titulo: "Atendente de Farmácia",
      imagem: "/img/cursos/atendente-farmacia.jpg"
    },
    {
      titulo: "Cabeleireiro",
      imagem: "/img/cursos/cabeleireiro.jpg"
    },
    {
      titulo: "Eletricista",
      imagem: "/img/cursos/eletricista.jpg"
    },
    {
      titulo: "Manicure",
      imagem: "/img/cursos/manicure.jpg"
    },
    {
      titulo: "Secretariado",
      imagem: "/img/cursos/secretariado.jpg"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-700">

      {/* --- 1. HERO SECTION --- */}
      <section
        className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/cursos/cursos-acnp.jpg')" }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <span className="inline-block py-1 px-3 border border-green-400 rounded-full text-green-300 text-sm font-bold tracking-widest uppercase mb-4 bg-green-900/50">
            Desenvolvimento e Cultura
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cursos e Oficinas</h1>
          <p className="text-xl font-light text-green-100 max-w-2xl mx-auto">
            Oferecemos oportunidades de aprendizado, expressão artística e capacitação profissional para todas as idades.
          </p>
        </div>
      </section>

      {/* --- 2. INTRODUÇÃO --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Nossas Atividades</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nossas oficinas são desenhadas para transformar vidas. Seja através da tecnologia, da dança, da música ou do artesanato, na ACNP você encontra um espaço para crescer e se conectar com a comunidade.
          </p>
        </div>
      </section>

      {/* --- 3. CURSOS EM ANDAMENTO (GRUPO 1) --- */}
      <section className="pt-10 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Sparkles className="text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">Em Andamento</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosPrincipal.map((curso) => (
              <div key={curso.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col h-full">
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                  <img
                    src={curso.imagem}
                    alt={curso.titulo}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  {/* Etiqueta de Categoria */}
                  <span className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm
                    ${curso.categoria === 'Tecnologia' ? 'bg-blue-600' : 'bg-green-600'}`}>
                    {curso.categoria}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition">
                    {curso.titulo}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {curso.descricao}
                  </p>

                  <Link to="/contato" className="mt-auto inline-flex items-center text-green-600 font-bold text-sm hover:text-green-800 transition">
                    Interessado? Entre em contato <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIVISÓRIA ESTILIZADA (SEM TEXTO) --- */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent w-full max-w-xs"></div>
        <div className="mx-4 text-green-400">
          <Leaf size={24} />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent w-full max-w-xs"></div>
      </div>

      {/* --- 4. CURSOS SECUNDÁRIOS (GRUPO 2) --- */}
      <section className="pb-24 px-4 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosSecundario.map((curso) => (
              <div key={curso.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col h-full">
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                  <img
                    src={curso.imagem}
                    alt={curso.titulo}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm bg-green-600">
                    {curso.categoria}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition">
                    {curso.titulo}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {curso.descricao}
                  </p>

                  <Link to="/contato" className="mt-auto inline-flex items-center text-green-600 font-bold text-sm hover:text-green-800 transition">
                    Interessado? Entre em contato <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. PARCERIA ACIAG (PORTFÓLIO HISTÓRICO) --- */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-300 font-bold uppercase tracking-widest text-sm">Trajetória de Capacitação</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Realizados em Parceria com a ACIAG</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Em parceria com a Associação Comercial, Industrial e Agropecuária de Guapimirim, realizamos cursos voltados para o mercado de trabalho, contribuindo para a profissionalização local.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cursosParceria.map((item, index) => (
              <div key={index} className="bg-green-800 overflow-hidden rounded-2xl border border-green-700 shadow-lg hover:shadow-xl transition duration-300">
                {/* Foto do Curso ACIAG */}
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-900/20"></div>
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Título */}
                <div className="p-4 text-center">
                  <h4 className="font-bold text-lg text-white">{item.titulo}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/parcerias"
              className="inline-block px-8 py-3 bg-white text-green-900 font-bold rounded-full hover:bg-green-100 transition shadow-lg"
            >
              Saiba mais sobre nossas Parcerias
            </Link>
          </div>

        </div>
      </section>

      {/* --- 6. CTA INSCRIÇÃO --- */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-orange-50 rounded-3xl p-10 border border-orange-100 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quer participar de alguma oficina?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Muitas de nossas atividades são gratuitas ou possuem valor social. Entre em contato para verificar a disponibilidade de vagas e horários.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition shadow-lg hover:translate-y-[-2px]"
            >
              Falar no WhatsApp <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cursos;