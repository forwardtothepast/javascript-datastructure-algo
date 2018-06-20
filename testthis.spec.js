"use strict";
let fun1 = {
  f1: (arg1, arg2) => {
  return arg1 + arg2;
  }
}


describe("A spy", function() {
  it('', () => {

    let res = fun1.f1(2,3);
    expect(res).toEqual(5);
    spyOn(fun1, 'f1');
    fun1.f1(2,3);
    expect(fun1.f1).toHaveBeenCalled();
    expect(fun1.f1).toHaveBeenCalledWith(2,3);
  });

});

describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});