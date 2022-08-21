export class Pessoa {
   constructor(
      public nome: string,
      public sobrenome: string,
      private idade: number,
      protected cpf: string
   ) {}

   getIdade(): number {
      return this.idade;
   }

   getNomeCompleto(): string {
      return `${this.nome} ${this.sobrenome}`
   }

   getCpf(): string {
      return this.cpf;
   }
}

export class Aluno extends Pessoa {
   constructor(
      public notas: number,
   ){}
   getNota(n1, n2 , n3): number {

   }
}
export class Cliente extends Pessoa {

}

const p1 = new Pessoa("Pedro", "Victor", 20, "01634982390");
console.log(p1);
console.log(p1.getCpf(), p1.getNomeCompleto(), p1.getIdade());
