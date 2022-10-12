import getPlayerScores from "./playerScores.js";

export default async function Sorter() {
   try {
      const playerScores = await getPlayerScores();
      let players = [];
      for (let i = 0; i < playerScores.length; i++) {
         const player1 = Object.entries(playerScores[i])[0];
         const player2 = Object.entries(playerScores[i])[1];
         for (let name of Object.keys(playerScores[i])) {
            if (!players.some((el) => el.name === name)) {
               players.push({
                  name: name,
                  wins: 0,
               });
            }
         }
         for (let j = 0; j < players.length; j++) {
            if (player1[1] > player2[1] || player1[1] < player2[1]) {
               players[j].wins++;
            }
         }
      }
      console.log(playerScores);
      console.log(players);
   } catch (error) {
      console.error(`ERROR: ${error}`);
   }
}
Sorter();
