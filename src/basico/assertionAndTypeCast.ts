// Assertion é usado para firmar que o tipo valor passado é do mesmo tipo do esperado (Quando o valor vem de um tipo unknown) usando diamond Operator antes do valor a ser recebido.

let uValor : unknown;
let sValor : string;
let nValor : number;

uValor = 200;
nValor = <number> uValor;

console.log(nValor);

// TypeParse é usado quando queremos mudar o tipo de uma variavel que não é do tipo unknown

sValor = '50';

nValor = Number.parseInt(sValor);

sValor = nValor.toString();

console.log(nValor);

console.log(sValor);