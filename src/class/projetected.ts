// Forma longa
export class Empresa { 
   public readonly nome: string;
   protected readonly colaborador: Colaborador[] = [];
   private readonly cnpj: string;

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

export class Udemy extends Empresa {
   constructor(){
      super("Udemy", "000-000-1")
   }
   removeColab(): Colaborador | null{
      const colaborador = this.colaborador.pop();
      if(colaborador) return colaborador;
      return null;
   }
}

const empresaUdemy = new Udemy();
empresaUdemy.removeColab();