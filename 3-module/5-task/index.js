function getMinMax(str) {
  const arr = str.split(' ').map(item => +item).filter((item) => item);
  let obj = {};
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  return obj;
}
