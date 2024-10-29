// informações sobre o comprador e produtos
let invoice = {
    name: "Lucas",
    age: 22,
    products: {
        0: ["Guitarra Les Paul Clark", 1399.90],
        1: ["Conjunto de cabos Ivory", 79.90],
        2: ["Amplificador Evidence 2000", 689.90],

    },
    taxes: 59.90 
}

generateInvoice(invoice)    // Função para gerar a fatura com base no invoice

function generateInvoice(invoice){
    console.log(`O comprador é: ${invoice.name}`)   // Imprime o nome do comprador
    console.log(`O comprador é: ${invoice.age}`)    // Imprime idade do comprador
    console.log("---------------------------")
    console.log('Os produtos são:')
    for(let index in invoice.products){ // Percorre os produtos e imprime os detalhes de cada um
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$${productPrice}0`)
    }
    console.log(`A taxa é: R$${invoice.taxes}0`)    // Imprime as taxas adicionais
}