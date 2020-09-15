### Exercicio 1

a) Round: É como a lib Bcrypt chama o cost (custo - numérico), que por sua vez, é como se fosse iterar quantas vezes vai ser feita o hash com uma senha, quanto maior o cost, maior o tempo de execução do algoritmo. É utilizado para evitar o ataque rainbow table.
Salt: É uma string aleatória na senha (ou texto) que é criada antes de criar o hash para dificultar mais ainda o processo para um usuário malicioso quebrar a senha.

### Exercicio 2

a) O cadastro, pois ainda não temos as senhas dos usuários salvas no banco de dados criptografada com o hash.

d) Não, pois neste endpoint apenas exibimos os dados do usuário do perfil.