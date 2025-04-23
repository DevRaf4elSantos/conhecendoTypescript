const somar = (...number: number[]) => {
    let soma : number = 0;
    number.forEach((element) => {
        soma += element;
    });
    console.log(`O valor total da soma é ${soma}`); 
};

somar(120, 80, 500, 150, 150)