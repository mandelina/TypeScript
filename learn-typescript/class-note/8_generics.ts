// 1
// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

//2
// 제네릭의 문법
// 함수를 호출할 떄 파라미터 타입까지 같이 넘김
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText('하이');
// logText<string>('하이');

//3
// string으로 제한
// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join();
//   return text;
// }

//4
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
// logText(10);
// logText('하이');
// logText(true);

//5
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abcdefghij');
str.split('');
const flag = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// 1. 기본 인터페이스
interface Dropdown1 {
  value: string;
  selected: boolean;
}

const obj1: Dropdown1 = { value: 'abc', selected: false };

// 2.제네릭을 선언한 인터페이스
interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
const obj2: Dropdown2<number> = { value: 10, selected: false };

// 제네릭의 타입제한 1
// length를 사용하기 위해 => []
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach((text) => console.log(text));
  return text;
}

logTextLength<string>(['hi', 'abc']);

// 제네릭 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// LengthType이라는 속성이 있을것이다 라고 힌트를 줌.
function logTextLength1<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength1('a');
'a'.length;

logTextLength1(10); // number은 length를 포함하지 않기때문에 에러가 난다.
logTextLength1({ length: 10 });

// 제네릭 타입 제한 3 - key of
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('hi');
// getShoppingItemOption();
// ctrl + space => 나올수 있는 옵션
getShoppingItemOption('name');
