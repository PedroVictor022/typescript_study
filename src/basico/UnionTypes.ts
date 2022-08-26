// UNION TYPES
function concatoFn(a: number | string, b: number | string) {
   if(typeof a === 'number' && typeof b === 'number') return a + b;
   if(typeof a === 'string' && typeof b === 'string') return a + b;
}

console.log(concatoFn(10, 10));
console.log(concatoFn("23", "900"));