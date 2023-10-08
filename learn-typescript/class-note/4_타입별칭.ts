type Person = {
  ame: string;
  age: number;
};

interface Person {
  name: string;
  age: number;
}

let m1: Person = {
  name: 'm1',
  age: 25,
};

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {
  //..
}
