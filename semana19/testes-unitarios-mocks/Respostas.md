### Exercício 3

c) A primeira implementação depende unicamente da função validateCharacter, o que gera um problema quando vamos realizar um teste unitário da primeira implementação, porque acaba nos fazendo testar também a função de validateCharacter, já a segunda implementação depende da função que quem a chama determinar, o que nos possibilita fazer um mock da função na hora de testar a segunda implementação.

### Exercício 4

a) Devemos fazer um mock da função validateCharacter, pois não é ela quem queremos testar diretamente, queremos testar a função de performAttack e como ela recebe como parâmetro a função validateCharacter.