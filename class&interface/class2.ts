type Words = {
  [key: string]: string; //[string]:string 형태 , 속성의 이름은 모르지만 타입만을 알경우
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // class를 타입처럼 사용할 수 있다.
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
