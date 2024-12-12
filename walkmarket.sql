create database Walkmarket;

use Walkmarket;

CREATE TABLE clientes (
  id CHAR(14) PRIMARY KEY,
  img VARCHAR(255),
  nome VARCHAR(255),
  usuario VARCHAR(255),
  email VARCHAR(255),
  senha VARCHAR(255),
  telefone CHAR(11),
  endereco VARCHAR(255),
  reset_password_token VARCHAR(255),
  reset_password_expires DATETIME
);

create table dogwalker (
id char(14) PRIMARY KEY,
img varchar (255),
nome varchar(255),
usuario varchar(255),
email varchar(255),
senha varchar(255),
telefone char(11),
atuacao varchar(255),
reset_password_token varchar(255),
reset_password_expires datetime);
 
insert into dogwalker(id,nome,usuario,email,senha,telefone,atuacao) values
(19876543211,'Eva Gina','Juliana','ana.costa.estudante@email.com','senha123',11223344556,'PIAUI'),
(98765432198,'Cuca Beludo','João Caetano','joao.silva.profissional@email.com','meuemail2024',99887766554,'SAO PAULO'),
(54321098765,'Óscar Alho','Carlinhos Maia','carlos.almeida.loja@email.com','abc123!',45678901234,'CARNO'),
(65432109876,'H. Romeu Bahgos','Marquin do Grau','marcos.suporte@email.com','olamundo!1',32165498701,'GAYBRIL'),
(32109876543,'Cuca Gado','Stivi Istringi','bea.souza123@email.com','minhasenha001',77788899900,'JÂO23');

CREATE TABLE animal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  raca VARCHAR(255),
  dog_img VARCHAR(255),
  cliente_id CHAR(14),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE ON UPDATE CASCADE
);



 

insert into clientes(id,nome,usuario,email,senha,telefone,endereco) values 
(87654321098,'jacinto pinto','Tonhão','titorano23@gmail.com','123456789',27583614902,'Rua das Acácias, 245'),
(43210987654,'Paula tejando','Junin','limhabei69@gmail.com','abcdef123',90367148527,'Avenida dos Lírios, 1320'),
(10987654321,'Paul herguido','Robso','shaolinmatadordeporco22@gmail.com',56108974321,56240813967,'Rua das Orquídeas, 458'),
 (76543210987,'Elma maria','Wesley','botelhopinto13@gmail.com','password1',78159436280,'Avenida das Margaridas, 801'),
 (93876543210,'Aquino Rego','Tiringa','regosujo96@gmail.com','hello1234',19482750361,'Rua das Violetas, 623');
 
 /*insert into clientes(nome,usuario,email,senha,cpf,telefone,endereco) values
 ('jacinto pinto','Tonhão','titorano23@gmail.com','123456789',47392018456,27583614902,'Rua das Acácias, 245');*/

insert into animal (raca) values 
('Labrador Retriever'),
('Bulldog Francês'),
('Pastor Alemão'),
 ('Poodle'),
 ('Beagle')
 ;

CREATE TABLE servico (
  idRegistro INT AUTO_INCREMENT PRIMARY KEY,
  dog_img VARCHAR(255),
  dogwalker_id char (14),
  cliente_id char (14),
  animal_id INT,
  preco_servico DECIMAL(5,2),
  entrega DATETIME,
  devolucao DATETIME,
  
  CONSTRAINT fk_dogwalker_id FOREIGN KEY (dogwalker_id) REFERENCES dogwalker(id),
  CONSTRAINT fk_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  CONSTRAINT fk_animal_id FOREIGN KEY (animal_id) REFERENCES animal(id)
);


insert into servico (dogwalker_id,cliente_id,animal_id,preco_servico,entrega,devolucao) values
('19876543211','87654321098','2','78.11','2024-02-12 10:00:00','2024-02-12 11:00:00'),
('98765432198','43210987654','4','55.43','2024-02-13 14:30:00','2024-02-13 15:30:00'),
('54321098765','10987654321','1','18.55','2024-02-14 08:45:00','2024-02-14 09:45:00'),
('65432109876','76543210987','3','93.77','2024-02-15 12:15:00','2024-02-15 13:15:00'),
('32109876543','93876543210','5','36.87','2024-02-16 16:00:00','2024-02-16 17:00:00');

insert into servico (dogwalker_id,cliente_id,animal_id,preco_servico,entrega,devolucao) values
('1','5','2','78.11','2024-12-06 08:26:00','2024-12-06 08:27:00');