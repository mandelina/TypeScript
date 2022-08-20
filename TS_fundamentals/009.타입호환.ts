// 1. 타입호환 ? 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지 의미

interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing

// C#이나 java같았으면 에러
// Avengers 클래스가 명시적으로 Ironman 인터페이스를 상속받아 구현하지 않았기 때문

// 하지만 타입스크립트에서는 정상 동작! 왜냐면 코드의 구조 관점에서 타입을 지정하는 것이 더 잘어울림 (객체리터럴이나 익명함수 등을 사용하기 때문)

// 2. 구조적 타이핑 (structural typing)
// 코드 구조 관점에서 타입이 서로 호환되는지 여부를 판단

interface Avengers {
  name: string;
}

let hero: Avengers;
let capt = { name: "캡틴", location: "시흥" }; // 여기서 name과 location을 String이라고 추론
hero = capt;

// 위 코드에서 capt가 hero 타입에 호환될 수 있는 이유는 capt속성중 name이 있기 때문.

function assemble(a: Avengers) {
  console.log("어벤져스 모여랏", a.name);
}

//위에서 정의한 capt변수.타입은 { name: string; location: string; }
assemble(capt);

// 3. Soundness 란 ?
// 타입스크립트는 컴파일 시점에 타입을 추론할 수 없는 특정 타입에 대해 일단 안전하다고 보는 특성이 있음
// 이것을 들리지 않는다 (it is said to not be sound) 라고 표현!

// 4. Enum 타입 호환 주의사항
//Enum타입은 number 타입과 호환되지만 이넘타입끼리는 호환 X
enum Status {
  Ready,
  Waiting,
}

enum Color {
  Red,
  Blue,
  Green,
}

let status1 = Status.Ready;
status1 = Color.Green; // 에러!이넘타입끼리 호환되지 않기때문

// 5. Class 타입 호환 주의 사항
// 클래스타입끼리 비교할땐 static 멤버와 constructor(생성자)를 제외하고 속성만 비교

class Hulk {
  handSize: number;
  constructor(name: string, numHand: number) {}
}

class Captain {
  handSize: number;
  constructor(numHand: number) {}
}

let a: Hulk;
let s: Captain;

a = s; // OK
s = a; // OK

// Generics
//제네릭 타입 간의 호환 여부를 판단할 때 타입 인자 <T>가 속성에 할당되어있는지 기준

interface Empty<T> {
  // 속성이 없기때문에 x와y는 같은 타입으로 간주
}
let x: Empty<number>;
let y: Empty<string>;

x = y; // OK, because y matches structure of x

interface NotEmpty<T> {
  data: T; // 만약 타입이 할당되어있으면 x와 y는 서로 다른 타입으로 간주 , <T>가 data 속성에 할당되었기때문.
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y; // Error, because x and y are not compatible
