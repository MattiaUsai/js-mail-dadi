
// --CHIEDERE ALL'UTENTE LA SUA EMAIL
// --CREARE UNA LISTA DI MAIL ָSALVARLE IN UN ARRAY
// --CREARE UN CICLO CHE CONFRONTI LA MAIL DELL'UTENTE CON LE EMAIL SALVATE; 
// --SE VIENָTROVATO IL RISULTATO SCRIVERE EMAIL CORRETTA ALTRIMENTI SCRIVERE EMAIL SBAGLIATA
// "marco@gmail.com", "paolo@gmail.com", "stefano@gmail.com", "cristian@gmail.com", "mattia@gmail.com"


let userEmail = prompt("email");

// CHIEDO ALL'UTENTE UNA MAIL
let loggedEmail = ["marco@gmail.com", "paolo@gmail.com", "stefano@gmail.com", "cristian@gmail.com", "mattia@gmail.com"];
// CREO UN' ARRAY CON LE EMAIL REGISTRATE

for (let i = 0; i <=loggedEmail.length-1  ; i++){

    
    if (loggedEmail[i] === userEmail){
       console.log ("la mail e corretta");
    } 
}