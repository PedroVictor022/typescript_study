// Type Never | Nunca retorna nada
function fnNever(): never | void {
   throw new Error('Erro qualquer');
}

console.log(fnNever());