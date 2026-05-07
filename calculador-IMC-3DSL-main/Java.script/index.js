let peso = document.getElementById('peso')
let altura = document.getElementById ('altura')
let resultado 
let botao = document.getElementById ('botao')

let classiicaçao = " ";

botao.onclick = () => {
let imc = Number(peso) / Number (altura.valoe*altura.valoe)
if(imc < 18.5) {
    classiicaçao = "baixo peso" 
}else if ((imc > 18.5)&&(imc <= 24.9)){
    classiicaçao = "peso normal"
}else if ((imc > 25.0)&&(imc <= 29.9)){
        classiicaçao = "sobre peso"
}else if ((imc > 30.0)&&(imc <= 34.9)){
            classiicaçao = "obesidade 1"
}else if ((imc > 35.0)&&(imc <= 39.9)){
        classiicaçao = "obesidade 2"
}else {
    classiicaçao = "obesidade 3"
}
resultado.innerText = 'Seu IMC é ${imc} \n Classificação ${classificacao}' 
}