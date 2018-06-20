let isRotation = (str1, str2) => {
if(!str1 || !str2  || str1.length != str2.length || str1.length   == 0) {
  return false;
}
let s3 = str2.concat(str2);
return s3.search(str1) > 1;
}

console.log(`string, trings ${isRotation('string', 'trings')}`);