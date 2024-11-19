create database Walkmarket;

use Walkmarket;

create table clientes( 
id int auto_increment primary key,
nome varchar(255),
email varchar(255),
senha varchar(255),
cpf char (11),
telefone char(11),
endereco varchar(255),
pet_id int,
dogwalker_id int )
;

alter table clientes
add constraint pet_id
foreign key (pet_id)
 references animal (id);
 
  alter table clientes
add constraint dogwalker_id
foreign key (dogwalker_id)
 references dogwalker (id);


create table dogwalker (
id int auto_increment primary key,
nome varchar(255),
email varchar(255),
senha varchar(255),
cpf char (11),
telefone char(11),
animal_id int );

alter table dogwalker
add constraint animal_id
foreign key (animal_id)
 references animal (id);
 
insert into dogwalker(nome,email,senha,cpf,telefone,animal_id) values
('Eva Gina','ana.costa.estudante@email.com','senha123',12345678901,11223344556,1),
('Cuca Beludo','joao.silva.profissional@email.com','meuemail2024',98765432100,99887766554,2),
('Óscar Alho','carlos.almeida.loja@email.com','abc123!',24680135790,45678901234,3),
('H. Romeu Bahgos','marcos.suporte@email.com','olamundo!1',13579246813,32165498701,4),
('Cuca Gado','bea.souza123@email.com','minhasenha001',54321098765,77788899900,5);

create table animal (
id int auto_increment primary key,
nome varchar (255),
raca varchar (255),
detalhes varchar (255),
cliente_id int
);

alter table animal 
add constraint cliente_id
foreign key (cliente_id)
 references clientes (id);
 
 
 
/*id_dono int references clientes(id)*/

insert into clientes(nome,email,senha,cpf,telefone,endereco,pet_id) values 
('jacinto pinto','titorano23@gmail.com','123456789',47392018456,27583614902,'Rua das Acácias, 245',5),
('Paula tejando','limhabei69@gmail.com','abcdef123',12837465092,90367148527,'Avenida dos Lírios, 1320',3),
('Paul herguido','shaolinmatadordeporco22@gmail.com','qwerty123',56108974321,56240813967,'Rua das Orquídeas, 458',4),
 ('Elma maria','botelhopinto13@gmail.com','password1',93462715803,78159436280,'Avenida das Margaridas, 801',1),
 ('Aquino Rego','regosujo96@gmail.com','hello1234',82013647958,19482750361,'Rua das Violetas, 623',2);

insert into animal (raca) values 
('Labrador Retriever'),
('Bulldog Francês'),
('Pastor Alemão'),
 ('Poodle'),
 ('Beagle')
 ;





