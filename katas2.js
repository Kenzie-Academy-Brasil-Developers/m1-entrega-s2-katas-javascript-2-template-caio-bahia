function add(x,y){
 
    return x+y
}

// console.log(add(parseInt(prompt("Coloque o primeiro Numero")),parseInt(prompt("Coloque o segundo Numero"))))

function multiply(x,y){

    let multi = 0


        for(let i=1; i <= y; i++){

            multi = add(multi,x)

        }

     return multi
}

// console.log(multiply(parseInt(prompt("Coloque o primeiro Numero")),parseInt(prompt("Coloque o segundo Numero"))) 

function power(x,y){

    let expo = x
    
    for(let i = 1; i <= y-1 ; i++){

        expo = multiply(expo,x)

    }

    return expo
}

// console.log(power(parseInt(prompt("Coloque o primeiro Numero")),parseInt(prompt("Coloque o segundo Numero"))))

function factorial(x){

    let fator = 1
    

    for(let i=x; i >= 1; i--){

        fator = multiply(fator,i)
    }
    return fator
}

console.log(factorial(parseInt(prompt("Coloque um Numero"))))




