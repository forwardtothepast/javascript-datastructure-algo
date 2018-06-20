function urlify(strArray, len) {
  if(!strArray || !strArray.length || len <= 0) {
    return;
  }
  let i = len -1; let spaceCount = 0; let newlength = 0;
  while(i>=0){
    if(strArray[i] == " ") {
      spaceCount++;
    }
    i--;
  }
  newlength = spaceCount * 2 + len;
  strArray[newlength] = null;
  let j = newlength - 1;
  i = len -1;
  while(i >= 0) {
    if(strArray[i] != " ") {
      strArray[j] = strArray[i];
      j--;
      i--;
    } else {
      strArray[j--] = "0";
      strArray[j--] = "2";
      strArray[j--] = "%";
      i--;
    }
  }
}

function test(arr, len) {
  console.log(`${arr} :`);
  urlify(arr, len);
  console.log(`${arr}`);
}
test(("abc e f    ").split(""), 7);
test(("").split(""), 0);
test(("       ").split(""), 2);
test(("    ee        ").split(""), 6);

/*
a,b,c, ,e, ,f, , , ,  :
a,b,c,%,2,0,e,%,2,0,f,
 :

 , , , , , ,  :
%,2,0,%,2,0,
 , , , ,e,e, , , , , , , ,  :
%,2,0,%,2,0,%,2,0,%,2,0,e,e,
*/