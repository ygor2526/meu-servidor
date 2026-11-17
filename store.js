// store.js — Camada de persistência isolada
import { mkdir, readFile, writeFile } from "node:fs/promises";

const ARQUIVO = new URL("./data/mensagens.json", import.meta.url);

export async function lerMensagens() {
  try {
    const dados = JSON.parse(await readFile(ARQUIVO, "utf8"));
    if (!Array.isArray(dados)) throw new Error("O JSON precisa conter um array");
    return dados;
  } catch (erro) {
    if (erro.code === "ENOENT") return []; // Se não existe ainda, começa vazio
    throw erro; // Se o JSON estiver quebrado, repassa o erro
  }
}

export async function salvarMensagens(mensagens) {
  await mkdir(new URL("./data/", import.meta.url), { recursive: true });
  await writeFile(ARQUIVO, JSON.stringify(mensagens, null, 2), "utf8");
}