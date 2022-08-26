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
   set cpf(cpf: string){
      this._cpf = cpf
   }

   // Voce nao consegue ter acesso a metodos estaticos pela instancia criada
   static falarOi(): void{
      return console.log("Oi");
   }
   static criarPessoa(nome: string, sobrenome: string): Pessoa {
      return new Pessoa(nome, sobrenome, 0, "000-000-000-00");
   }

}

const p1 = new Pessoa("Pedro", "Victor", 20, "123-456-789-00");
const p2 = Pessoa.criarPessoa("Luiza", "Oliveira");
p2.cpf = "412-129-213-23"
console.log(p1, p2);