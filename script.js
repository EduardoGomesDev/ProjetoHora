function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //bom dia
       img.src = 'manha.png'
       document.body.style.background = '#e7c0a1'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#f26e05'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#342a45'
    }
}