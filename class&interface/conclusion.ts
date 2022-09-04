type PlayerA = {
  firstname: string;
};
interface PlayerB {
  firstname: string;
}

// type상속
//interface상속도 가능
class User implements PlayerA {
  constructor(public firstname: string) {}
}
