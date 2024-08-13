CREATE TABLE Usuario (
    ID_Usuario INT PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Senha VARCHAR(100),
    Data_Cadastro DATE,
    Data_Nascimento DATE
);

CREATE TABLE Ingrediente (
    ID_Ingrediente INT PRIMARY KEY,
    Nome VARCHAR(100),
    Preco FLOAT,
    Quantidade FLOAT
);

CREATE TABLE Receita (
    ID_Receita INT PRIMARY KEY,
    Nome VARCHAR(100),
    Descricao VARCHAR(5000),
    Tempo_Preparo TIME,
    Rendimento INT,
    ID_Usuario INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario)
);

CREATE TABLE Avaliacao (
    ID_Avaliacao INT PRIMARY KEY,
    Nota INT,
    Comentario VARCHAR(1500),
    Data_Avaliacao DATE,
    ID_Receita INT,
    ID_Cliente INT,
    FOREIGN KEY (ID_Receita) REFERENCES Receita(ID_Receita),
    FOREIGN KEY (ID_Cliente) REFERENCES Usuario(ID_Usuario)
);

INSERT INTO Usuario (ID_Usuario, Nome, Email, Senha, Data_Cadastro, Data_Nascimento)
VALUES 
(1, 'Guilherme Cavalcanti', 'guicavalcanti@gmail.com', 'gui123', '2024-08-13', '1998-04-14'),
(2, 'Breno Rodrigues', 'BrenoR@outlook.com', 'Breno123', '2024-08-13', '2001-05-17'),
(3, 'Victor Bittencourt', 'Victor04@gmail.com', 'victor123', '2024-08-13', '2004-07-14'),
(4, 'Monica Alves Moreira', 'Monica.Alves@gmail.com', 'Monica123', '2024-08-13', '1998-09-17'),
(5, 'Steffany Simpson', 'SteffanySimpson@outlook.com', 'Steffany123', '2024-08-13', '1995-04-18'),
(6, 'Wander Goncalves', 'WanderG@gmail.com', 'Wander123', '2024-08-13', '2000-08-04'),
(7, 'Daniel', 'Dani@gmail.com', 'Dani123', '2024-08-13', '1997-06-01');

INSERT INTO Ingrediente (ID_Ingrediente, Nome, Preco, Quantidade)
VALUES 
(1, 'Farinha', 14.90, 1000),
(2, 'Açúcar', 8.90, 500),
(3, 'Ovo', 10.00, 12),
(4, 'Chocolate em barra', 6.90, 90),
(5, 'Leite Condensado', 7.90, 1),
(6, 'Creme de Leite', 3.50, 1);

INSERT INTO Receita (ID_Receita, Nome, Descricao, Tempo_Preparo, Rendimento, ID_Usuario)
VALUES 
(1, 'Bolo de Cenoura', '#Descrição Receita Bolo#', '00:45:00', 12, 1),
(2, 'Bolo de Chocolate', '#Descrição Receita Bolo#', '00:40:00', 10, 1),
(3, 'Bolo de Coco Gelado', '#Descrição Receita Bolo#', '01:00:00', 10, 1);

INSERT INTO Avaliacao (ID_Avaliacao, Nota, Comentario, Data_Avaliacao, ID_Receita, ID_Cliente)
VALUES 
(1, 5, 'Que delicia! Vou fazer de novo.', '2024-08-13', 1, 2),
(2, 5, 'Consegui fazer um bolo melhor que o da minha avó', '2024-08-13', 2, 3),
(3, 3, 'Bom, mas muito básico.', '2024-08-13', 3, 6);


