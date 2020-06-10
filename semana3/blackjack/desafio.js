/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/* Desafios: 8, 9 e 10 

console.log("Bem vindo ao jogo de Blackjack!")

let sorteio = 0
let cartasUsuario = []
let cartasComputador = []
let valorUsuario = []
let valorComputador = []
let pontuacaoUsuario = 0
let pontuacaoComputador = 0
let mensagem
let trava = false

if(confirm("Quer iniciar uma nova rodada?")) {

      for (sorteio = 0; sorteio <= 4; sorteio++) {
         if (sorteio = 1) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 2) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 3) {
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto)
            valorComputador.push(carta.valor)
            pontuacaoComputador += carta.valor
         }
         if (sorteio = 4) {
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto)
            valorComputador.push(carta.valor)
            pontuacaoComputador += carta.valor
         }
         if ((valorUsuario[0] === valorUsuario[1]) || (valorComputador[0] === valorComputador[1])) {
            sorteio = 0
            pontuacaoUsuario = 0
            pontuacaoComputador = 0
            valorUsuario = []
            valorComputador = []
            cartasUsuario = []
            cartasComputador = []  
         }
      }    
         while ((pontuacaoUsuario < 21) && (trava === false)) {
            if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " + cartasComputador[0] + "\n" 
            + "Deseja comprar mais uma carta?")) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
            } else {
               trava = true;
            }
         }
         if ((pontuacaoUsuario => 21) || (trava === true)) {
            if (pontuacaoUsuario > pontuacaoComputador) {
               mensagem = "O usuário ganhou!"
            } else if (pontuacaoUsuario === pontuacaoComputador) {
               mensagem = "Empate!"
            } else {
               mensagem = "O computador ganhou!"
            }
            alert("Suas cartas são "  + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + "." + "\n" + "As cartas do computador são " + cartasComputador +  ". A pontuação do computador é " + pontuacaoComputador + "\n" + mensagem)
         }
} else {
   console.log("O jogo acabou")
}

*/

/* Desafio 11

console.log("Bem vindo ao jogo de Blackjack!")

let sorteio = 0
let cartasUsuario = []
let cartasComputador = []
let valorUsuario = []
let valorComputador = []
let pontuacaoUsuario = 0
let pontuacaoComputador = 0
let mensagem
let trava = false

if(confirm("Quer iniciar uma nova rodada?")) {

      for (sorteio = 0; sorteio <= 4; sorteio++) {
         if (sorteio = 1) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 2) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 3) {
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto)
            valorComputador.push(carta.valor)
            pontuacaoComputador += carta.valor
         }
         if (sorteio = 4) {
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto)
            valorComputador.push(carta.valor)
            pontuacaoComputador += carta.valor
         }
         if ((valorUsuario[0] === valorUsuario[1]) || (valorComputador[0] === valorComputador[1])) {
            sorteio = 0
            pontuacaoUsuario = 0
            pontuacaoComputador = 0
            valorUsuario = []
            valorComputador = []
            cartasUsuario = []
            cartasComputador = []  
         }
      }    
         while ((pontuacaoUsuario <= 21) && (trava === false)) {
            if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " + cartasComputador[0] + "\n" 
            + "Deseja comprar mais uma carta?")) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
            } else {
               while ((pontuacaoUsuario <= 21) && (pontuacaoUsuario > pontuacaoComputador)) {
                  const carta = comprarCarta();
                  cartasComputador.push(carta.texto)
                  valorComputador.push(carta.valor)
                  pontuacaoComputador += carta.valor 
               }
               trava = true;
            }
         }
         if (pontuacaoUsuario > pontuacaoComputador) {
            mensagem = "O usuário ganhou!"
         } else if (pontuacaoUsuario === pontuacaoComputador) {
            mensagem = "Empate!"
         } else {
            mensagem = "O computador ganhou!"
         }
         alert("Suas cartas são "  + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + "." + "\n" + "As cartas do computador são " + cartasComputador +  ". A pontuação do computador é " + pontuacaoComputador + "\n" + mensagem)
} else {
   console.log("O jogo acabou")
}

*/

/* Desafio 12

console.log("Bem vindo ao jogo de Blackjack!")

let sorteio = 0
let cartasUsuario = []
let cartasComputador = []
let valorUsuario = []
let valorComputador = []
let pontuacaoUsuario = 0
let pontuacaoComputador = 0
let mensagem
let trava = false

if(confirm("Quer iniciar uma nova rodada?")) {

      for (sorteio = 0; sorteio <= 4; sorteio++) {
         if (sorteio = 1) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 2) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 3) {
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto)
            valorComputador.push(carta.valor)
            pontuacaoComputador += carta.valor
         }
         if (sorteio = 4) {
            const carta = comprarCarta(); 
            cartasComputador.push(carta.texto)
            valorComputador.push(carta.valor)
            pontuacaoComputador += carta.valor
         }
         if ((valorUsuario[0] === valorUsuario[1]) || (valorComputador[0] === valorComputador[1])) {
            sorteio = 0
            pontuacaoUsuario = 0
            pontuacaoComputador = 0
            valorUsuario = []
            valorComputador = []
            cartasUsuario = []
            cartasComputador = []  
         }
      }    
         while ((pontuacaoUsuario <= 21) && (trava === false)) {
            if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " + cartasComputador[0] + "\n" 
            + "Deseja comprar mais uma carta?")) {
            const carta = comprarCarta();
            cartasUsuario.push(carta.texto)
            valorUsuario.push(carta.valor)
            pontuacaoUsuario += carta.valor
            } else {
               while((pontuacaoUsuario <= 21) && (pontuacaoUsuario > pontuacaoComputador)) {
                  const carta = comprarCarta();
                  cartasComputador.push(carta.texto)
                  valorComputador.push(carta.valor)
                  pontuacaoComputador += carta.valor 
               }
               trava = true;
            }
         }
         if (((pontuacaoUsuario > pontuacaoComputador) && (pontuacaoUsuario <= 21)) || ((pontuacaoComputador > 21) && (pontuacaoUsuario < 21))) {
            mensagem = "O usuário ganhou!"
         } else if (pontuacaoUsuario === pontuacaoComputador) {
            mensagem = "Empate!"
         } else {
            mensagem = "O computador ganhou!"
         }
         alert("Suas cartas são "  + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + "." + "\n" + "As cartas do computador são " + cartasComputador +  ". A pontuação do computador é " + pontuacaoComputador + "\n" + mensagem)
} else {
   console.log("O jogo acabou")
}