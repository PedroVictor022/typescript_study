// E um array de tipo especifico e tamanho especifico

const dadosCliente1: [number, string] = [1, 'Pedro'];
const dadosCliente2: [number, string, ...string[]] = [2, 'Luiza', 'Marinho']
const dadosCliente3: [number, string, string?] = [3, 'Mario']

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Elo';

console.log(dadosCliente1, dadosCliente2, dadosCliente3);