function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    
        if (fano.value.length== 0 ||Number(fano.value)>ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
            
            
        } else{
            var fsex= document.getElementsByName('radsex') 
            var idade= ano-Number(fano.value)
            var género =''
            var img =document.createElement('img')
            img.setAttribute('id','foto')
            
            
            
            if (fsex[0].checked) {
            género ='Homem'
            if(idade >= 0&& idade < 10){
                // Criança
                img.setAttribute ('src','img/menino.jpg')
            
        } else if(idade < 21){
            //Jovem
            img.setAttribute ('src','img/homem jovem.jpg')
        }else if(idade<50){
            // adulto
            img.setAttribute ('src','img/homem adulto.jpg')
        }else{
            //idoso
            img.setAttribute ('src','img/homem idoso.jpg')
            
        }
    }else if(fsex[1].checked){
        género ='mulher'
        if(idade>=0 && idade < 10){
            //criança
            img.setAttribute('src','img/menina.jpg')
        }else if (idade<21){
            //jovem
            img.setAttribute('src','img/mulher jovem.jpg')
        }else if(idade< 50){
            //Adulto
            img.setAttribute('src','img/mulher adulta.jpg')
        }else{
            // idoso
            img.setAttribute('src','img/mulher idosa.jpg')
        }
    }
}
    res.computedStyleMap.textAlign ='center'
    res.innerHTML =`detectamos ${género}com ${idade}anos`
    res.appendChild(img)
            


}
