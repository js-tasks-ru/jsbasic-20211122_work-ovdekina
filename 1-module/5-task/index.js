function truncate(str, maxlength) {
  const strLength = str.length;
  if (strLength <= maxlength) {
    return str;
  } else {
    let myString = str.slice(0, maxlength - 1);
    return myString += "…";
  }
}
