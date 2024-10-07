let titulo = document.getElementById('titulo')
let fundo = document.getElementsByTagName("body")

titulo.innerText="testandoooo"
titulo.innerHTML='<strong>testeeee</strong>'

titulo.style.color='blue'
titulo.style.fontSize='3em';



let botao = document.querySelector('button')

botao.addEventListener('click', function() {
    alert("O botão foi clicado")
})

// Criando um novo elemento <p> e adicionando ao corpo da página
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Este é um novo parágrafo!';
document.body.appendChild(novoParagrafo);

// Removendo um elemento
novoParagrafo.remove();
