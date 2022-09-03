type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// type Player = {
//   nickname: string;
//   team: Team;
//   health: Health;
// };

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: "lina",
  team: "read",
  health: 1,
};

//--------------------------------
