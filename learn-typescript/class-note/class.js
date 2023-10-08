//옛날
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person('캡틴', 100);

//class키워드가 생긴후
class Person {
  constructor(name, age) {
    console.log('생성');
    this.name = name;
    this.age = age;
  }
}

new Person(); // 생성

let min = new Person('민주', 25);
