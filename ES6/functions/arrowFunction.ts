// const somar = (n1:number, n2: number) => n1 + n2;

// console.log(somar(5,6))


const flecha = () => {return flecha}

const formatada = flecha.bind({nome: 'Douglas'})

console.log(formatada())