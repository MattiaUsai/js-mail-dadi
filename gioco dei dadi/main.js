// --al cliccare del bottonָָe gioca il computer dovra[
//     --generare un numero random per il computer da uno a sei
//     e scriverlo in pagina
//     --generare un numero random per il giocatore da uno a sei
//     e scriverlo in pagina
//     --se il numero del computer è maggiore del numero giocatore vince il computer,
//     scrivere in paginà hai perso
//     altrimenti se il numero del giocatore e piu grande di quello del computer vince il giocatore,
//     scrivere in pagina hai vinto 
//     altrimenti se il numero del giocatore ָquello del computer sono uguali uscira parita.
//     scrivere in pagina parità
//     ]
    



const btnGame = document.getElementById ("btnGame");
btnGame.addEventListener('click', function(){
    console.log("ho cliccato il botone")
    const numberGenerateComputer = Math.round(Math.random() * 6)
    const numberGenerateUser = Math.round(Math.random() * 6)


    const computerNumber = document.getElementById ("numberComputer");
    computerNumber.innerHTML = ("");
    computerNumber.innerHTML = (numberGenerateComputer);

    const computerUser = document.getElementById ("numberUser");
    computerUser.innerHTML =("");
    computerUser.innerHTML =(numberGenerateUser);


    if (numberGenerateComputer>numberGenerateUser){
        const result = document.getElementById ("result");
        result.innerHTML =("");
        result.innerHTML =("hai perso");
        result.className = "  text-center  text-uppercase fs-1 fw-bold  my-5 text-bg-danger"
        
    }
    else if (numberGenerateComputer<numberGenerateUser){
        const result = document.getElementById ("result");
        result.innerHTML =("");
        result.innerHTML =("hai vinto");
        result.className = "  text-center  text-uppercase fs-1 fw-bold  my-5 text-bg-success"

    }
    else  {
        const result = document.getElementById ("result");
        result.innerHTML =("");
        result.innerHTML =("pareggio");
        result.className =  "  text-center  text-uppercase fs-1 fw-bold  my-5 text-bg-warning"
    }
    



})