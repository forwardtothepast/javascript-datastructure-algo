let oneEditAway = (str1, str2) => {
  if(!str1 && !str2) {
    return false;
  }
  if(str1.length - str2.length > 1) {
    return false;
  }
  let s1 = str1.length > str2.length  ? str1 : str2;
  let s2 = str1.length > str2.length  ? str2 : str1;
  let diff = false;
  for(let i = 0 ; i < s1.length; i++){
    if(s1.charAt(i) != s2.charAt(i)) {
      if(!diff) {
        diff = true;
      } else {
        return false;
      }
    }
  }
  return diff;
}

let test = (str1, str2) =>  {
	console.log(`${str1} &  ${str2} :  ${oneEditAway(str1, str2)}`);
}

test("xyz", "xyzt");
test("xyz", "xyztt");
test("xyz", "xyz");
test("xyr", "xyz");
test("xyr", "xyzt");
test("pyz", "xyz");
test("p", "");
test("", "");
test(undefined, undefined);

/*output:
xyz &  xyzt :  true
xyz &  xyztt :  false
xyz &  xyz :  false
xyr &  xyz :  true
xyr &  xyzt :  false
pyz &  xyz :  true
p &   :  true
 &   :  false
undefined &  undefined :  false
*/