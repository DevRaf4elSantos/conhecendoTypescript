// Tupla simples 
let dadosAdvogados = ["Dr. Jalim Rabei", "Senior Advocate", 35085];
console.log(dadosAdvogados[0]);
// Tupla com Rest Operator
let listaNomes = ['Carlos', 'Felipe', 'Geraldo', 'Toni'];
console.log(...listaNomes);
// Tupla Heterogênia
let listaUsuarios = [4, false, ...listaNomes];
console.log(listaUsuarios);
// Uso de funcões em Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
console.log(listarPessoas(listaNomes, [1, 2, 3, 5, 9, 6]));
export {};
