interface User {
  health: number;
}

interface User {
  age: number;
}
interface User {
  name: string;
}

//각각 선언한걸 하나로 합쳐준다!
//type은 그렇지 않음

const mandelina: User = {
  health: 1,
  age: 24,
  name: "delina",
};
