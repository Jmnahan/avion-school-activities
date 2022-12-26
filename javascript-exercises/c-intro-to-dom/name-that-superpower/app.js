var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

const league = document.querySelector("#league");
const superpower = document.createElement("span");

for (let i = 0; i <justiceLeague.length; i++) {
    let leagueList = document.createElement("li")
    const powerBtn = document.createElement("button")
    powerBtn.innerHTML += ` ${justiceLeague[i].name}`
    leagueList.appendChild(powerBtn)
    league.appendChild(leagueList)  
    powerBtn.addEventListener("click", () => {
        leagueList.innerHTML += ` Power: ${justiceLeague[i].superpower}`
    })
}