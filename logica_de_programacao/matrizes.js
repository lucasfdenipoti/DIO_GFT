let inventario = ["Martelo de Guerra", "Pocoes de Cura", "Couraça de Paladino"] //lista itens em um vetor
let itemAtributes = [
["Martelo de Guerra", "Arma", 18, "Dano"],
["Pocoes de Cura", "Consumível", 9, "Cura"],
["Couraça de Paladino", "Armadura", 30, "Defesa"]
]

console.log("O item " + itemAtributes[0][0] + " é do tipo " + itemAtributes[0][1] + ", e proporciona " + itemAtributes[0][2] + " de " + itemAtributes[0][3])
console.log("O item " + itemAtributes[1][0] + " é do tipo " + itemAtributes[1][1] + ", e proporciona " + itemAtributes[1][2] + " de " + itemAtributes[1][3])
console.log("O item " + itemAtributes[2][0] + " é do tipo " + itemAtributes[2][1] + ", e proporciona " + itemAtributes[2][2] + " de " + itemAtributes[2][3])

console.log(itemAtributes.length)