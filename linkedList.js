"use strict";
let Node = function(dataArg, nextArg) {
  this.data = dataArg;
  this.next = nextArg;
};

let List = function() {
  this.head = null;
};

List.prototype.add = function(data) {
  if(!this.head) {
    this.head = new Node(data, null);
    return this.head;
  }

  let temp = this.head;
  while(temp.next) {
    temp = temp.next;
  }
  temp.next = new Node(data, null);
  return this.head;
}


List.prototype.print = function(data) {
  let temp = this.head;
  while(!!temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}

List.prototype.printKth = function(k) {
  if(!this.head) {
    console.log('not found');
    return;
  }

  let near = this.head;
  let far = this.head;
  for(let i =0; i<k-1 ; i++){
    far = far.next;
    if(!far) {
      console.log('not found');
      return;
    }
  }


  while(far.next) {
    near = near.next;
    far = far.next;
  }
  console.log(`found: ${k}=>${near.data}`);
  return;
}

let l1 = new List();
l1.add(20);
l1.add(1);
l1.add(10);
l1.add(1);
l1.add(15);
l1.print();
l1.printKth(1);
l1.printKth(2);
l1.printKth(3);
l1.printKth(4);
l1.printKth(5);
l1.printKth(6);
