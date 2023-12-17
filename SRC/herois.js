let heroi = "gericó"
let xp = 9987
let nivel_heroi
switch (true){
case xp < 1000:
nivel_heroi = "Ferro"
break
case xp >= 1001 && xp <= 2000:
    nivel_heroi ="Bronze"
break
case xp > 2001 && xp <=6000:
    nivel_heroi ="Prata"
break
case xp > 6001 && xp <=7000:
    nivel_heroi ="Ouro"
break
case xp > 7001 && xp <=8000:
    nivel_heroi ="Platina"
break
case xp > 8001 && xp <=9000:
    nivel_heroi ="Ascendente"
break
case xp > 9001 && xp <=10000:
    nivel_heroi ="Imortal"
break
case xp > 10001:
    nivel_heroi ="Radiante"
break
}

console.log("O Herói de nome " + heroi + " está no nível de "+ nivel_heroi)