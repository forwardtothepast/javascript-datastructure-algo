'use strict';
let testObj1 = {
  val1: '123',
  val2: () => {
    console.log('testObj1');
    console.log(this);
  }
};
let testObj2 = {
  val1: '123',
  val2: function () {
    console.log('testObj2');
    console.log(this);
  }
};
let testObj3 = {
  val1: '789',
  val2: function () {
    console.log('testObj3');
    return () => { console.log(this.val1); };
  }
};
let testObj4 = {
  val1: '456',
};
console.log(this);
testObj1.val2();
testObj2.val2();
testObj3.val2()();
testObj3.val2.bind(testObj4)()(); // bind works on function(){}, same for call, apply
testObj3.val2().bind(testObj4)(); // bind does not work for ()=>{}, same for call, apply
let obj5 = {
  x: 42,
  getX: function () {
    return () => { console.log(this.x); };
  }
}

console.log('obj5.getX()() :' + obj5.getX()());
let unboundGetX = obj5.getX();
console.log('unboundGetX(): ' + unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

let boundGetX = unboundGetX.bind(obj5);
console.log('boundGetX(): ' + boundGetX());

let funArrow = () => {
  return 10;
}
let funNoArrow = function () {
  return 10;
}
console.log('funArrow.hasOwnProperty("prototype"): ' + funArrow.hasOwnProperty('prototype'));
console.log('funNoArrow.hasOwnProperty("prototype"): ' + funNoArrow.hasOwnProperty('prototype'));

//object literals:
let p1 = "1", p2 = "2", p3="i am a function", p4="Iam";
let objp = {
  p1,
  p2,
  "outPutFun"() {
    console.log(this.p1);
  },
  [p2 + " who is having fun"]: p3,
  [p4 + "f2"](){
    console.log("in p2 function");
  }
};
p2= "9";
console.log(objp);
objp.outPutFun();
objp.Iamf2();

//rest
let r1 = function(arg1, ...arg2) {
  console.log(arguments.length);
  console.log(arg2);
}
r1("a","2","3","4s");

//spread
console.log(Math.max(..."345278"));
console.log(...[,,]);

//for of
let items = "12345";
for(let item of items) {
  console.log(item);
}
let items1 = ["test", "this", "for", "of"];
for(let item of items1) {
  console.log(item);
}
for(let item of [,,]) {
  console.log(item);
}


