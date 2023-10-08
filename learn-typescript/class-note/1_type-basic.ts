//JS 문자열 선언
let str1 = 'hello';

// TS문자열 선언
let str2: string = 'hello';

// TS 숫자
let num: number = 10;

//TS 배열
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]; //10은 에러

//TS 튜플 : 배열의 위치에 type까지 지정
let address: [string, number] = ['gangnam', 1];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'minju',
//   age: 25,
// };

// type을 지정하면 사용해야할 값을 알 수 있다.
let person: { name: string; age: number } = {
  name: 'minju',
  age: 25,
};

// 진위값
let show: boolean = true;
