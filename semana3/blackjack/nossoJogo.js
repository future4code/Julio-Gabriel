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
 
console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
      let sorteio = 0
      let cartaUmUsuario
      let cartaDoisUsuario
      let cartaUmComputador
      let cartaDoisComputador
      let pontuacaoUsuario = 0
      let pontuacaoComputador = 0
     
      for (sorteio = 0; sorteio <= 4; sorteio++) {
         if (sorteio = 1) {
            const carta = comprarCarta(); 
            cartaUmUsuario = carta.texto
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 2) {
            const carta = comprarCarta(); 
            cartaDoisUsuario = carta.texto
            pontuacaoUsuario += carta.valor
         }
         if (sorteio = 3) {
            const carta = comprarCarta(); 
            cartaUmComputador = carta.texto
            pontuacaoComputador += carta.valor
         }
         if (sorteio = 4) {
            const carta = comprarCarta(); 
            cartaDoisComputador = carta.texto
            pontuacaoComputador += carta.valor
         }
      }
      console.log("Usuário - cartas: " + cartaUmUsuario, cartaDoisUsuario + " pontuação " + pontuacaoUsuario)
      console.log("Computador - cartas: " + cartaUmComputador, cartaDoisComputador + " pontuação " + pontuacaoComputador)    
      if (pontuacaoUsuario > pontuacaoComputador) {
         console.log("O usuário ganhou!")
      } else if (pontuacaoUsuario === pontuacaoComputador) {
         console.log("Empate!")
      }else {
         console.log("O computador ganhou!")
      }
} else {
	console.log("O jogo acabou")
}
