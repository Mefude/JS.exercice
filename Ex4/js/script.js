

let prenom = prompt("Entrez votre prénom");
let sexe = confirm ("Etes-vous un homme ?");

if(sexe == true) {
    sexe = "Mr"
}

else {
    sexe = "Md"
}

document.getElementById("welcome").innerHTML = 
"Bonjour" + " " + sexe + " " + prenom + "! Comment allez-vous ?";
