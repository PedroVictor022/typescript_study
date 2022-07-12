const objectA: {
  keyA: string,
  keyB: string,
  keyC?: string,
  // INDEX SIGNATURE
  [key: string] : unknown;
}  = {
  keyA: "Value A",
  keyB: "Value B",
};

console.log(objectA);