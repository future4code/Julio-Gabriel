import { indexOf } from './index'

describe("Testa a função para procurar o index do caractere que você deseja na string", () => {
   test("Deve retornar 0 e 3", async () => {
      expect.assertions(2)

      const result: number = indexOf("hoje", "h")
      const resultTwo: number = indexOf("hoje", "e")
      
      expect(result).toEqual(0)
      expect(resultTwo).toEqual(3)
   })

   test("Deve retornar -1, pois não encontrou o caractere na string", async () => {
      expect.assertions(1)

      const result: number = indexOf("hoje", "k")
      
      expect(result).toEqual(-1)
   }) 
})