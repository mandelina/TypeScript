interface User {
  age: number;
  name: string;
}

//---------------------------------------------------------
// 변수에 활용한 인터페이스
let minju: User = {
  age: 25,
  name: 'minju',
};

//---------------------------------------------------------
// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

let cap = {
  name: 'cap',
  age: 25,
};

getUser(cap);

//---------------------------------------------------------
//함수의 스펙(구조)에 인터페이스를 활용
//라이브러리나 협업을 할 때 함수의 구조를 잡을 때 사용
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

//---------------------------------------------------------
//인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;
//---------------------------------------------------------

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach((value) => {});
//---------------------------------------------------------

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
interface Developer extends Person {
  //   name: string;
  //   age: number;
  language: string;
}

let min: Developer = {
  language: 'js',
  name: 'min',
  age: 25,
};
//---------------------------------------------------------
