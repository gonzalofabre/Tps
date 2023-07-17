
function numeroMayor (num1,num2,num3) {
    if(num1 == num2 && num1 == num3){
        return 'Son iguales'
    }else{
        const numeros = [num1, num2, num3];
        let numMayor = 0;
        let sonIguales = 1;

        numeros.forEach(element => {
            if(element>numMayor) {
                numMayor = element;
            };
        });
        return numMayor;
    };
    

};

console.log(numeroMayor(1,3,100));

console.log(numeroMayor(0,0,0));

console.log(numeroMayor(0,"3",2));
