import data from "../data.json" assert { type: 'json' };

let agents = {
    "Brimstone": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png",
    "Phoenix": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png",
    "Sage": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png",
    "Sova": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png",
    "Viper": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png",
    "Cypher": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png",
    "Reyna": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png",
    "Killjoy": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png",
    "Breach": "../../Breach_Artwork_Full.png",
    "Omen": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png",
    "Jett": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png",
    "Raze": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png",
    "Skye": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png",
    "Yoru": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png",
    "Astra": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png",
    "KAY/O": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png",
    "Chamber": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png",
    "Neon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png",
    "Fade": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png",
    "Harbor": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81e8a3e8c7beeaf3/634894a15e281916980f655b/Harbor_KeyArt-web.png"
}

let url = window.location.href.split("/")
let matchesLocation = url.indexOf("matches");
let matchType = url[matchesLocation + 1].replace("%20", " ");
let matchNumber = url[matchesLocation + 2];

let requiredData = data[matchType][matchNumber];

document.body.style.backgroundImage = `url("${agents[requiredData["played-as"]]}")`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPositionY = "center";
document.body.style.backgroundPositionX = "right";

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