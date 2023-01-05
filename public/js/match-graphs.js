import data from "../data.json" assert { type: 'json' };

let url = window.location.href.split("/");
let matchesLocation = url.indexOf("match-type-graphs");
let matchType = url[matchesLocation + 1].replace("%20", " ");

let requiredData = data[matchType];

// Adding the dates
let p = document.createElement("p");
p.innerText = requiredData["match-1"].date + " - " + requiredData[`match-${requiredData["total-matches"]}`].date;
p.onclick = function() {window.location.href="/"}
document.getElementById("date").appendChild(p);

// Creating h1 with text
let h1 = document.createElement("h1");
h1.innerText = matchType;
h1.setAttribute("class", "underline");
h1.onclick = function() {chart.export()}
document.getElementById("container").appendChild(h1);

let kills = [];
let deaths = [];
let assists = [];
let avgcombatscore = [];
let econrating = [];
let killsperround = [];
let damagepersecond = [];
let labels = [];
for (let i = 1; i < requiredData["total-matches"] + 1; i++) {
    let all = requiredData["match-" + i]["K-D-A"];
    kills.push(all[0]);
    deaths.push(all[1]);
    assists.push(all[2]);
    avgcombatscore.push(requiredData["match-" + i]["avg-combat-score"]);
    econrating.push(requiredData["match-" + i]["econ-rating"]);
    killsperround.push(requiredData["match-" + i]["kills-per-round"]);
    damagepersecond.push(requiredData["match-" + i]["damage-per-round"]);
    labels.push(`Match ${i}`);
    console.log(killsperround);
}

let values = {
    "Kills": kills,
    "Deaths": deaths,
    "Assists": assists,
    "Avg. Combat Score": avgcombatscore,
    "Econ Rating": econrating,
    "Kills per Round": killsperround,
    "Damage per Second": damagepersecond
}

function createData() {
    let datasets = [];
    let allValues = [];
    for (let i = 1; i < 7 + 1; i++) {
        let element = document.getElementById(i);
        if (element.checked) {
            datasets.push({
                name: element.parentElement.innerText, chartType: "line",
                values: values[element.parentElement.innerText]
            });
            if (element.parentElement.innerText != "Avg. Combat Score")
                allValues.push(element.parentElement.innerText);
            else
                allValues.push("Average Combat Score");
        }
    }

    let a = {
        data: {
            labels: labels,
            
            datasets: datasets},
            
        title: allValues.join(", "),
        type: 'line', // or 'bar', 'line', 'pie', 'percentage'
        height: window.innerHeight - 200 < window.innerWidth ? window.innerHeight - 200 : window.innerWidth,
        colors: ['B196FF', '#E7CBF5', '#FFA3EF', '#E88990', '#FFAC96', '#B0BCF5', '#FFA3EF'],
    }
    return a;
}

// Creating the graph
let chart = new frappe.Chart( "#frost-chart", // or DOM element
    createData()
);

let checkboxes = document.getElementsByTagName("input");
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", () => {
        chart = new frappe.Chart( "#frost-chart", // or DOM element
            createData()
        );
    });
}

// chart.export();