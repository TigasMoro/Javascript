//RECURSIVIDADE
function fatorial(n){ //retorna o fatorial de n de maneira recursiva
    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }

}

console.log(fatorial(5))