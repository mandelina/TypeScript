// 제네릭은 C#,java 등언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 사용되는 특징
// 한가지 타입보다 여러가지 타입에서 동작하는 컴포넌트를 생성하는데 사용

// 제네릭 ? 타입을 마치 함수의 파라미터처럼 사용하는것
function getText(text) {
  return text;
}

//-----------------------------------------------------------------------------------------------

// 파라미터에 어떤 값이 들어가도 그대로 반환
getText("hi"); // 'hi'
getText(10); // 10
getText(true); // true

//-----------------------------------------------------------------------------------------------

// 제네릭 살펴보기
function getText<T>(text: T): T {
  return text;
}

// 타입을 넘겨주어 사용할 수있다.
getText<string>("hi");
getText<number>(10);
getText<boolean>(true);

//-----------------------------------------------------------------------------------------------
// 제네릭을 사용하는 이유

function logText(text: any): any {
  // 함수의 인자로 어떤 타입이 들어갔고 반환되는지 모름 (any는 타입 검사를 하지 않기 때문)
  return text;
}
// 위의 문제를 해결하는것이 제네릭
function logText<T>(text: T): T {
  // 함수의 인자와 반환값에 모두 T라는 타입 추가
  // 이렇게 하면 타입스크립트가 호출 시 넘긴 타입에 대해 추정 가능
  return text;
}

// 선언한 함수 호출하기
// #1
const text = logText<string>("Hello Generic"); // 복잡한 코드에서 두 번째 방법으로 타입추정이 불가능 하면 사용
// #2
const text = logText("Hello Generic"); // 보통 이렇게 사용
//-----------------------------------------------------------------------------------------------

// 제네릭 타입 변수
// 제네릭을 사용할 때 컴파일러에서 인자에 타입을 넣어달라는 경고를 보게 됨
function logText<T>(text: T): T {
  // 여기서 인자로 받은 값의 length를 확인하고 싶다면?
  return text;
}

// 에러 발생
function logText<T>(text: T): T {
  console.log(text.length); // Error: T doesn't have .length
  return text;
}

// 왜 에러? text에 length가 있는지 모르기 때문

// 아래와 같이 제네릭에 타입을 줄 수 있음
function logText<T>(text: T[]): T[] {
  console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
  return text;
}

//-----------------------------------------------------------------------------------------------
// 제네릭 타입
function logText<T>(text: T): T {
  return text;
}

// 아래 두개는 같은 코드
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: { <T>(text: T): T } = logText;

// 변형하여 인터페이스 코드를 사용
interface GenericLogTextFn {
  <T>(text: T): T;
}
function logText<T>(text: T): T {
  return text;
}
let myString: GenericLogTextFn = logText; // Okay

// 제네릭 클래스
class GenericMath<T> {
  // 클래스 이름 오른쪽에 <T>를 붙인다.
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>(); // 인스턴스 생성시 타입을 지정해준다.
