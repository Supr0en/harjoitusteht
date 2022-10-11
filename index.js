import getPlayerScores from "./playerScores.js";

export default async function Sorter() {
   try {
      const playerScores = await getPlayerScores();
      let players = [];
      let count = [];
      for (let i = 0; i < playerScores.length; i++) {
         const player1 = Object.entries(playerScores[i])[0];
         const player2 = Object.entries(playerScores[i])[1];
         for (let name of Object.keys(playerScores[i])) {
            if (!players.includes(name)) {
               players.push({
                  name: name,
                  wins: 0,
               });
               if (player1[1] > player2[1]) {
                  players[i].wins += 1;
               } else if (player1[1] < player2[1]) {
                  players[i].wins += 1;
               }
            }
         }
        //  if (player1[1] > player2[1]) {
        //     players[i].wins += 1;
        //  } else if (player1[1] < player2[1]) {
        //     players[i].wins += 1;
        //  }
      }
      // players.forEach(item => (count[item] ? count[item]++ : count[item] = 1));
      console.log(playerScores);
      console.log(players);
   } catch (error) {
      console.error(`ERROR: ${error}`);
   }
}
Sorter();
