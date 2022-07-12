// Funcao sem retorno
function notReturn(...args: string[]): void {
  console.log(args.join(" "));
}

notReturn("NADA", "NADA X2");