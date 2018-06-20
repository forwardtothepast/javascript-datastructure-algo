let setZeroInMatrix = (arr) => {
  let arrr = [];
  let arrc = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j]) {
        arrc[j] = 1;
        arrr[i] = 1;
      } else {
        arrc[j] = 0;
        arrr[i] = 0;
      }
    }
  }
  for(let i = 0; i < arrr.length; i++) {
    if(!arrr[i]) {
    for(let j = 0; j < arrc.length; j++) {
      arr[i][j] = 0;
    }
  }
  }
  for(let i = 0; i < arrc.length; i++) {
    if(!arrc[i]) {
    for(let j = 0; j < arrr.length; j++) {
      arr[j][i] = 0;
    }
  }
  }
}

let arr = new Array()
arr.push([1,2,3,4,5]);
arr.push([0,5,7,8,9]);
arr.push([8, 9 , 8 , 6 , 0]);
console.log(`${arr}: ${setZeroInMatrix(arr)} `);
console.log(arr);
