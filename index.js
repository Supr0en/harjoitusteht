import getPlayerScores from "./playerScores.js";

export default async function Sorter() {
  try {
    const playerScores = await getPlayerScores();
    let players = [];
    let count = [];
    for (let i = 0; i < playerScores.length; i++){
      const pelaaja1 = Object.values(playerScores[i])[0];
      const pelaaja2 = Object.values(playerScores[i])[1];
      if (pelaaja1 > pelaaja2){
        players.push(Object.keys(playerScores[i])[0]);
      } else if(pelaaja1 < pelaaja2){
        players.push(Object.keys(playerScores[i])[1]);
      }
    }
    players.forEach(item => (count[item] ? count[item]++ : count[item] = 1));
    console.log(playerScores);
    console.log(count);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}
Sorter();