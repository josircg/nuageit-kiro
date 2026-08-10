import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';

const raiz = resolve(process.argv[2] ?? '.');
const ignorados = new Set(['.git', 'node_modules', 'coverage']);
const extensoesTexto = new Set(['.js', '.mjs', '.json', '.md', '.txt', '.yaml', '.yml', '.env']);
const arquivoDesteScript = resolve(new URL(import.meta.url).pathname);

const detectores = [
  { nome: 'chave privada', regex: /BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY/ },
  { nome: 'access key AWS', regex: /AKIA[0-9A-Z]{16}/ },
  { nome: 'token GitHub', regex: /gh[pousr]_[A-Za-z0-9_]{30,}/ },
  { nome: 'segredo atribuído', regex: /(?:secret|password|token)\s*[:=]\s*["'][^"'\s]{12,}["']/i }
];

async function arquivosEm(caminho) {
  const info = await stat(caminho);
  if (info.isFile()) return [caminho];

  const arquivos = [];
  for (const item of await readdir(caminho, { withFileTypes: true })) {
    if (item.isDirectory() && ignorados.has(item.name)) continue;
    const filho = join(caminho, item.name);
    if (item.isDirectory()) arquivos.push(...await arquivosEm(filho));
    else if (item.isFile()) arquivos.push(filho);
  }
  return arquivos;
}

const achados = [];
for (const arquivo of await arquivosEm(raiz)) {
  if (resolve(arquivo) === arquivoDesteScript) continue;
  const extensao = extname(arquivo);
  if (!extensoesTexto.has(extensao) && !arquivo.endsWith('.env.example')) continue;

  let conteudo;
  try {
    conteudo = await readFile(arquivo, 'utf8');
  } catch {
    continue;
  }

  for (const detector of detectores) {
    if (detector.regex.test(conteudo)) {
      achados.push(`${relative(raiz, arquivo)}: possível ${detector.nome}`);
    }
  }
}

if (achados.length > 0) {
  console.error('Verificação bloqueada. Possíveis segredos encontrados:');
  for (const achado of achados) console.error(`- ${achado}`);
  process.exitCode = 2;
} else {
  console.log('Nenhum padrão de segredo conhecido foi encontrado.');
}
