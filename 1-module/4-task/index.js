function checkSpam(str) {
  const input = str.toUpperCase();
  const substr1 = '1XBET NOW';
  const substr2 = 'XXX';
  return (input.includes(substr1) || input.includes(substr2));
}
