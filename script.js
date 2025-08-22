
 // Função para mostrar um alerta simples
        function mostrarAlert() {
          window.alert("Olá, seja bem-vindo ao meu dicionário de Java script!"); // Exibe um alerta com uma mensagem
        }
        // Função para mostrar uma caixa de confirmação
        function mostrarConfirm() {
          window.confirm("Quer ter acesso a esse conteúdo?"); // Exibe uma caixa de confirmação com uma pergunta
        }
        // Função para mostrar uma caixa de entrada de texto
        function mostrarPrompt() {
          window.prompt("Me fale seu nome e vamos começar!"); // Exibe uma caixa de entrada para o usuário digitar algo
        }



 // Função que altera todos os parágrafos dentro da div "minhaDiv"
          function mudarParagrafos() {
            let div = document.getElementById("minhaDiv");
            // Seleciona todos os parágrafos dentro da div
            let paragrafos = div.getElementsByTagName("p");
            // Loop para alterar cada parágrafo
            

            for (let i = 0; i < paragrafos.length; i++) {
              
              paragrafos[i].style.color = "red"; 

              paragrafos[i].innerHTML = "Parágrafo modificado!";
            }
          }





           // Função que altera o fundo dos elementos com a classe "mudarclass"
    function  mudarClass() {
      //Seleciona todos os elementos com a classe "mudarclass"
      let elementos = document.getElementsByClassName("mudarclass"); //Se eu quisesse estilizar a partir daqui, eu poderia, mas ai eu estilizaria todos as tags dentro da classe "mudarclass", e não apenas os h5 dentro dessas classes.
      // Loop para alterar cada elemento
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "gray"; // Aqui ele estiliza todos os elementos

         //Aqui ele estiliza todos os elementos com a classe "mudarclass" //  
      }
    }

    



     // Função que altera o tamanho da fonte do segundo h3 dentro da div "querySelector"
function mudarQuery() {
   let query = document.querySelector (".querySelector h3:nth-child(2)"); { //Seleciona o segundo h3 dentro da div com a classe "querySelector" //
  query.style.fontSize = "30px"; //Altera o tamanho da fonte do segundo h3 para 30px //
  query.style.color = "red"; //Altera a cor do segundo h3 para vermelho //
}
}







  // Função que altera todos os parágrafos com a classe "mensagem"
  function alterarMensagens() {
      const mensagens = document.querySelectorAll(".mensagem"); // Seleciona todos os elementos com a classe "mensagem"
      // Loop para alterar cada elemento
      mensagens.forEach((mensagem, i) => {
        mensagem.textContent = `Mensagem alterada ${i + 1}`; // Altera o texto do parágrafo
        mensagem.style.color = "blue"; // Altera a cor do texto
      });
    }


    




    // Função que altera o conteúdo da div "conteudo1"
  function alterarConteudo() {
    let conteudo = document.getElementById("conteudo1");{
    conteudo.innerHTML = "<p>Novo conteúdo adicionado!</p>"; // Altera o conteúdo HTML interno da div
  }
}
  



document.getElementById("menuBtn").addEventListener("click", function() {
  document.getElementById("menuBtn").classList.toggle("active1"); // Alterna a classe "active1" no botão de menu
  document.getElementById("sidebar").classList.toggle("active"); // Alterna a classe "active" no elemento com o ID "sidebar"
});

let conteudos = document.querySelectorAll(".conteudo"); // Seleciona todos os elementos com a classe "conteudo"
let botoes = document.querySelectorAll(".mostrar-mais"); // Seleciona todos os botões com a classe "mostrar-mais"

function toggleContent(index) { 
  let conteudo = conteudos[index];
  conteudo.classList.toggle("aberto");
}

  for (let i = 0; i < conteudos.length; i++) {
    botoes[i].addEventListener("click", function() {
      toggleContent(i);
    });
  }



  window.alert("Página ainda em desenvolvimento!"); // Exibe um alerta informando que o site está em desenvolvimento //