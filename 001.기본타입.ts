// 타입스크립트 기본타입

// 1. String
let str: string = 'hi';

// 2. Number
let num: number = 10;

// 3. Boolean
let isLoggedIn: boolean = false;

// 4. Array
let arr: number[] = [1,2,3];

// 5. 제네릭 사용
let arr1: Array<number> = [1,2,3];

//6. 튜플 : 배열길이 고정 , 각 요소의 타입이 지정되어있는 배열 형식
let arr2: [string,number] = ['hi',10];

//7. Enum : C,java와 같은 언어에서 흔히 쓰이는 타입, 특정 값(상수)들의 집합


enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;


// Any : 기존 JS로 구현된 웹서비스 코드에 TS를 점진적으로 사용할 때 활용하면 좋은 타입 / 모든 타입에 대한 허용
let str1: any ="hi";
let num1: any =  10;
let arr3: any =['a',2,true];

// Void : undefined 와 null만 할당, 함수에는 반환값을 설정할 수 없는 타입
let unuseful:void = undefined;
function notuse():void{
  console.log('sth');
  
}

//Never : 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입
function neverEnd(): never {
  while(true){
  }
}

