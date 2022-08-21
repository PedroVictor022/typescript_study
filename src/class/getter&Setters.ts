export class Pessoa {
   constructor(
      public nome: string,
      public sobrenome: string,
      public idade: number,
      public _cpf: string
   ) {}
   
   get cpf(): string {
      return this._cpf.replace(/\D/g, "")
   }

   // Configurando o setter - Serve para mudar o valor
   // - Ao ultilizar o sinal de igual =, voce muda o valor
   set cpf(cpf: string){
      this._cpf = cpf
   }

}

const p1 = new Pessoa("Pedro", "Victor", 20, "123-456-789-00");
console.log(p1)
p1.cpf = ("123-456-789-99");
console.log(p1.cpf);