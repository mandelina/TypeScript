// 타입스크립트에서 가리키는 모듈이라는 개념은 ES6+의 Modules 개념과 유사
//export, import와 같은 키워드를 사용하지 않으면 다른 파일에서 접근 불가

// math.ts
export interface Triangle {
  width: number;
  height: number;
}

// index.ts
import { Triangle } from './math.ts';

class SomeTriangle implements Triangle {
  // ...
}

// import : ES6의 import와 동일한 방식으로 사용
import { WheatBeerClass } from './index.ts';

class Cloud extends WheatBeerClass {
  
}

// 타입스크립트는 모듈 코드를 어떻게 변환 해주는가?
// -> tsconfig.json 파일에 설정한 컴파일러 모드에 따라 모듈 코드가 각기 다르게 변환
