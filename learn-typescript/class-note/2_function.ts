//함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
//return값이 number로 타입추론
sum(10, 20);

// 함수의 반환 값에 타입을 정의한느 방식
function add1(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}
function sum3(a: number, b: number) {
  return a + b;
}
sum3(10, 20, 30, 40, 50); // js와 달리 인자값을 제한

// 함수의 옵셔널 파라미터
// ?가 붙은 인자는 있어도 되고 없어도 되는 인자
function log(a: string, b?: string, c?: string) {}

log('hello');
log('hello', new person());
