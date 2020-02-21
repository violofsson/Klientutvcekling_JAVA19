function greet(name) {
    if (name == null || name == undefined) name = "";
    return "Hej, " + name + ". Varmt välkommen!"
}

let name = prompt("Ange namn:");
let out = document.getElementsByTagName("body");
out[0].textContent = greet(name);