// 함수의 기본적인 타입선언

function sum(a, b) {
  return a + b;
}

// 타입스크립트는 함수의 인자를 모두 필수 값으로 간주
// 매개변수를 설정하면 undefined , null 이라도 인자로 넘겨야함

function sum1(a: number, b: number): number {
  return a + b;
}

sum1(10, 20); // 30
sum1(10, 20, 30); // error, too many parameters
sum1(10); // error, too few parameters

// 매개변수 초기화

function sum2(a: number, b = 100): number {
  return a + b;

  sum2(10, undefined); // 110
  sum2(10, 20, 30); // error, too many parameters
  sum2(10); // 110
}

// this 사용

function 함수명(this: 타입) {
  // .....
}
