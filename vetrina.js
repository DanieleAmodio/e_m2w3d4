function cambioTitolo(){
    let titolo = document.querySelector("h1").textContent
    console.log(titolo)
    if(titolo==="Daniel's Phone"){
        document.querySelector("h1").textContent="Acquista il tuo SmartPhone dei sogni!"
    }else {
        document.querySelector("h1").textContent="Daniel's Phone"
    }
    
}
function cambiaSfondo(){
     document.querySelector('body').style.backgroundColor="white"
}
function sfondoBase(){
    document.querySelector('body').style.backgroundColor="#20b2aa4a"
}


function cambioIndirizzo() {
    let indirizzo=document.querySelector("footer p " ).textContent
    console.log(indirizzo)
    if(indirizzo==="Via Luca Grato 55c Bolzano"){
        document.querySelector("footer p " ).textContent="Via Libero Grassi n 50 Napoli"
    }else {
        document.querySelector("footer p " ).textContent="Via Luca Grato 55c Bolzano"
    }
}

function evidenzia(){
    let conteiner=document.querySelectorAll('a')
    console.log(conteiner)
    for(let link of conteiner) {
     link.classList.add('colora')
    }
}
function togliImg(valore){
     let immagine= document.querySelectorAll('img')
     console.log(immagine)
     for(let pics of immagine) {
        pics.classList.add('elimina')
     }
}

function cambioColore() {
    let prezzi= document.getElementById('prezzo_i')
    
    prezzi.style.color= "rgb (" + numeriRandom() + ")"
}
function numeriRandom() {
    let x0= Math.random()*255+1
    let x1= Math.random()*255+1
    let x2= Math.random()*255+1
    let numeroTotale=`${x0},${x1},$${x2}`
    return numeroTotale;
}