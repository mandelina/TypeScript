const x: never = 12;

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}

type k = keyof (Person | Lifespan);
