create database Walkmarket;

use Walkmarket;

create table clientes( 
id int auto_increment primary key,
img varchar (255),
nome varchar(255),
usuario varchar(255),
email varchar(255),
senha varchar(255),
cpf char (11),
telefone char(11),
endereco varchar(255))
;

  /* CRIAR UMA TABELA PARA SERVIÇOS E USAR FOREINGKEY ENTRE AS 3 TABELAS
  alter table clientes
add constraint dogwalker_id
foreign key (dogwalker_id)
 references dogwalker (id);*/


create table dogwalker (
id int auto_increment primary key,
img varchar (255),
nome varchar(255),
usuario varchar(255),
email varchar(255),
senha varchar(255),
cpf char (11),
telefone char(11),
atuacao varchar(255));
 
insert into dogwalker(nome,usuario,email,senha,cpf,telefone,atuacao) values
('Eva Gina','Juliana','ana.costa.estudante@email.com','senha123',12345678901,11223344556,'PIAUI'),
('Cuca Beludo','João Caetano','joao.silva.profissional@email.com','meuemail2024',98765432100,99887766554,'SAO PAULO'),
('Óscar Alho','Carlinhos Maia','carlos.almeida.loja@email.com','abc123!',24680135790,45678901234,'CARNO'),
('H. Romeu Bahgos','Marquin do Grau','marcos.suporte@email.com','olamundo!1',13579246813,32165498701,'GAYBRIL'),
('Cuca Gado','Stivi Istringi','bea.souza123@email.com','minhasenha001',54321098765,77788899900,'JÂO23');

create table animal (
id int auto_increment primary key,
img varchar (255),
nome varchar (255),
raca varchar (255),
detalhes varchar (255),
cliente_id int
);

alter table animal 
add constraint cliente_id
foreign key (cliente_id)
 references clientes (id);
 

insert into clientes(nome,usuario,email,senha,cpf,telefone,endereco) values 
('jacinto pinto','Tonhão','titorano23@gmail.com','123456789',47392018456,27583614902,'Rua das Acácias, 245'),
('Paula tejando','Junin','limhabei69@gmail.com','abcdef123',12837465092,90367148527,'Avenida dos Lírios, 1320'),
('Paul herguido','Robso','shaolinmatadordeporco22@gmail.com','qwerty123',56108974321,56240813967,'Rua das Orquídeas, 458'),
 ('Elma maria','Wesley','botelhopinto13@gmail.com','password1',93462715803,78159436280,'Avenida das Margaridas, 801'),
 ('Aquino Rego','Tiringa','regosujo96@gmail.com','hello1234',82013647958,19482750361,'Rua das Violetas, 623');

insert into animal (raca) values 
('Labrador Retriever'),
('Bulldog Francês'),
('Pastor Alemão'),
 ('Poodle'),
 ('Beagle')
 ;

CREATE TABLE servico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dog_img VARCHAR(255),
  dogwalker_id INT,
  cliente_id INT,
  animal_id INT,
  preco_servico DECIMAL(5,2),
  entrega DATETIME,
  devolucao DATETIME,
  
  CONSTRAINT fk_dogwalker_id FOREIGN KEY (dogwalker_id) REFERENCES dogwalker(id),
  CONSTRAINT fk_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  CONSTRAINT fk_animal_id FOREIGN KEY (animal_id) REFERENCES animal(id)
);



