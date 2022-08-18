// Cria um "apelido" para um tipo
// Tipo criado por nos, devem ser inicializados com letras maiusculas
type Idade = number;
type Pessoa = {
   nome: string
   idade: Idade,
   salario: number,
   filhos?: boolean | number,
}

const pessoa1: Pessoa = {
   nome: "Pedro Victor",
   idade: 20,
   salario: 3700,
   filhos: false
}

console.log(pessoa1);

export function criarPessoa(pessoa: Pessoa): Pessoa {
   return {...pessoa}
}

console.log(criarPessoa(pessoa1))