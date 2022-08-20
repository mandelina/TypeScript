// enum ?
// 특정 값들의 집합을 의미하는 자료형

enum Direction {
  up = 1, //초기값을 1로 선언하면 차례로 1씩 증가
  down, // 2
  left, // 3
  right, // 4
}

// enum 사용하기

enum Response {
  no = 0,
  yes = 1,
}

function respond(recipient: string, message: Response): void {
  //...
}

respond("HI", Response.yes);

// 숫자형 enum에서는 선언할 때 다른 enum타입의 값을 사용하면 선언하는 enum의 첫번째 값에 초기화를 해야함

enum Wrong {
  A = getSomeValue(),
  B, // Error, 초기화가 필요합니다.
}

// 문자형 enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Heterogeneous Enums(복합 이넘) - 권고 X
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// 런타임 시점에서 enum은 실제 객체 형태로 존재
enum E {
  X,
  Y,
  Z,
}

function getX(obj: { X: number }) {
  return obj.X;
}
getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
