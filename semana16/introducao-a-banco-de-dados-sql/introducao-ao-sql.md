### Exercício 1

1) a) Create Table é utilizado para criar uma tabela, VARCHAR(255) cria uma coluna com comprimento máximo de 255 caracteres. PRIMARY KEY é uma constraint que defini a coluna como chave primária da tabela. O NOT NULL é utilizado para impedir que aquela coluna tenha um valor nulo. DATE é para definir que uma coluna vai ser do tipo data com o formato YYYY-MM-DD.

1) b) O comando SHOW DATABASES mostra todas as base de dados do seu banco de dados. Já o comando SHOW TABLES mostra todas as suas tabelas que estão na base de dados.

1) c) O comando solicitado possui um erro de sintaxe.

### Exercício 2

2) a) 

~~~SQL
("002", "Gloria Pires", 1200000, "1963-08-23", "female")
~~~

2) b) A mensagem de erro que obtive foi Entrada duplicada '002' para a chave 'PRIMARY. Este erro aconteceu porque o banco de dados já possui uma chave 002 cadastrada.

~~~SQL
("002", "Fernanda Montenegro", 1400000, "1929-10-16", "female")
~~~

2) c) A mensagem de erro que obtive foi: Error Code: 1136. Column count doesn't match value count at row 1. Este erro aconteceu porque existia apenas três colunas que iriam ser inseridos dados, mas na hora de passar os valores tinham 5 valores para três colunas.

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~

2) d) A mensagem de erro que obtive foi: Error Code: 1364. Field 'name' doesn't have a default value. Este erro aconteceu porque ficou faltando inserir o valor do nome.

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
~~~

2) e) A mensagem de erro obtive foi: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Este erro aconteceu porque o valor do aniversário dela estava do tipo número e não do tipo string.

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("006", "Lima Duarte", 300000, "1930-03-29", "male"),
("007", "Regina Duarte", 1000000, "1947-02-05", "female")
~~~

### Exercício 3

3) a) 

~~~SQL
SELECT * FROM Actor WHERE gender = "female"
~~~

3) b) 

~~~SQL
SELECT salary FROM Actor WHERE name = "Tony Ramos"
~~~

3) c) 

~~~SQL
SELECT * FROM Actor WHERE gender = "invalid"
~~~

Não otive nenhum resultado pois não tem nenhum nome no banco de dados que seja inválido.

3) d) 

~~~SQL
SELECT id, name, salary from Actor WHERE salary < 500000
~~~

3) e) A mensagem de erro que obtive foi: Error Code: 1054. Unknown column 'nome' in 'field list'. Este erro aconteceu porque o nome da coluna é name e não nome.

~~~SQL
SELECT id, name from Actor WHERE id = "002"
~~~

### Exercício 4

4) a) Estamos selecionando todas as informações da tabela Actor, através do SELECT * FROM Actor e depois o Where serve para inserir a condição e o LIKE serve para comparar as strings de name e o porcentagem antes do caractere informa que o primeiro caractere da string deve ser o que se seguir depois da porcentagem, o OR significa OU e o porcentagem novamente antes do caractere para infromar que o primeiro caractere da string deve ser o que se seguir depois da porcentagem, o operador AND para dizer que tem mais uma condição que é o sálario maior que R$300.000.

4) b) 

~~~SQL
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
~~~

4) c)

~~~SQL
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
~~~

4) d)

~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000
~~~

### Exercício 5

5) a) 

~~~SQL
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHMovieAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
~~~

5) b)

~~~SQL
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
~~~

5) c)

~~~SQL
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
~~~

5) d) 

~~~SQL
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
~~~

5) e)

~~~SQL
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "O Auto da Compadecida",
    "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
    "2000-09-10",
    10
);
~~~

### Exercício 6

6) a)

~~~SQL
UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-09-08"
WHERE id = "003"
~~~

6) b) 

~~~SQL
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"

 UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
~~~

6) c)

~~~SQL
UPDATE Actor
SET name = "Ator Teste",
    salary = 500000,
	birth_date = "2020-09-08",
    gender = "male"
WHERE id = "005";
~~~

6) d) A mensagem que apareceu foi a seguinte: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Não alterou nenhum dos atores do banco de dados, porque ele não encontrou nenhum ID correspondente para alterar.

~~~SQL
UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-09-08"
WHERE id = "43"
~~~

### Exercício 7

7) a) 

~~~SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
~~~

7) b)

~~~SQL
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
~~~

### Exercício 8

8) a) O resultado foi 4 atores do sexo masculino e 3 atrizes do sexo feminino. Ele simplesmente percorreu a tabela e agrupou os dados em dois tipos, male e female e contou quantos índividuos eram male e quantos eram female.

8) b) 

~~~SQL
SELECT id, name FROM Actor 
ORDER BY name DESC
~~~

8) c)

~~~SQL
SELECT * FROM Actor
ORDER BY salary ASC
~~~

8) d)

~~~SQL
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3
~~~

8) e)

~~~SQL
SELECT AVG(salary), gender FROM Actor
GROUP BY gender
~~~