function welcome() {
  return "Hello World";
}

let con = {
  egoing: 80,
  billion: true,
  test: 10 * 2,
  str: "Welcome",
  func: function () {
    alert("Test");
    let func2 = {
      cons: function () {
        return this.str;
      },
    };
  },
  obj: {
    test1: "Test1",
    test2: "test2 ",
    test3: "test3",
  },
};
