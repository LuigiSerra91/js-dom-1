//Consegna
//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// seleziono gli elementi del DOM

const lampEl = document.getElementById("lampadina")
const btnEl = document.getElementById("button")








btn.addEventListener("click", () => {
if(btn === 'spegni'){
    btn.innerHTML = ''
    lamp.src="./img/white_lamp.png"
}else{
    btn.innerHTML = 'Spegni'
    lamp.src="./img/yellow_lamp.png"
}
     
})





