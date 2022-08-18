// Union types
function addOrConcat(a: number | string | boolean, b: number | string | boolean) {
   if(typeof a === "number" && typeof b === "number") return console.log(a + b);
   return console.log(`${a}${b}`);
}

addOrConcat(1, 2);
addOrConcat("10", "10");
addOrConcat(10, "20");