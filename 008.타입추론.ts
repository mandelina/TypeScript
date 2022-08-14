// 타입추론 ?  타입스크립트가 코드를 해석해 나가는 동작

let x = 3; // x는 number로 간주 즉, 타입을 선언하지 않아도 추론이 일어남

//Best Common Type
// 가장 근접한 타입을 추론하는 방법

//Best Common Type 알고리즘으로 다른 타입들과 가장 호환이 잘 되는 타입을 선정
let arr = [0, 1, null];

// Contxtual Typing (문맥상 타입결정)
// 문맥상의 타입결정은 코드의 위치를 기준으로 일어남

// ex1
window.onmousedown = function (mouseEvent) {
  //마우스 이벤트와 연관이 있다고 추론
  console.log(mouseEvent.button); //<- OK (버튼속성이 있다고 추론)
  console.log(mouseEvent.kangaroo); //<- Error!
};

// ex2
window.onscroll = function (uiEvent) {
  // 스크롤을 보고
  console.log(uiEvent.button); //<- Error! (버튼 속성이 없다고 추론)
};

// 타입스크립트의 타입 체킹
// 타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야한다는 점
// 이것을 Duck Typing 또는 Structural Subtyping 이라고 함

// Duck Typing : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 동적 타이핑의 한 종류
//Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미
