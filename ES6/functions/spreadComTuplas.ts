const tupla: [number, string, boolean] = [1, 'abc', true]


function tuplaParam1 (a: number, b: string, c: boolean, d?: any): void {

    console.log(`${a}, ${b}, ${c}, ${d}`)
}
tupla.push(2021)
tuplaParam1(...tupla)