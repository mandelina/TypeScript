// enum에서 별도의 값을 지정해주지 않으면 숫자형으로 동작한다.
enum Shoes {
  Nike,
  Adidas,
}
let my = Shoes.Nike;
console.log(my); // 0

// 문자형 enum
enum Shoes1 {
  Nike = '나이키',
  Adidas = '아디다스',
}
let my1 = Shoes.Nike;
console.log(my); // 나이키

//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === 'Y') console.log('정답입니다');
  if (answer === 'N') console.log('오답입니다');
}

askQuestion(Answer.Yes);
askQuestion('Yes');

// 실제 - 드롭다운같은곳에 사용
