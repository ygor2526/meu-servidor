import express from "express";
import { lerMensagens, salvarMensagens } from "./store.js";

const app = express();
const PORTA = 3000;

// Permite que o Express entenda requisições com corpo em JSON (usado no POST)
app.use(express.json());

app.get("/mensagens", async (req, res) => {
  try {
    const mensagens = await lerMensagens();
    res.json(mensagens);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao ler mensagens" });
  }
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});