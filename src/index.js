// VAR, LET e CONST

//  ---- VAR ---- //
// TEM ESCOPO GLOBAL
// NÃO TEM ESCOPO DE BLOCO
// POSSIBILIDADE DE REDECLARAR VALORES
// TEM ESCOPO DE FUNÇÃO

//  ---- LET ---- //
// NÃO TEM ESCOPO GLOBAL
// TEM ESCOPO DE BLOCO
// POSSIBILIDADE DE REDECLARAR VALORES
// TEM ESCOPO DE FUNÇÃO

//  ---- CONST ---- //
// NÃO TEM ESCOPO GLOBAL
// TEM ESCOPO DE BLOCO
// TEM ESCOPO DE FUNÇÃO
// NÃO TEM POSSIBILIDADE DE REDECLARAR VALORES

// ESCOPO DE FUNÇÃO
function returnName() {
  const name = "Ronald";

  return name;
}

// ESCOPO DE BLOCO
if (true) {
  const name = "Ronald";
}
