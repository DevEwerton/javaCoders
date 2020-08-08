// Start Exercise 1
function isPairOdd(number){
    return number % 2 == 0 ? "É par" : "É ímpar"
}
console.log(isPairOdd(10))
// Ends Exercise 1

// Start Exercise 2
let isCousin = (num) => {
    for (var i = 2; i < num; i++)//not can to i=num, because mod(n/n)==0 
        if (num % i === 0) return "Nao é primo" //not can mod(num)==0, because isn't cousin
    return  (num !== 1) ? "É primo" : "Nao é primo" 
}
console.log(isCousin(7))
// Ends Exercise 2

// Start Exercise 3
function functionFirst(callback){//An function do type async but isn't inaccurate
    console.log('first function')
    setTimeout(function(){//simulate time execution (read file), and then ready function callback
        for(let i = 10; i > 0; i--)
            console.log(i)
        callback();
    }, 3000)
}
function functionSecond(){
    console.log('second function')
    console.log('Happy New Year!!!')
}
functionFirst(functionSecond)
// Ends Exercise 3

// Start Exercise 4
let promisse = new Promise((resolve, reject) => {//An function of type async and inaccurate
    setTimeout(function(){//simulate time execution (read file), and then ready function callback
        for(let i = 10; i > 0; i--)
            console.log(i)
        
    }, 3000)

    // Treating synchronously
    if(resolve)//WARNING: NOT IS REAL COMPARATION, BECAUSE REALY EXIST RESOLVE AND REJECT
        resolve('Perfect!!!')//this is example function callback
    else    
        reject('Oh nooo!!!')//this is example function callback

})

promisse.then((message)=>{
    console.log('The first function run correctly: ', message)
}).then(
    console.log('Happy New Year, again')
).catch((err) => {
    console.log('Oh shittttt')
})
// Ends Exercise 4

// Start Exercise 5
const asyncFunction = async () => {
    try{
        const firstFunctionA =  () => {
            for(let i = 10; i > 0; i--)
            console.log(i)
        }
        const secondFunctionA = () => {//example buffering of the file
            firstFunctionA()
            return 'Happy New Year'
        }
        resourceOne = await secondFunctionA()
        console.log(resourceOne)
    }catch(err){
        console.log(err)
    }
}
asyncFunction()
// Ends Exercise 5

// Start Exercise 6
function biggerThenSeven(){
    score = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0]
    for (let i = 0; i <= score.length; i++)
        if ( score[i] >= 7 ) console.log("Nota: ", score[i])
}
biggerThenSeven()
// Ends Exercise 6

// Start Exercise 7
var cart = [//array
    {//object (key+value)
        'name' : 'nescau',
        'value': 4.5
    },
    {
        'name' : 'Coka-KOLLLLA',
        'value': 25.5
    }
]
function sumItems(cart){
    sum = 0
    for(let i = 0; i < cart.length; i++)
        sum = cart[i]['value'] + sum
    return sum
}
console.log("Total: ", sumItems(cart))
// Ends Exercise 7

// Start Exercise 8
var classRoom = [//array
    {//object (key+value)
        'name'      : 'Gu',
        'series'    : 9,
        'discipline': ''
    },
    {
        'name'   : 'Gui',
        'series' : 8,
        'discipline': ''
    },
    {
        'name'   : 'Edu',
        'series' : 8,
        'discipline': ''
    },
    {
        'name'   : 'Matheus',
        'series' : 8,
        'discipline': ''
    },
    {
        'name'   : 'Gabi',
        'series' : 9,
        'discipline': ''
    }

]
function toAtributeDiscipline(listClass){
    listClass.forEach(element => {
        if (element.series === 9)
            element.discipline = 'fisica'
    })
    return listClass
}
console.log(toAtributeDiscipline(classRoom))
// Ends Exercise 8
