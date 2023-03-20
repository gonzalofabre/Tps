function numeroMayor (numero) {
let num = numero.toString();
var numMayor = 0
var sonIguales = 1

if (num.length === 3) {
    for (i=0; i<num.length; i++) {
        if(num[i]>numMayor){
            numMayor = num[i];
        }else if(num[i] == numMayor) {
            numMayor = num[i];
            sonIguales++
        }
    }

    if(sonIguales!==3) {
        return numMayor;
    }else{
        return 'Son Iguales'
    }
}
};

console.log(numeroMayor(961))
console.log(numeroMayor(106))

console.log(numeroMayor(111))



