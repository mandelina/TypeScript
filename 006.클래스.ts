// 1. 클래스 속성에 readonly 사용

class Developer {
  readonly name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
let john = new Developer("John");
john.name = "John"; // error! name is readonly.

//readonly를 사용하면 함수에 초기값 설정 로직을 넣어줘야 하므로 다음과 같이 인자에 readonly 키워드를 추가해 코드를 줄일 수 있다.
class Developer {
  readonly name: string;
  constructor(readonly name: string) {}
}

// 2. 접근자
// 타입스크립트는 객체의 특정 속성의 접근과 할당에 대해 제어 가능
// 이를위해 해당 객체가 클래스로 생성한 객체여야함

class Developer {
  name: string;
}
const josh = new Developer();
josh.name = "Josh Bolton"; // name의 속성에 값을 대입

// 속성에 제약사항 추가시 get과 set활용
// 참고로 get만 선언하고 set을 선언하지 않은 경우는  자동으로 readonly로 인식한다.
class Developer {
  private name: string;

  get name(): string {
    // get으로 값 읽기
    return this.name;
  }

  set name(newValue: string) {
    // set으로 값 수정
    if (newValue && newValue.length > 5) {
      throw new Error("이름이 너무 깁니다");
    }
    this.name = newValue;
  }
}
const josh = new Developer();
josh.name = "Josh Bolton"; // Error
josh.name = "Josh";

// 추상클래스
// 특정 클래스의 상속이 되는 클래스 , 좀 더 상위 레벨에서 속성,메서드의 모양을 정의
abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log("drink sth");
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop web");
  }
  design(): void {
    console.log("design web");
  }
}
const dev = new Developer(); // error: cannot create an instance of an abstract class
const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink sth
josh.design(); // design web
