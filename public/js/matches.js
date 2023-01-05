import data from "../data.json" assert { type: 'json' };

let url = window.location.href.split("/")
let matchesLocation = url.indexOf("matches");
let matchType = url[matchesLocation + 1].replace("%20", " ");
let matchNumber = url[matchesLocation + 2];

let requiredData = data[matchType][matchNumber];

// Adding the date
let p = document.createElement("p");
p.innerText = requiredData.date;
p.onclick = function() {window.location.href="/"}
document.getElementById("date").appendChild(p);

// Creating h1 with text
let h1 = document.createElement("h1");
h1.innerText = matchType + ": Match " + matchNumber.split("-")[1];
document.getElementById("container").appendChild(h1);

//------------- Adding match details
// Score
h1 = document.createElement("h1");
h1.innerText = requiredData.result;
h1.style.color = requiredData.result.split("-")[0] > requiredData.result.split("-")[1] ? "#0fa88e" : "#ff4655";
h1.style.fontSize = "3em";
document.getElementById("container").appendChild(h1);

// Tables :D
let kdas = []
kdas.push(...requiredData["max-K-D-A"])
kdas.push(...requiredData["K-D-A"])
for (let i = 1; i < 6 + 1; i++) document.getElementById(i).innerText = kdas[i - 1];

// Combat Score and Econ Rating
h1 = document.createElement("h2");
h1.innerText = "Avg. Combat Score:\u00A0";
h1.style.fontSize = "3em";
document.getElementById("container2").appendChild(h1);
h1 = document.createElement("h2");
h1.innerText = requiredData["avg-combat-score"];
h1.style.color = "#FFB538"; // FFD21F
h1.style.fontSize = "3em";
document.getElementById("container2").appendChild(h1);

h1 = document.createElement("h2");
h1.innerText = "Econ Rating:\u00A0";
h1.style.fontSize = "3em";
h1.style.paddingLeft = "100px";
document.getElementById("container2").appendChild(h1);
h1 = document.createElement("h2");
h1.innerText = requiredData["econ-rating"];
h1.style.color = "#FFB538"; // FFD21F
h1.style.fontSize = "3em";
document.getElementById("container2").appendChild(h1);

// Kills Per Round & Damage Per Round
h1 = document.createElement("h2");
h1.innerText = "Kills per Round:\u00A0";
h1.style.fontSize = "3em";
h1.style.marginTop = "0px";
document.getElementById("container3").appendChild(h1);
h1 = document.createElement("h2");
h1.innerText = requiredData["kills-per-round"];
h1.style.color = "#FFB538"; // FFD21F
h1.style.fontSize = "3em";
h1.style.marginTop = "0px";
document.getElementById("container3").appendChild(h1);

h1 = document.createElement("h2");
h1.innerText = "Damage per Round:\u00A0";
h1.style.fontSize = "3em";
h1.style.paddingLeft = "100px";
h1.style.marginTop = "0px";
document.getElementById("container3").appendChild(h1);
h1 = document.createElement("h2");
h1.innerText = requiredData["damage-per-round"];
h1.style.color = "#FFB538"; // FFD21F
h1.style.fontSize = "3em";
h1.style.marginTop = "0px";
document.getElementById("container3").appendChild(h1);