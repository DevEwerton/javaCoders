
function isPairOdd(number){
    return number %2 == 0 ? "É par" : "É ímpar";
}
console.log(isPairOdd(13));

let isCousin = (num) => {
    for (var i = 2; i < num; i++)
    if (num % i === 0) return "Nao é primo";
    return  (num !== 1) ? "É primo" : "Nao é primo" ;
}
console.log(isCousin(4));

function regressiveTime(number){
    
    setTimeout(function(){ alert("Hello"); }, 3000);
}

regressiveTime(10);