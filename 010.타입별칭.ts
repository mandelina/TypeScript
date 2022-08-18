// 1.타입별칭 ? 특정 타입이나 인터페이스를 참조할 수 있는 타입변수

// ex1
// string 타입을 사용할 때
const name: string = "capt";

// 타입 별칭을 사용할 때
type MyName = string;
const name: MyName = "capt";

// 2.interface 레벨의 복잡한 타입도 별칭 부여 가능
type Developer = {
  name: string;
  skill: string;
};

// + 제네릭도 사용 가능
type User<T> = {
  name: T;
};

// 3. 타입 별칭 특징
// 타입 별칭은 새로운 타입값을 하나 생성하는것이 X
// 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여

// 4. 타입 vs interface
// 가장 큰 차이점은 타입의 확장 가능여부
// interface (가능) type (불가능)
//  따라서 가능한 interface로 선언하는것을 추천

//( 좋은 소프트웨어는 확징이 용이해야한다는 원칙 )
