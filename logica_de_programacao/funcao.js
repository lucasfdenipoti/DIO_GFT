// Declaração da função
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo!`;
  }
  
  // Chamando a função
  let mensagem = saudacao('Lucas');
  console.log(mensagem);  

  // Função com parâmetros
function calcularAreaRetangulo(largura, altura) {
    return largura * altura; // Calcular área do retângulo
  }
  
  // Função com retorno
  function verificarMaiorIdade(idade) {   
    if (idade >= 18) {  // Verificar se é maior de idade
      return true;
    } else {
      return false;
    }
  }
  
  // Usando as funções
  let area = calcularAreaRetangulo(5, 8);
  console.log(`Área do retângulo: ${area}`);  // Saída da área do retângulo
  
  let maiorIdade = verificarMaiorIdade(10);
  if (maiorIdade) {
    console.log('Você é maior de idade.');  // Saída maior de idade
  } else {
    console.log('Você não é maior de idade.');  // Saída menor de idade
  }