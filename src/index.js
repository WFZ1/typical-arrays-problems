exports.min = array => (array && array.length) ? Math.min(...array) : 0;
exports.max = array => (array && array.length) ? Math.max(...array) : 0;
exports.avg = array => {
  if (!array || !array.length) return 0;

  let sum = 0;
  array.forEach(el => sum += el);
  return sum / array.length;
}
