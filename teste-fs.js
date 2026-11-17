import { mkdir, writeFile, readFile } from "node:fs/promises";

// Exercício 2.1 — Criando a pasta data e salvando dados em disco
async function salvarHistorico() {
  const lista = [
    { id: 1, usuario: "Ana", texto: "Primeira mensagem salva no disco!" },
    { id: 2, usuario: "Pedro", texto: "Segunda mensagem salva no disco!" }
  ];

  await mkdir(new URL("./data/", import.meta.url), { recursive: true });
  const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);
  await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");
}

// Exercício 2.2 — Leitura resiliente e tratamento de arquivo ausente (ENOENT)
async function lerDadosSeguros(nomeArquivo) {
  try {
    const conteudo = await readFile(nomeArquivo, "utf8");
    return JSON.parse(conteudo);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      return [];
    }
    throw erro;
  }
}

await salvarHistorico();

const dados = await lerDadosSeguros(
  new URL("./data/arquivo-fantasma.json", import.meta.url)
);
console.log("Resultado com arquivo ausente:", dados);