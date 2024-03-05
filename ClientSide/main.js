function greeting() {
    window.alert("Good morning!")
    document.getElementById("greeting").innerText = "Oh, and if I don't see ya"
    console.log("Good afternoon, good evening and good night")
}
const actor = {
    firstName: "Jim",
    lastName: "Carey",
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

function changeText() {
    let paragraph = document.getElementById("new-paragraph")

    if (paragraph) {
        paragraph.remove()
    } else {
        paragraph = document.createElement("p")
        paragraph.id = "new-paragraph"
        let textNode = document.createTextNode(actor.getFullName())
        paragraph.appendChild(textNode)
        document.getElementById("title-container").appendChild(paragraph)
    }
}
console.log(actor.getFullName());