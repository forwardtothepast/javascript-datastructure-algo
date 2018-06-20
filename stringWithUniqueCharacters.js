'use strict';
// let us assume that string only contains characters from 'a' to 'z'
function isUniqueWithNoExtraStorage (str) {
  if(typeof(str) !== "string") {
    return false;
  }
  if(!str) {
    return false;
  }
  if(str.length > 32) {
    return false;
  }
  let storage = 0;
  for(let i =0; i < str.length; i++){
    let index = str.charCodeAt(i) - 'a'.charCodeAt(0);
    if(1<< index & storage) {
      return false;
    } else {
      storage = 1<< index | storage;
    }
  }
  return true;
}

function isUniqueWithExtraStorage (str) {
  if(typeof(str) !== "string") {
    return false;
  }
  if(!str) {
    return false;
  }
  if(str.length > 256) {
    return false;
  }
  let storage = [256];
  for(let i =0; i < 256; i++){
    storage[i] = false;
  }
  for(let i =0; i < str.length; i++){
    if(storage[str.charCodeAt(i)]) {
      return false;
    } else {
      storage[str.charCodeAt(i)] = true;
    }
  }
  return true;
}

console.log(`1: ${isUniqueWithNoExtraStorage(1)}`);
console.log(`abc: ${isUniqueWithNoExtraStorage('abc')}`);
console.log(`: ${isUniqueWithNoExtraStorage('')}`);
console.log(`abbc: ${isUniqueWithNoExtraStorage('abbc')}`);
console.log(`aaabc: ${isUniqueWithNoExtraStorage('aaabc')}`);
console.log(`accc: ${isUniqueWithNoExtraStorage('accc')}`);
console.log(`abc: ${isUniqueWithExtraStorage('abc')}`);
console.log(`: ${isUniqueWithExtraStorage('')}`);
console.log(`******': ${isUniqueWithExtraStorage('******')}`);
console.log(`aaabc: ${isUniqueWithExtraStorage('aaabc')}`);
console.log(`accc: ${isUniqueWithExtraStorage('accc')}`);
console.log(`2: ${isUniqueWithExtraStorage(2)}`);
/*output: 1: false
abc: true
: false
abbc: false
aaabc: false
accc: false
abc: true
: false
******': false
aaabc: false
accc: false
2: false
*/