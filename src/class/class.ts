// Forma longa
export class Empresa { 
   public readonly nome: string;
   private readonly colaborador: Colaborador[] = [];
   protected readonly cnpj: string;

   constructor(nome: string, cnpj: string) {
      this.nome = nome;
      this.cnpj = cnpj;
   }

   addNewColab(colaborador: Colaborador): void {
      this.colaborador.push(colaborador);
   }

   showAllColab(): void {
      for(const colab of this.colaborador) {
         console.log(colab)
      }
   }

}

export class Colaborador {
   constructor(
      public readonly nome: string, 
      public readonly sobrenome: string
   ){}
}

const empresa1 = new Empresa("Udemy", "12.22.33./00");
const colaborador1 = new Colaborador("Pedro", "Victor");
const colaborador2 = new Colaborador("Luiz", "Nonato");

empresa1.addNewColab(colaborador1);
empresa1.addNewColab(colaborador2)

empresa1.showAllColab()