import getPlayerScores from "./playerScores.js";

export default async function Sorter() {
   try {
      const playerScores = await getPlayerScores();
      let players = [];
      let p1Data = [];
      let p2Data = [];
      let results = [];

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
         p1Data.push({
            name: player1[0],
            score: player1[1]
         });
         p2Data.push({
            name: player2[0],
            score: player2[1]
         });
      }

      for (let j = 0; j < playerScores.length; j++) {
         if (p1Data[j].score > p2Data[j].score) {
            const p1Index = players.findIndex(e => e.name === p1Data[j].name);
               players[p1Index].wins += 1;
         } else if (p1Data[j].score < p2Data[j].score){
            const p2Index = players.findIndex(e => e.name === p2Data[j].name);
               players[p2Index].wins += 1;
         }
      }
      
      for (let p = 0; p < players.length; p++){
         players.sort((a, b) => {
            return (b.wins - a.wins);
         });
         results.push(players[p].name);
      }
   } catch (error) {
      console.error(`ERROR: ${error}`);
   }
}
Sorter();
