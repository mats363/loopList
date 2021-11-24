const root = document.getElementById("root");

const header = document.createElement("header");
const section = document.createElement("section");
const list = document.createElement("ul");
root.append(header);
root.append(section);
root.append(list);

funThings = ["Vara med Jenna", "Dricka öl", "Spela FIFA", "Köra bil", "Åka bil"];

header.insertAdjacentHTML("afterbegin", "<h1>Loopa listor</h1>");
section.innerHTML = "<p>Testar att loopa genom en lista</p>";


for (let i = 0; i < funThings.length; i++ ) {

    list.insertAdjacentHTML("beforebegin", "<li>" + funThings[i] + "</li>");
    console.log(funThings[i]);
}

