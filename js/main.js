const playerArray = []
// Player Display Function
function display(players) {
    const playerlistElement = document.getElementById("add-player-list");
    const playerList = playerlistElement.children.length;
    const li = document.createElement("li");

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if(playerList == 5) {
        alert("You can add maximum 5 players");
        return
      }
      else{
          li.innerHTML = `<span class="block mb-5">${player}</span>`;
          playerlistElement.appendChild(li);  
      } 
    }
}
// Select Button click funtion
function playerAdd(element) {
    const playerName = element.parentNode.children[1].innerText;
    playerArray.push(playerName);
    display(playerArray);
}