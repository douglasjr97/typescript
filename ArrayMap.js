const users = [
    {id:1, name: 'John', age: 21,},
    {id:2, name: 'Flash', age: 22},
    {id:3, name: 'Kobe', age: 23},
];

const notebooks = [
    {id:1, name: 'Asus', price: 200},
    {id:2, name: 'Macbook', price: 2500},
    {id:3, name: 'Samsung', price: 600},
]

const pricesReal = notebooks.map(real => real.price * 4)
const priceDolar = notebooks.map(dolar => dolar.price)
const totalReal = notebooks.map(real => real.price * 4).reduce((a,b) => a + b, 0)
const totalDolar = notebooks.reduce((a,b) => a + b.price, 0)

console.log('Dolar: ', priceDolar)
console.log('Real: ',pricesReal)
console.log('Total Dólar: ',totalDolar)
console.log('Total Real: ',totalReal)




