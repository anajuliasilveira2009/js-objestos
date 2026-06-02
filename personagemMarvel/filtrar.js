const personagem = require("./personagemM.json");
function heroisNoApartamento(lista) {
  return lista.filter(p => p.endereco?.apartamento === true);
}
 

const filtrados = heroisNoApartamento(personagem);

console.log(filtrados);
