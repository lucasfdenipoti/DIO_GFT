// Definindo uma classe
class Guitarra {
    // O método constructor é chamado quando criamos uma nova instância da classe
    constructor(marca, modelo, ano) {
        this.marca = marca; // Atributo 'marca' do objeto
        this.modelo = modelo; // Atributo 'modelo' do objeto
        this.ano = ano; // Atributo 'ano' do objeto
    }

    // Método que retorna uma string com a descrição da guitarra
    descricao() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
}

// Criando um novo objeto 'myGuitar' a partir da classe 'Guitarra'
//let myGuitar = new Guitarra("Telecaster", "Fender", 1989);
//let myGuitar = new Guitarra("Super Strato", "Ibanez", 1998);
let myGuitar = new Guitarra("Les Paul", "Gibson", 2002);
//let myGuitar = new Guitarra("Schecter", "Synyster", 2012);

// Chamando o método 'descricao' do objeto 'myGuitar'
console.log(myGuitar.descricao());
