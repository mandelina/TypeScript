// 타입 추론 기본 1
function getA(a = 10) {
  let c = 'hi';
  return a + c;
}

10 + '10';

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
};

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
};

// best common type : ts가 어떤 타입인지 해석하는 알고리즘
// 가장 근접한 타입으로 추론 (모든 값들을 유니온으로 묶어서 ..)
let arr1 = [1, 2, true, true, 'a'];
let arr2 = [0, 1, null];
