### Exercicio 1

a) Uma chave estrangeira é a chave primária de uma outra tabela que é inserida numa coluna de uma tabela para relacionar que o dado de outra tabela tem relação com o dado desta tabela. 

b) 

~~~SQL
CREATE TABLE RATING (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO RATING (id, comment, rate, movie_id)
VALUES 
("001", "Muito bom!", 7, "001"),
("002", "Muito mais ou menos!", 5, "002"),
("003", "Muito ruim!", 3, "003"),
("004", "Bom!", 6, "004"),
("005", "Pior filme da vida", 0, "005");
~~~

c) 
~~~SQL
INSERT INTO RATING (id, comment, rate, movie_id)
VALUES ("006", "Muito bom!", 7, "006");
~~~

O Erro encontrado foi o abaixo:

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-julio-gabriel`.`RATING`, CONSTRAINT `RATING_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

O erro aconteceu porque não é possível adicionar uma avaliação com um id de filme inexistente, pois a chave estrangeira é obrigatória ter um valor que esteja na coluna da outra tabela como chave primária.

d) 

~~~SQL
ALTER TABLE Movie DROP COLUMN rating;
~~~

e) 

~~~SQL
DELETE FROM Movie
WHERE id = "001";
~~~

O Erro encontrado está abaixo:

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-julio-gabriel`.`RATING`, CONSTRAINT `RATING_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

O Erro aconteceu porque o não posso apagar um filme antes de remover todas as referências que tem dele na tabela RATING.

### Exercício 2

a) A tabela MovieCast terá uma chave estrangeira para o filme que será do tipo VARCHAR, ou seja string, com um comprimento máximo de 255 caracteres, terá também uma chave estrangeira para o ator que será do tipo VARCHAR com um comprimento máximo de 255 caracteres e receberá este valores das chaves primárias da tabela Movie e Actor.

b) 

~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("001", "001"),
("001", "004"),
("001", "006"),
("001", "007"),
("002", "001"),
("002", "004");
~~~

c)

~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("001", "002");
~~~

O Erro encontrado está abaixo:

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`turing-julio-gabriel`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O Erro aconteceu porque não é possível encontrar um id do actor correspondente ao que foi passado.

d) 

~~~SQL
DELETE FROM Actor
WHERE id = "001";
~~~

O Erro encontrado está abaixo:

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`turing-julio-gabriel`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O Erro aconteceu porque o não posso apagar um ator antes de remover todas as referências que tem dele na tabela MovieCast.

### Exercício 3

a) Está selecionando todos os dados da tabela Movie e Rating e juntando numa mesma linha apenas os dados que correspondem ao mesmo id do filme. O operador ON serve para dar a condição para colocar os dados na mesma linha.

b) 

~~~SQL
SELECT RATING.rate, Movie.title, Movie.id as Movie FROM Movie
INNER JOIN RATING ON Movie.id = RATING.movie_id;
~~~

### Exercício 4

a) 

~~~SQL
SELECT RATING.rate, RATING.comment, Movie.title, Movie.id as Movie FROM Movie
LEFT JOIN RATING ON Movie.id = RATING.movie_id;
~~~

b)

~~~SQL
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
~~~

c) 

~~~SQL
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN RATING r ON m.id = r.movie_id
GROUP BY (m.id);
~~~

### Exercício 5

a) Primeiro selecionamos todos os campos da tabela Movie e nomeamos de m a tabela, depois pegamos o que tiver a esquerda de MovieCast que também apelidamos de mc e a condição é que a chave primária da tabela Movie seja igual a chave estrangeira, depois fizemos mais um junção para retornar todos os dados dos atores também, onde a condição para retornar os atores é que a chave estrangeira seja igual a chave estrangeira da tabela MovieCast. Existe a necessidade de dois JOINS porque precisamos retornar os dados da tabela MovieCast e também os dados de Actors.

b) 

~~~SQL
SELECT 
Movie.id MovieID, 
Movie.title MovieTitle, 
MovieCast.actor_id ActorId, 
Actor.name ActorName FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
~~~

c) 

~~~SQL
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

O Erro encontrado está abaixo:

Error Code: 1054. Unknown column 'm' in 'field list'

O Erro aconteceu porque não foi encontrado a coluna m, até porque ela realmente não existe, mas acredito que a solução para corrigir o erro deveria ser o abaixo:

~~~SQL
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

d)

~~~SQL
SELECT 
	m.id MovieId, 
    m.title MovieTitle, 
    a.id ActorId, 
    a.name ActorName, 
    r.rate Rate, 
    r.comment RatingComments
FROM Movie m
LEFT JOIN RATING r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

### Exercício 6

a) Relação  N:M. Pois o filme pode ganhar vários oscars, e os oscars podem ser dados as vários filmes.

b) 

~~~SQL
CREATE TABLE OscarsMovie (
	id VARCHAR(255) PRIMARY KEY,
    name ENUM("Oscar de melhor filme", "Oscar de melhor direção", 
	"Oscar de melhor filme internacional", "Oscar de melhor filme de animação",
    "Oscar de melhor fotografia", "Oscar de melhor edição de som",
    "Oscar de melhores efeitos visuais", "Oscar de melhor engenharia de efeitos",
    "Oscar de melhor roteiro adaptado", "Oscar de melhor roteiro original"),
    date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
~~~

c)

~~~SQL
INSERT INTO OscarsMovie(id, name, date, movie_id)
VALUES ("001", "Oscar de melhor filme", "2020-09-10", "001"),
("002", "Oscar de melhor direção", "2020-09-10", "001"),
("003", "Oscar de melhor filme internacional", "2020-09-10", "002"),
("004", "Oscar de melhor filme de animação", "2020-09-10", "002"),
("005", "Oscar de melhor fotografia", "2020-09-10", "003"),
("006", "Oscar de melhor edição de som", "2020-09-10", "003"),
("007", "Oscar de melhores efeitos visuais", "2020-09-10", "004"),
("008", "Oscar de melhor engenharia de efeitos", "2020-09-10", "004"),
("009", "Oscar de melhor roteiro adaptado", "2020-09-10", "005"),
("010", "Oscar de melhor roteiro original", "2020-09-10", "005");
~~~

d)

~~~SQL
SELECT * FROM Movie
LEFT JOIN OscarsMovie ON Movie.id = OscarsMovie.movie_id;
~~~