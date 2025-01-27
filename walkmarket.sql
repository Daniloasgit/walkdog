create database Walkmarket;

use Walkmarket;

create table dogwalker (
id int auto_increment PRIMARY KEY ,
cpf char(14) ,
img varchar (255),
nome varchar(255),
usuario varchar(255),
email varchar(255),
senha varchar(255),
telefone char(11),
endereco varchar(255),
token varchar(255),
reset_password_token varchar(255),
reset_password_expires datetime);

CREATE UNIQUE INDEX idx_dgw ON dogwalker(cpf);
 
insert into dogwalker(cpf,nome,usuario,email,senha,telefone,endereco) values
('123.456.789-00', 'João Silva', 'joao.silva', 'joao@example.com', 'senha123', '11987654321', 'Rua das Flores, 123'),
('987.654.321-00', 'Maria Oliveira', 'maria.oliveira', 'maria@example.com', 'senha456', '11912345678', 'Avenida Brasil, 456'),
('111.222.333-44', 'Carlos Souza', 'carlos.souza', 'carlos@example.com', 'senha789', '11922334455', 'Rua São Paulo, 789'),
('555.666.777-88', 'Ana Costa', 'ana.costa', 'ana@example.com', 'senha321', '11933445566', 'Rua Rio de Janeiro, 321'),
('444.555.666-77', 'Pedro Almeida', 'pedro.almeida', 'pedro@example.com', 'senha654', '11944556677', 'Praça Central, 654');





-- Criação da tabela clientes
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cpf CHAR(14),
  img VARCHAR(255),
  nome VARCHAR(255),
  usuario VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255),
  telefone CHAR(11),
  endereco VARCHAR(255),
  token VARCHAR(255),
  reset_password_token VARCHAR(255),
  reset_password_expires DATETIME
);

-- Criação do índice único para CPF
CREATE UNIQUE INDEX idx_cpf ON clientes(cpf);

-- Inserção de dados na tabela clientes
INSERT INTO clientes(cpf, nome, usuario, email, senha, telefone, endereco) VALUES 
('222.333.444-55', 'Ricardo Pereira', 'ricardo.pereira', 'ricardo@example.com', 'senha987', '11955667788', 'Rua do Sol, 234'),
('333.444.555-66', 'Juliana Mendes', 'juliana.mendes', 'juliana@example.com', 'senha654', '11966778899', 'Avenida Paulista, 987'),
('666.777.888-99', 'Felipe Costa', 'felipe.costa', 'felipe@example.com', 'senha321', '11977889900', 'Rua das Palmeiras, 543'),
('777.888.999-00', 'Larissa Rocha', 'larissa.rocha', 'larissa@example.com', 'senha654', '11988990011', 'Rua das Acácias, 678'),
('888.999.000-11', 'Marcelo Lima', 'marcelo.lima', 'marcelo@example.com', 'senha123', '11999001122', 'Rua 7 de Setembro, 321');

-- Criação da tabela animais
CREATE TABLE animais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  raca VARCHAR(255),
  img VARCHAR(255),
  peso DECIMAL(4,2),
  idade INT,
  cliente_cpf CHAR(14),
  FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Inserção de dados na tabela animais com CPFs válidos da tabela clientes
INSERT INTO animais (nome, raca, img, peso, idade, cliente_cpf) VALUES 
('Rex', 'Labrador', 'rex.jpg', 30.50, 5, '222.333.444-55'),
('Mel', 'Poodle', 'mel.jpg', 8.20, 3, '333.444.555-66'),
('Thor', 'Pastor Alemão', 'thor.jpg', 35.00, 4, '666.777.888-99'),
('Bella', 'Bulldog', 'bella.jpg', 12.30, 2, '777.888.999-00'),
('Luna', 'Beagle', 'luna.jpg', 10.80, 1, '888.999.000-11');






