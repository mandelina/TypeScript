// 인터페이스 ?
// 상호 간에 정의한 약속 혹은 규칙을 의미
// 타입스크립트에서 인터페이스는
// 1. 객체의 스펙(속성과 속성의 타입)
// 2. 함수의 파라미터
// 3. 함수의 스펙 (파라미터, 반환타입 등)
// 4. 배열과 객체를 접근하는 방식
// 5. 클래스

// ex1

interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  // logAge의 인자는 personAge라는 타입을 가져야 한다.
  console.log(obj.age);
}

let person = { name: "Capt", age: 28 };

logAge(person);
// 인터페이스를 인자로 받아 사용할 때 항상 인터페이스의 속성 갯수와 인자로 받는 객체의 속성 갯수를 일치시키지 않아도 된다.
// 다시 말해, 인터페이스에 정의된 속성, 타입의 조건만 만족한다면 객체의 속성 갯수가 더 많아도 상관 없다는 의미
// 인터페이스에 선언된 속성 순서를 지키지 않아도 된다 .

//-----------------------------------------------------------------------------------------------------------------------------

// 옵션 속성
// 인터페이스를 사용할 때 정의되어있는 속성을 모두 다 사용하지 않아도 된다. -> 옵션속성

interface 인터페이스_이름 {
  속성?: 타입; // 속성끝에 ?를 붙임
}

interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};

function brewBeer(beer: CraftBeer) {
  // Beer 인터페이스를 인자를 타입을 선언했지만, 넘긴 객체에는 hop은 없다 , hop은 옵셕속성으로 선언했기 때문
  console.log(beer.name);
}

brewBeer(myBeer);

// 옵션 속성의 장점 ?
// 1. 속성을 선택적으로 사용할 수 있다.
// 2. 인터페이스에 정의되어 있지 않은 속성에 대해 인지시켜줄 수 있다.

//-----------------------------------------------------------------------------------------------------------------------------

// ex2

interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};
function brewBeer(beer: CraftBeer) {
  console.log(beer.brewery); // Error: Property 'brewery' does not exist on type 'Beer'
}
brewBeer(myBeer);

//-----------------------------------------------------------------------------------------------------------------------------

//읽기 전용 속성
//인터페이스로 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성
// readonly를 속성을 앞에 붙임

interface CraftBeer {
  readonly brand: string;
}

//인터페이스로 객체를 선언하고 수정하려하면 에러

let myBeer: CraftBeer = {
  brand: "Belgian Monk",
};
myBeer.brand = "Korean Carpenter"; // error!

//읽기 전용 배열
// 배열을 선언시 ReadonlyArray<T> 타입을 사용하여 읽기 전용 배열 생성
let arr: ReadonlyArray<number> = [1, 2, 3];
arr.splice(0, 1); // error 배열의 내용을 변경 할 수 없기때문

//-----------------------------------------------------------------------------------------------------------------------------

// 함수타입
// 인터페이스는 함수의 타입을 정의할 때도 사용 가능

interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log("로그인 성공");
  return true;
};

//-----------------------------------------------------------------------------------------------------------------------------

// 클래스 타입
// C#이나 자바처럼 TS도 클래스가 일정 조건을 만족하도록 타입 규칙을 정할 수 있음

interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = "기네스";
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}

// 인터페이스 확장
interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;
fe.name = "delina";
fe.skill = "TypeScript";
