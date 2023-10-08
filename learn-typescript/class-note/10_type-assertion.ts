// 타입 단언
let a;
a = 20;
a = 'a';
let b = a; // 맨처음 선언된 a의 타입 any를 가짐.

// ---------------------------------------------------------------

let b1 = a as string; // string으로 단언 !

// dom api 조작시 많이 사용!
// document.createElement;

let div = document.querySelector('div') as HTMLDivElement;
div.innerHTML; // null일 수도 있음. 이때 타입 단언
