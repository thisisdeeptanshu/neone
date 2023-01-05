import data from "../data.json" assert { type: 'json' };

let matchTypes = [];
data["match-types"].forEach(element => {
    matchTypes.push(element);
});
matchTypes.forEach(mt => {
    // Creating the tile and the container
    let cDiv = document.createElement("div");
    cDiv.style.display = "flex";
    cDiv.style.justifyContent = "center";
    let h1 = document.createElement("h1");
    h1.innerText = mt;
    h1.setAttribute("class", "underline");
    cDiv.appendChild(h1);
    document.getElementById("all-matches").appendChild(cDiv);
    let div = document.createElement("div");
    div.setAttribute("id", mt);
    div.setAttribute("class", "matchbox");
    document.getElementById("all-matches").appendChild(div);

    // Adding buttons to the container
    let matchCount = data[mt]["total-matches"];
    for (let i = 1; i < matchCount + 1; i++) {
        let button = document.createElement("button");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "button__inner");
        let span2 = document.createElement("span");
        span2.setAttribute("class", data[mt][`match-${i}`].result.split("-")[0] > data[mt][`match-${i}`].result.split("-")[1] ? "button__slide2" : "button__slide");
        let span3 = document.createElement("span");
        span3.setAttribute("class", "button__content");
        span3.innerText = "Match " + i;
        span1.appendChild(span2);
        span1.appendChild(span3);
        button.appendChild(span1);
        button.onclick = function() {location.href = `/matches/${mt}/match-${i}`}
        document.getElementById(mt).appendChild(button);
    }
    // Adding fancy lines
    let div1 = document.createElement("div");
    div1.setAttribute("class", "line-container");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "lines");
    let div3 = document.createElement("div");
    div3.setAttribute("class", "diamond");
    div2.appendChild(div3);
    div1.appendChild(div2);
    document.getElementById("all-matches").appendChild(div1);
});