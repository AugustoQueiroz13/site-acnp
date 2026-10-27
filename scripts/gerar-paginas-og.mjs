/**
 * Gera um index.html estático por rota dentro de /dist, cada um com seu
 * proprio titulo, description e meta tags Open Graph / Twitter.
 *
 * Isso permite que o preview do link (WhatsApp, Facebook, LinkedIn) mostre
 * o texto correto de cada pagina. A imagem compartilhada e a mesma da home.
 *
 * Roda automaticamente depois do "vite build" (ver package.json).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const baseUrl = 'https://www.nascentepequena.org';

// Imagem de compartilhamento usada em todas as paginas.
const ogImage = `${baseUrl}/img/social-share.png`;

// Rotas que recebem HTML proprio. A home ("/") ja vem correta no dist/index.html.
const rotas = [
  {
    path: 'historia',
    title: 'História | ACNP - Associação Cultural Nascente Pequena',
    description:
      'Conheça a trajetória da ACNP: 39 anos de arte, cultura, educação e preservação ambiental transformando vidas em Guapimirim.',
  },
  {
    path: 'cursos',
    title: 'Cursos e Oficinas | ACNP - Associação Cultural Nascente Pequena',
    description:
      'Robótica, música, dança, artesanato e capacitação profissional para todas as idades na ACNP, em Guapimirim.',
  },
  {
    path: 'projetos',
    title: 'Projetos | ACNP - Associação Cultural Nascente Pequena',
    description:
      'Projetos sociais da ACNP que transformam vidas em Guapimirim através da arte, cultura, educação ambiental e geração de renda.',
  },
  {
    path: 'parcerias',
    title: 'Parcerias | ACNP - Associação Cultural Nascente Pequena',
    description:
      'As parcerias da ACNP que ampliam o impacto social, cultural e ambiental em Guapimirim.',
  },
  {
    path: 'contato',
    title: 'Contato | ACNP - Associação Cultural Nascente Pequena',
    description:
      'Fale com a ACNP, visite nossa sede em Guapimirim ou colabore via PIX. Telefone, WhatsApp, endereço e redes sociais.',
  },
];

const htmlBase = readFileSync(resolve(distDir, 'index.html'), 'utf8');

// Substitui o conteudo de uma meta tag identificada por name/property.
// Tolera quebra de linha entre o atributo e o content="...".
function trocarMeta(html, seletor, valor) {
  const regex = new RegExp(`(<meta ${seletor}\\s+content=")[^"]*(")`);
  if (!regex.test(html)) {
    console.warn(`[og] aviso: meta nao encontrada para ${seletor}`);
    return html;
  }
  return html.replace(regex, `$1${valor}$2`);
}

function gerarPagina(rota) {
  const url = `${baseUrl}/${rota.path}`;
  let html = htmlBase;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${rota.title}</title>`);
  html = trocarMeta(html, 'name="description"', rota.description);
  html = trocarMeta(html, 'property="og:url"', url);
  html = trocarMeta(html, 'property="og:title"', rota.title);
  html = trocarMeta(html, 'property="og:description"', rota.description);
  html = trocarMeta(html, 'property="og:image"', ogImage);
  html = trocarMeta(html, 'property="twitter:url"', url);
  html = trocarMeta(html, 'property="twitter:title"', rota.title);
  html = trocarMeta(html, 'property="twitter:description"', rota.description);
  html = trocarMeta(html, 'property="twitter:image"', ogImage);

  const destino = resolve(distDir, rota.path);
  mkdirSync(destino, { recursive: true });
  writeFileSync(resolve(destino, 'index.html'), html, 'utf8');
  console.log(`[og] gerado: dist/${rota.path}/index.html`);
}

for (const rota of rotas) {
  gerarPagina(rota);
}

console.log(`[og] ${rotas.length} paginas geradas com sucesso.`);
