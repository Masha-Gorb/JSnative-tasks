function derive(coefficient,exponent) {
  let a = coefficient*exponent
  let b = exponent-1
  return(a+'x^'+b)
}