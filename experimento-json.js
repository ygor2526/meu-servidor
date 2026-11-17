
const historicoMensagens = [
  { id: 1, usuario: "Ana", texto: "Bom dia, turma!" },
  { id: 2, usuario: "Pedro", texto: "Servidor online!" }
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);
console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);


const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const objetoValido = JSON.parse(jsonValido);
console.log("Texto da mensagem:", objetoValido[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';
try {
  JSON.parse(jsonQuebrado);
} catch (erro) {
  console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}