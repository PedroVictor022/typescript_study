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

// * Usando o super();
export class Aluno extends Pessoa {
   getNotas(n1: number, n2: number, n3: number, n4: number): number {
      console.log(`Media de Notas do aluno: ${(n1 + n2 + n3 + n4) / 4}`)
      return super.getIdade()
   }
}
export class Cliente extends Pessoa {

}

const p1 = new Pessoa("Pedro", "Victor", 20, "01634982390");
console.log(p1);
console.log(p1.getCpf(), p1.getNomeCompleto(), p1.getIdade());

const al1 = new Aluno("Jose", "Alberto", 18, "000");
console.log(al1);
al1.getNotas(10, 2, 10, 10);