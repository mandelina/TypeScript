// 1. Union Type
// 유니온 타입이란 자바스크립트의 or연산자와 같음.  ||

function logText(text: string | number) {
  // 문자나 숫자 타입이 올 수 있음
  // ...
}

//  Union Type의 장점

// any를 사용하는 경우
function getAge(age: any) {
  age.toFixe(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}

// 1. Intersection  Type
// 여러 타입을 모두 만족하는 하나의 타입

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer; // Person과 Developer 를 모두 만족해야함

// 결과적으로 아래와 같이 만족해야한다.
{
  name: string;
  age: number;
  skill: string;
}

// Union Type을 쓸 때 주의할 점
// 유니온 타입을 or , 인터섹션을 and라고 생각하는 논리적 사고에 유의!

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}

// 오류가 나는 이유 : 타입스크립트 관점에서 introduce를 호출하는 시점에 Person이 올지 Developer타입이 올지 알 수 없기때문!
