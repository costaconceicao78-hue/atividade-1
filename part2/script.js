function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            // Bom Dia!
            img.src='/part2/img/dia.png'
        } else if (hora >= 12 && hora <= 18){
            //Boa tarde!
            img.src='/part2/img/tarde.png'
        } else{
            //Boa Noite!
            img.src='/part2/img/noite.png'
        }

}
