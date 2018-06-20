const ARRAY_LENGTH = 256;
let hasPlaindromeString = (str) => {
  if(!str) {
    return false;
  }
  let arr = [ARRAY_LENGTH];
  for(let i = 0; i < ARRAY_LENGTH; i++) {
    arr[i] = 0;
  }
  for(let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i)] = !arr[str.charCodeAt(i)];
  }
  let hasOdd = false;
  for(let i = 0; i < ARRAY_LENGTH; i++) {
    if(arr[i]) {
      if(!hasOdd) {
        hasOdd = true;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(`this is what this look like is what look like: ${hasPlaindromeString('this is what this look like is what look like')}`);
console.log(`this: ${hasPlaindromeString('this')}`);
console.log(`  : ${hasPlaindromeString('  ')}`);
console.log(`: ${hasPlaindromeString('')}`);
console.log(`t: ${hasPlaindromeString('t')}`);