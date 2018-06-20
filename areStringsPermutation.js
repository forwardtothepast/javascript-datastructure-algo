// check if input strings are permutations of each other
let isStringPermuationsSorting = (str1, str2) => {
  if(!str1 || !str2) {
    return false;
  }
  if(str1.length !== str2.length) {
    return false;
  }
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();
  for(let i =0; i< str1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

let isStringPermuationsWithoutSorting = (str1, str2) => {
  if(!str1 || !str2) {
    return false;
  }
  if(str1.length !== str2.length) {
    return false;
  }
  let arr1 = [256];
  for(let i =0; i< str1.length; i++) {
    arr1[i] = 0;
  }
  for(let i =0; i< str1.length; i++) {
    arr1[str1.charCodeAt(i)] += 1;
  }
  for(let i =0; i< str1.length; i++) {
    arr1[str2.charCodeAt(i)] -= 1;
    if(arr1[str2.charCodeAt(i)] < 0) {
      return false;
    }
  }
  return true;
}

console.log(`isStringPermuationsSorting('abc', 'abc'): ${isStringPermuationsSorting('abc', 'abc')}`);
console.log(`isStringPermuationsSorting('', 'abc'): ${isStringPermuationsSorting('', 'abc')}`);
console.log(`isStringPermuationsSorting('abbc', 'abcb'): ${isStringPermuationsSorting('abbc', 'abcb')}`);
console.log(`isStringPermuationsSorting('abcccccc*', 'abc**'): ${isStringPermuationsSorting('abcccccc*', 'abc**')}`);
console.log(`isStringPermuationsSorting('abcce', 'acbec'): ${isStringPermuationsWithoutSorting('abc', 'abc')}`);
console.log(`isStringPermuationsWithoutSorting('abc', 'abc'): ${isStringPermuationsWithoutSorting('abc', 'abc')}`);
console.log(`isStringPermuationsWithoutSorting('', 'abc'): ${isStringPermuationsWithoutSorting('', 'abc')}`);
console.log(`isStringPermuationsWithoutSorting('abbc', 'abcb'): ${isStringPermuationsWithoutSorting('abbc', 'abcb')}`);
console.log(`isStringPermuationsWithoutSorting('abcccccc*', 'abc**'): ${isStringPermuationsWithoutSorting('abcccccc*', 'abc**')}`);
console.log(`isStringPermuationsWithoutSorting('abcce', 'acbec'): ${isStringPermuationsWithoutSorting('abc', 'abc')}`);
/*
output:
isStringPermuationsSorting('abc', 'abc'): true
isStringPermuationsSorting('', 'abc'): false
isStringPermuationsSorting('abbc', 'abcb'): true
isStringPermuationsSorting('abcccccc*', 'abc**'): false
isStringPermuationsSorting('abcce', 'acbec'): true
isStringPermuationsWithoutSorting('abc', 'abc'): true
isStringPermuationsWithoutSorting('', 'abc'): false
isStringPermuationsWithoutSorting('abbc', 'abcb'): true
isStringPermuationsWithoutSorting('abcccccc*', 'abc**'): false
isStringPermuationsWithoutSorting('abcce', 'acbec'): true
*/