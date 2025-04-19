// Arrays
let alunos = [
    'Andersom Silva', 'Felipe Delta', "Fenando Presunto"
];
console.log(alunos);
// Estrutura com a declaração próxima a do java
let frutas = [
    '🍕', '🍟', '🌭', '🍿', '🍳'
];
// Imprimindo com for of
for (const f of frutas) {
    console.log(`${f} - é bom `);
}
frutas.map(fruta => {
    if (fruta == '🌭') {
        console.log('encontrei o dogão');
    }
    else {
        console.log("Não encontrei o dogão");
    }
});
let tentativa = 0;
function acharPipoca(ali) {
    if (ali == '🍿') {
        console.log(`Achei a pipoca na ${tentativa} tentativa `);
    }
    else {
        tentativa++;
    }
}
frutas.filter((fruta) => acharPipoca(fruta));
export {};
