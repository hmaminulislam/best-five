const playerArray = []
// Player Display Function
function display(players) {
    const playerlistElement = document.getElementById("add-player-list");
    const li = document.createElement("li");

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if(playerArray.length >5) {
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
  if(playerArray.length> 5) {
    return
  }
  else {
    const SelectButton = element.parentNode.children[3];
    SelectButton.setAttribute("disabled", "true");
    SelectButton.style.backgroundColor = "#cccccc";
    SelectButton.style.backgroundColor = "#666666";
  }
}
// String convet Number 
function stringToNumber(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.value;
  const elementNumber = parseFloat(elementString)
  return elementNumber
}
// Calculat button click
document.getElementById("calculate-btn").addEventListener("click", function(){
  const perPlayerCost = stringToNumber("per-player-field");
  const playerQuantity = document.getElementById("add-player-list").children.length;
  const totalPlayerCost = perPlayerCost * playerQuantity;
  // Per Player field validation
  if(isNaN(perPlayerCost) || perPlayerCost <= 0) {
    alert("Not valid number")
    return
  }
  else {
    const playerExpenses = document.getElementById("player-expenses");
    playerExpenses.innerText = totalPlayerCost;
  }
});
// Total calculate button click
document.getElementById("calculate-total-btn").addEventListener("click", function() {
  const managerCost = stringToNumber("manager-field");
  const coachCost = stringToNumber("coach-field");
  const perPlayerCost = stringToNumber("per-player-field");
  const playerQuantity = document.getElementById("add-player-list").children.length;
  const totalPlayerCost = perPlayerCost * playerQuantity;
  const totalCost = totalPlayerCost + managerCost + coachCost
  
  if(isNaN(managerCost) || managerCost <= 0 || isNaN(coachCost) || coachCost <= 0) {
    alert("Not valid number")
    return
  }
  else {
    const totalCostDisplay = document.getElementById("total");
    totalCostDisplay.innerText = totalCost;
  }
});