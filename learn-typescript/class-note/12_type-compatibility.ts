interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;

developer = new Person();

// developer = person; // Developer타입이 구조적으로 더 큰 관계이기 때문.

// ----------------------------------------
// 함수와 제네릭 타입에서

var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};

// sum이 add 보다 더 큰 구조 , 포함하고 있다.

add = sum; // 당연히 안됨. 매개변수 b가 없음
sum = add; // 구조적으로 된다.

// 제네릭
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty2 = empty1;
empty1 = empty2;

interface NotEmpty<T> {
  data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;
