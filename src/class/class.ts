class Pessoa {
   name: string
   age: number

   constructor(name: string ,age: number) {
      this.name = name;
      this.age = age
   }
}

const p1 = new Pessoa('Pedro', 30);
console.log(p1)