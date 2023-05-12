

export function notANumber(value){
    return isNaN(value) || value == ""
/*
isNaN, se tiver numero é falso se não tiver numero ou tiver
letras é verdadeiro "isNaN - Não é um número"
|| - ou 
Se o valor for vazio (o isNaN caso tenha um valor vazio ele vai achar que é um número,nn sei pq kkk 
ent coloquei pra se caso for vario ele também retornar)
*/

}

//cálculo
export function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }

