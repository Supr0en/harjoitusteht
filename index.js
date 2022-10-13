import getPlayerScores from "./playerScores.js";

export default async function Sorter() {
   try {
      const playerScores = await getPlayerScores();
      let players = [];
      let p1Scores = [];
      let p2Scores = [];
      for (let i = 0; i < playerScores.length; i++) {
         const player1 = Object.entries(playerScores[i])[0];
         const player2 = Object.entries(playerScores[i])[1];
         for (let name of Object.keys(playerScores[i])) {
            if (!players.some(player => player.name === name)) {
               players.push({
                  name: name,
                  wins: 0
               });
            }
         }
         p1Scores.push({
            name: player1[0],
            score: player1[1]
         });
         p2Scores.push({
            name: player2[0],
            score: player2[1]
         });
      }
      for (let j = 0; j < playerScores.length; j++) {
         if (p1Scores[j].score > p2Scores[j].score) {
               // players[j].wins += 1;
               console.log(p1Scores[j]);
         } else if (p1Scores[j].score < p2Scores[j].score){
               // players[j].wins += 1;
               console.log(p2Scores[j]);
         }
      }
      console.log(playerScores);
      console.log(players);
   } catch (error) {
      console.error(`ERROR: ${error}`);
   }
}
Sorter();
