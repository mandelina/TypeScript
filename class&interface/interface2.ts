interface User {
  name: string;
}

interface Player1 extends User {}

const delina: Player1 = {
  name: "",
};

// 타입으로 구현

// type User = {
//   name: string;
// };

// type Player1 = User & {};

// const delina: Player1 = {
//   name: "",
// };
