const obj = {
  name: "Palak",
  age: 25,
  "bracket-notation": true,
  myName: function () {
    console.log(this.name);
  },
};

obj.hobby = "Dancing";

console.log(obj.name);
console.log(obj.age);
console.log(obj["bracket-notation"]);
console.log(obj.hobby);

delete obj.hobby;
console.log(obj);

obj.myName();

// Object.keys() .values() .entries()
