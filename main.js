//Consegna
//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// seleziono gli elementi del DOM

const lampEl = document.getElementById("lamp")
const btnEl = document.getElementById("btn")








btnEl.addEventListener("click",  () => {
    
if(btnEl.textContent.includes('spegni')){
    btn.innerHTML = 'accendi'
    lamp.src="./img/white_lamp.png"
}else{
    btnEl.innerHTML = 'spegni'
    lamp.src="./img/yellow_lamp.png"
}
     
})








