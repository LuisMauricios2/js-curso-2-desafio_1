// usando a variavel titulo para armazenar o comando document.querySelector ('h1'); para selecionar o h1 do documento HTML e usar o comando titulo.innerHTML para escrever nele.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// verifica se o botão foi clicado exibindo msg no console
function verificarConsole() {
    console.log ('O botao foi clicado');
}
// lança um alert quando o botão alerta é clicado
function alerta() {
    alert('eu amo JS');
}
// pergunta uma cidade e da alert baseado na cidade
function perguntando() {
    let cidade = prompt('diga o nome de uma cidade do Brasil:');
    alert(`estive em ${cidade} e lembrei de você.`);
}
// pergunta 2 numeros e os armazena nas respectivas variaveis e depois lança alerta com ambos os numeros e sua soma
function soma() {
    let n1 = Number(prompt('diga um numero:'));
    let n2 = Number(prompt('diga outro numero:'));
    let total = n1 + n2;
    alert(`a soma entre ${n1} e ${n2} é igual a ${total}`);
}



/*Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.*/