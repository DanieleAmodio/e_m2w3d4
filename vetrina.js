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
    sfondo=document.body.style.backgroundColor = "white";
    
    
}