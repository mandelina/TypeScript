interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'minju', age: 24, skill: 'front' };
}

let minju = introduce();
console.log(minju.skill); // skill이 없다 => 유니온 타입은 공통된 속성만 접근 가능
console.log(minju.name); // 따라서 name만 접근 가능

if ((minju as Developer).skill) {
  console.log((minju as Developer).skill); // 타입단언으로 접근
}

// 위에 방법은 복잡. 이때 타입 가드 사용
