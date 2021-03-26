function copyPass(){
    var senha = document.getElementById("result").innerHTML
    if(senha !== '&nbsp;' || senha !== 'Escolha uma opção!'){
        var alerta = "Senha copiada!"
        navigator.clipboard.writeText(senha)
        document.getElementById("alerta").innerHTML = alerta
    }

}

function limpaAlerta(){
   setTimeout(function(){
       document.getElementById("alerta").innerHTML = ""
}, 3000) 
}


function sizeNumber(){
    var saida = document.getElementById('saida')
    var size = document.getElementById('sliderRange').value
    saida.innerHTML = size
    return size
}

function checkNumber(){      
      let checkLow = document.getElementById("lower")
      let checkUpp = document.getElementById("upper")
      let checkNum = document.getElementById("numeros")
      let checkSim = document.getElementById("simbolos")
      let typeN
        if(checkLow.checked && !checkUpp.checked && !checkNum.checked && !checkSim.checked){
            return typeN = 1
        }else if(!checkLow.checked && checkUpp.checked && !checkNum.checked && !checkSim.checked){
            return typeN = 2
        }else if(!checkLow.checked && !checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 3
        }else if(!checkLow.checked && !checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 4
        }else if(checkLow.checked && checkUpp.checked && !checkNum.checked && !checkSim.checked){
            return typeN = 5
        }else if(checkLow.checked && !checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 6
        }else if(checkLow.checked && !checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 7
        }else if(!checkLow.checked && checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 8
        }else if(!checkLow.checked && checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 9
        }else if(!checkLow.checked && !checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 10
        }else if(checkLow.checked && !checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 11
        }else if(!checkLow.checked && checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 12
        }else if(checkLow.checked && checkUpp.checked && checkNum.checked && !checkSim.checked){
            return typeN = 13
        }else if(checkLow.checked && checkUpp.checked && !checkNum.checked && checkSim.checked){
            return typeN = 14
        }else if(checkLow.checked && checkUpp.checked && checkNum.checked && checkSim.checked){
            return typeN = 15
        }else{
            return typeN = 0
        }
}

function mudarScoreBar(value){
    const progressbar = document.querySelector('.progress-bar-score');
    //const value = scoreTotal
    progressbar.style.setProperty('--progress', value)
    }

function passwordGenerator(size = 8, charchoice){
    document.getElementById("alerta").innerHTML = ""
    if(size < 8){
        size = 8
    }
        let mixletters = ''
        let stringpass = ''
        let lower = 'abcdefghijklmnopqrstuvwxyz'
        let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let simbols = '!@#$%&*()-_:;,.?[{}]^~+'
        let x = 1
        let m1
        let m2
        let m3
        let m4
        let m5
        let i = 0
//Params to choice chars
        switch(charchoice){
            case 1:
                mixletters = lower
                break
            case 2:
                mixletters = upper
                break
            case 3:
                mixletters = numbers
                break
            case 4:
                mixletters = simbols
                break
            case 5:
                mixletters = lower + upper
                break
            case 6:
                mixletters = lower + numbers
                break
            case 7:
                mixletters = lower + simbols
                break
            case 8:
                mixletters = upper + numbers
                break
            case 9:
                mixletters = upper + simbols
                break
            case 10:
                mixletters = numbers + simbols
                break
            case 11:
                mixletters = lower + numbers + simbols
                break
            case 12:
                mixletters = upper + numbers + simbols
                 break
            case 13:
                mixletters = lower + upper + numbers
                break
            case 14:
                mixletters = lower + upper + simbols
                break
            case 15:
                mixletters = upper + lower + numbers + simbols
                break
        }

//Function to ramdomize and get chars on string
        caract1 = (min = 0, max = mixletters.length) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = mixletters.charAt(n1)
        return n2
        }
//Conditional for create password based on size and chars choices
if(charchoice == 1 || charchoice == 2 || charchoice == 3 || charchoice == 4){
    while(x <= size){
        stringpass = stringpass + `${caract1()}` 
        x++
    }
}
    switch(charchoice){
        case 5: //Condicional para verificar se há pelo menos uma letra minúscula e pelo menos uma letra maiúscula
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}`
                    x++
                }
                while(i <= size){
                m1 = stringpass.charAt(i)
                m2 = lower.indexOf(m1)
                if(m2 !== -1){
                    break
                }
                i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1){
                    x = 1
                    i = 0
                    stringpass = ''
                }
            }while(m1 == '' || m2 == -1 || m3 == -1)
            break
        case 6: //Condicional para verificar se há pelo menos uma letra minúscula e pelo menos um número
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m4 = numbers.indexOf(m1)
                        if(m4 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m2 == -1 || m4 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m4 == -1)
            break
        case 7: //Condicional para verificar se há pelo menos uma letra minúscula e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m5 = simbols.indexOf(m1)
                        if(m5 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m2 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m5 == -1)
            break
        case 8: //Condicional para verificar se há pelo menos uma letra maiúscula e pelo menos um número
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m4 = numbers.indexOf(m1)
                        if(m4 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m3 == -1 || m4 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m3 == -1 || m4 == -1)
            break
        case 9: //Condicional para verificar se há pelo menos uma letra maiúscula e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m5 = simbols.indexOf(m1)
                        if(m5 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m3 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m3 == -1 || m5 == -1)
            break
        case 10: //Condicional para verificar se há pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                    }while(i <= stringpass.length){
                        m1 = stringpass.charAt(i)
                        m5 = simbols.indexOf(m1)
                        if(m5 !== -1){
                            break
                        }
                        i++
                        }if(m1 == '' || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m4 == -1 || m5 == -1)
            break
        case 11: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m4 == -1 || m5 == -1)
            break
        case 12: //Condicional para verificar se há pelo menos uma letra maiúscula, pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m3 == -1 || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m3 == -1 || m4 == -1 || m5 == -1)
            break
        case 13: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos uma letra maiúscula e pelo menos um número
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1)
            break
        case 14: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos uma letra maiúscula e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m3 == -1 || m5 == -1)
            break
        case 15: //Condicional para verificar se há pelo menos uma letra minúscula, pelo menos uma letra maiúscula, pelo menos um número e pelo menos um símbolo
            do{
                while(x <= size){
                    stringpass = stringpass + `${caract1()}` 
                    x++
                }
                while(i <= size){
                    m1 = stringpass.charAt(i)
                    m2 = lower.indexOf(m1)
                    if(m2 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m3 = upper.indexOf(m1)
                    if(m3 !== -1){
                        break
                    }
                    i++
                }while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m4 = numbers.indexOf(m1)
                    if(m4 !== -1){
                        break
                    }
                    i++
                    }
                while(i <= stringpass.length){
                    m1 = stringpass.charAt(i)
                    m5 = simbols.indexOf(m1)
                    if(m5 !== -1){
                        break
                    }
                    i++
                    }if(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1 || m5 == -1){
                        x = 1
                        i = 0
                        stringpass = ''
                    }
                }while(m1 == '' || m2 == -1 || m3 == -1 || m4 == -1 || m5 == -1)
            break

    }

document.getElementById("result").innerHTML = stringpass
//return stringpass
//console.log(stringpass)
}

function forcaSenha(){

    var senha = document.getElementById("result").innerHTML
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    let simbols = '!@#$%&*()-_:;,.?[{}]^~+'
    let NumSim = numbers + simbols
    let mixletters = upper + lower
    var i = 0
    var x = 1
    var scoreTotal = 0
    var scoreCaract = 0
    var scoreMinuscula = 0
    var scoreMaiuscula = 0
    var scoreNumero = 0
    var scoreSimbolo = 0
    var scoreNumSim = 0
    var scoreReq = 0 
    var scoreSomLet = 0
    var scoreSomNum = 0
    var scoreCaratRep = 0
    var scoreUppConsec = 0
    var scoreLowConsec = 0
    var scoreNumConsec = 0
    var scoreLowConsec3 = 0
    var scoreUppConsec3 = 0
    var scoreNumConsec3 = 0
    var scoreSimConsec3 = 0
    var contMinuscula = 0
    var contMaiuscula = 0
    var contNumero = 0
    var contSimbolo = 0
    var contNumSim = 0
    var contSomLet = 0
    var contSomNum = 0
    var contReq = 0
    var caractRep = 0
    var upperSeq = 0
    var lowerSeq = 0
    var numSeq = 0
    var lowerseq3 = 0
    var upperseq3 = 0
    var numberseq3 = 0
    var simbolseq3 = 0
    var m1
    var m2
    var m3
    var a2
    var a3
    var a4
    var a5
    var a6
    var d1
    var d2
    var c1
    var c2
    var c3
    
//ADIÇÕES

    scoreCaract = senha.length * 4

    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        a2 = lower.indexOf(m1)
            if(a2 !== -1){
                contMinuscula = contMinuscula + 1
            }
        a3 = upper.indexOf(m1)
            if(a3 !== -1){
                contMaiuscula = contMaiuscula + 1
            }
        a4 = numbers.indexOf(m1)
            if(a4 !== -1){
                contNumero = contNumero + 1
            }
        a5 = simbols.indexOf(m1)
            if(a5 !== -1){
                contSimbolo = contSimbolo + 1
            }
        i++
    }

    i = 1
    while(i <= senha.length - 2){ //Checar numeros e simbolos no meio da senha
        m1 = senha.charAt(i)
        a6 = NumSim.indexOf(m1)
            if(a6 !== -1){
                contNumSim = contNumSim + 1
            }
    i++
    }
//REQUERIMENTOS
    if(senha.length >= 8){
        contReq = contReq + 1
    }if(contMaiuscula !== 0){
        contReq = contReq + 1
    }if(contMinuscula !== 0){
        contReq = contReq + 1
    }if(contNumero !== 0){
        contReq = contReq + 1
    }if(contSimbolo !== 0){
        contReq = contReq + 1
    }

    

//DEDUÇÕES

    i = 0 //Verificação somente letras
    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        d1 = mixletters.indexOf(m1)
            if(d1 == -1){
                contSomLet = 0
                i = 0
                break
            }else{
                contSomLet = contSomLet + 1
            }
        i++
    }

    i = 0 //Verificação somente números
    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        d2 = numbers.indexOf(m1)
            if(d2 == -1){
                contSomNum = 0
                i = 0
                break
            }else{
                contSomNum = contSomNum + 1
            }
        i++
    }

    i = 0 //Verificação caracteres repetidos
    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        x = 1
        x = x + i
        while(x <= senha.length - 1){
            c1 = senha.charAt(x)
            if(m1 == c1){
                caractRep = caractRep + 2
            }
            x++
        }
        i++
    }

    i = 0 //Verificação maiúsculas consecutivas
    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        c1 = upper.indexOf(m1)
        m2 = senha.charAt(i+1)
        c2 = upper.indexOf(m2)
            if(c1 == -1 || c2 == -1 || m2 == ''){
                i++
                continue
            }else{
                upperSeq = upperSeq + 1
                i++
            }
    }

    i = 0 //Verificação minusculas consecutivas
    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        c1 = lower.indexOf(m1)
        m2 = senha.charAt(i+1)
        c2 = lower.indexOf(m2)
            if(c1 == -1 || c2 == -1 || m2 == ''){
                i++
                continue
            }else{
                lowerSeq = lowerSeq + 1
                i++
            }
    }

    i = 0 //Verificação números consecutivos
    while(i <= senha.length - 1){
        m1 = senha.charAt(i)
        c1 = numbers.indexOf(m1)
        m2 = senha.charAt(i+1)
        c2 = numbers.indexOf(m2)
            if(c1 == -1 || c2 == -1 || m2 == ''){
                i++
                continue
            }else{
                numSeq = numSeq + 1
                i++
            }
    }

    i = 0 //Verificação sequencia de letras minusculas(3+)
    while(i <= senha.length -1){
        m1 = senha.charAt(i)
        m2 = senha.charAt(i + 1)
        m3 = senha.charAt(i + 2)
        c1 = lower.indexOf(m1)
        c2 = lower.indexOf(m2)
        c3 = lower.indexOf(m3)
            if(c1 !== -1 && c2 == c1 + 1 && c3 == c1 + 2){
                lowerseq3 = lowerseq3 + 1
            }
        i++
    }

    i = 0 //Verificação sequencia de letras maiusculas(3+)
    while(i <= senha.length -1){
        m1 = senha.charAt(i)
        m2 = senha.charAt(i + 1)
        m3 = senha.charAt(i + 2)
        c1 = upper.indexOf(m1)
        c2 = upper.indexOf(m2)
        c3 = upper.indexOf(m3)
            if(c1 !== -1 && c2 == c1 + 1 && c3 == c1 + 2){
                upperseq3 = upperseq3 + 1
            }
        i++
    }

    i = 0 //Verificação sequencia de numeros(3+)
    while(i <= senha.length -1){
        m1 = senha.charAt(i)
        m2 = senha.charAt(i + 1)
        m3 = senha.charAt(i + 2)
        c1 = numbers.indexOf(m1)
        c2 = numbers.indexOf(m2)
        c3 = numbers.indexOf(m3)
            if(c1 !== -1 && c2 == c1 + 1 && c3 == c1 + 2){
                numberseq3 = numberseq3 + 1
            }
        i++
    }

    i = 0 //Verificação sequencia de simbolos(3+)
    while(i <= senha.length -1){
        m1 = senha.charAt(i)
        m2 = senha.charAt(i + 1)
        m3 = senha.charAt(i + 2)
        c1 = simbols.indexOf(m1)
        c2 = simbols.indexOf(m2)
        c3 = simbols.indexOf(m3)
            if(c1 !== -1 && c2 == c1 + 1 && c3 == c1 + 2){
                simbolseq3 = simbolseq3 + 1
            }
        i++
    }



//CÁLCULO DA PONTUAÇÃO


        if(contMinuscula !== 0){
            scoreMinuscula = (senha.length - contMinuscula) * 2
        }
        if(contMaiuscula !== 0){
            scoreMaiuscula = (senha.length - contMaiuscula) * 2
        }
        if(contNumero !== 0){
            scoreNumero = contNumero * 4
        }
        if(contSimbolo !== 0){
            scoreSimbolo = contSimbolo * 6
        }
        if(contNumSim !== 0){
            scoreNumSim = contNumSim * 2
        }
        if(contReq >= 4){
            scoreReq = contReq * 2
        }
        if(contSomLet !== 0){
            scoreSomLet = contSomLet
        }
        if(contSomNum !== 0){
            scoreSomNum = contSomNum
        }
        if(caractRep !== 0){
            scoreCaratRep = caractRep*(caractRep-1)
        }
        if(upperSeq !== 0){
            scoreUppConsec = upperSeq * 2
        }
        if(lowerSeq !== 0){
            scoreLowConsec = lowerSeq * 2
        }
        if(numSeq !== 0){
            scoreNumConsec = numSeq * 2
        }
        if(lowerseq3 !== 0){
            scoreLowConsec3 = lowerseq3 * 3
        }
        if(upperseq3 !== 0){
            scoreUppConsec3 = upperseq3 * 3
        }
        if(numberseq3 !== 0){
            scoreUppConsec3 = numberseq3 * 3
        }
        if(simbolseq3 !== 0){
            scoreSimConsec3 = simbolseq3 * 3
        }

    scoreTotal = (scoreCaract + scoreMinuscula + scoreMaiuscula + scoreNumero + scoreSimbolo + scoreNumSim + scoreReq) - 
                 (scoreSomLet + scoreSomNum + scoreCaratRep + scoreUppConsec + scoreLowConsec + scoreNumConsec + scoreLowConsec3 + 
                    scoreUppConsec3 + scoreUppConsec3 + scoreSimConsec3)

    if(scoreTotal < 0){
        scoreTotal = 0
    }else if(scoreTotal > 100){
        scoreTotal = 100
    }
    //console.log(scoreTotal)
    if(senha !== ''){
        document.getElementById("score").innerHTML = `Força: ${scoreTotal}%` 
    }

    
    
        mudarScoreBar(scoreTotal)
       

}

function botaoGerar(){
    if(checkNumber() == 0){
        document.getElementById('result').innerHTML = 'Escolha uma opção!'
        document.getElementById('score').innerHTML = '&nbsp;'
        //document.getElementById('result').innerHTML = ''
        mudarScoreBar(0)
    }else{
        passwordGenerator(sizeNumber(), checkNumber())
        forcaSenha()
    }
}