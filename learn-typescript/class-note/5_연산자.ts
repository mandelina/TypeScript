let seho: string | number | boolean;

/**타입가드를 이용한 로그메시지를 출력하는 함수 */
function logMessage(value: string | number) {
  if (typeof value === 'number') value.toLocaleString();
  if (typeof value === 'string') value.toString();
  throw new TypeError('값은 string이나 number여야합니다.');
}

logMessage('hello');
logMessage(2);

// 유니온타입의 특징
interface Developerr {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

//유니온 속성  - 실무에서 더 많이 사용
function askSomeone(someone: Developerr | Person) {
  someone.name; //접근가능
  //확실히 접근가능한 값만 에러가 나지 않는다.
  someone.skill; //에러
  someone.age; //에러
}

// intersection타입은 모든 속성에 접근가능
function askSomeone1(someone: Developerr & Person) {
  someone.age;
  someone.skill;
  someone.name;
}

askSomeone({ name: '디벨로퍼', skill: '웹개발' }); // 타입이 Developer
askSomeone({ name: '캡틴', age: 100 }); // 타입이 Person

askSomeone1({ name: '디벨로퍼', skill: '웹개발', age: 34 }); // Developerr와 Person타입의 속성들을 전부 가지고있어야 오류가 나지 않는다.
