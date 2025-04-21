// Null => Valor que pode ser passado para a variavel que é diferente de não existir mas indica um valor vazio.
let carro : string | null = null;
console.log(carro);

// Undefined => Valor indefinido que pode gerar um erro na aplicação por ser o mesmo que não existir
let undef : string;
console.log(undef);


// Unknown => indica um valor desconhecido, por ser bastante proximo do any por receber diversos tipos não podem ser atribuidos diretamente a uma variavel tipada especifica.
let unk : unknown;
unk = "sdse";
unk = 858
// let numb : number = unk;
console.log(typeof(unk));
