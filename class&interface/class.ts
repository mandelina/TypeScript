abstract class User {
  // 추상클래스 : 다른 클래스가 상속받을 수 있는 클래스
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  // 추상메소드 만들기
  abstract getNickName(ar: string): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  // 추상메서드를 구현해주지 않으면 에러
  getNickName(str) {
    console.log("구현했다");
  }
}

const delina = new Player("del", "li", "na");
delina.nickname; // 애만 접근가능
delina.getFullName();
