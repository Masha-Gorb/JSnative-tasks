//7куи сложная таска: дано число и массив функций, надо прогнать число через все функции в массиве
//решение
function chain(input, fs) {
  return fs.reduce(function(input, fs) { return fs(input) }, input)
}