function camelize(str) {
  const arr1 = str.split('-');
  const arr2 = arr1.map((item, index) => index == 0 ? item : item.charAt(0).toUpperCase() + item.slice(1));
  return arr2.join('');
}
