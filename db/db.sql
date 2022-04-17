-- Miller Boyd
-- 4771811
-- Parking project 1/2

CREATE DATABASE parking;

use parking;

CREATE TABLE stadium  (
	id SERIAL, 
	address VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255),
	hours VARCHAR(255),
	capacity INTEGER
);

CREATE TABLE lot (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	stadium integer REFERENCES stadium(id)
);

create table spot (
	id SERIAL primary key,
	handicap bool not null,
	available bool not null,
	lot INTEGER  references lot(id)
);

CREATE TABLE driver (
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	license_number INTEGER primary KEY
);

create table car (
	license_plate VARCHAR(7) primary key,
	driver INTEGER REFERENCES driver(license_number),
	make VARCHAR(255),
	type VARCHAR(255)
);

CREATE TABLE events (
	event_name VARCHAR(255),
	stadium VARCHAR(255) REFERENCES stadium(address),
	event_date date not null,
	PRIMARY KEY(event_name, event_date)
);

create table employee (
	email VARCHAR(255) PRIMARY KEY,
	password VARCHAR(255),
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	stadium VARCHAR(255) REFERENCES stadium(address),
	working_lot INTEGER references lot(id)
);

CREATE TABLE allocation (
	id serial primary key,
	parking_spot INTEGER REFERENCES spot(id),
	vehicle VARCHAR(7) REFERENCES car(license_plate),
	employee VARCHAR(255) REFERENCES employee(email),
	events VARCHAR(255) REFERENCES events(event_name),
	date DATE REFERENCES events(event_date)
);

CREATE TABLE ticket (
	driver INTEGER REFERENCES driver(license_number),
	events VARCHAR(255) REFERENCES events(event_name),
	date DATE REFERENCES events(event_date),
	seat VARCHAR(5),
	primary KEY(driver, events)
);

insert into stadium (address, name, hours, capacity)
values
('1 AT&T Way, Arlington, TX 76011', 'AT&T Stadium', '8:00-10:00',100000),
('2 Fairway Drive, Grapevine, TX 75022', 'The Rodeo', '7:00-8:00',20000);

insert into lot (name, stadium)
values
('Silver lot','1'),
('Gold lot','1'),
('Platinum lot','1'),
('Silver lot','2'),
('Gold lot','2'),
('Platinum lot','2');

insert into spot (handicap, available, lot)
values 
(true, true, 1),
(true, false, 1),
(true, false, 1),
(true, true, 1),
(false, true, 1),
(false, true, 1),
(false, false, 1),
(false, false, 1),
(true, true, 2),
(true, false, 2),
(true, false, 2),
(true, true, 2),
(false, true, 2),
(false, true, 2),
(false, false, 2),
(false, false, 2),
(true, true, 3),
(true, false, 3),
(true, false, 3),
(true, true, 3),
(false, true, 3),
(false, true, 3),
(false, false, 3),
(false, false, 3),
(true, true, 4),
(true, false, 4),
(true, false, 4),
(true, true, 4),
(false, true, 4),
(false, true, 4),
(false, false, 4),
(false, false, 4),
(true, true, 5),
(true, false, 5),
(true, false, 5),
(true, true, 5),
(false, true, 5),
(false, true, 5),
(false, false, 5),
(false, false, 5),
(true, true, 6),
(true, false, 6),
(true, false, 6),
(true, true, 6),
(false, true, 6),
(false, true, 6),
(false, false, 6),
(false, false, 6);

insert into driver (first_name,last_name,license_number)
values 
('miller','boyd',312345),
('jinger','lynn',2133103),
('mike','angelo',0909809),
('dona','telo',9778231),
('raf','ael',09475204),
('leo','nardo',89765366),
('spike','spiegel',89437598),
('cat','valentine',8972135),
('max','proetzender',887623134),
('edward','wong',09735667),
('ike','dog',90786752),
('julio','jones',7654346),
('mike','evans',64323467),
('justin','fields',3569876),
('matt','stafford',46746789);

insert into car (license_plate,driver,make,type)
values 
('wndmill',312345,'honda','truck'),
('hgr9231',2133103,'toyota','sedan'),
('likemke',0909809,'maserati','truck'),
('90g21t1',9778231,'honda','coupe'),
('turtlez',09475204,'volkswagen','sedan'),
('90384dw',89765366,'nissan','truck'),
('cowboy2',89437598,'space','hatchback'),
('j3hasd1',8972135,'ford','suv'),
('bebop22',887623134,'space','truck'),
('edised',09735667,'tesla','suv'),
('woofboi',90786752,'audi','truck'),
('titan11',7654346,'volkswagen','van'),
('213fda1',64323467,'honda','rv'),
('beardwn',3569876,'toyota','van'),
('921ends',46746789,'honda','sedan');

insert into events (event_name, stadium, event_date)
values 
('cowboys vs 49ers', '1 AT&T Way, Arlington, TX 76011','2022-01-13'),
('miley cirus concert', '1 AT&T Way, Arlington, TX 76011',now()),
('monster truck rally','1 AT&T Way, Arlington, TX 76011','2022-02-16'),
('cowboys club fan meetup','2 Fairway Drive, Grapevine, TX 75022',now()),
('preseason practice open to fans','2 Fairway Drive, Grapevine, TX 75022','2022-03-15'),
('hannah montana concert','2 Fairway Drive, Grapevine, TX 75022','2022-02-16');

insert into employee (email, password, first_name, last_name, stadium, working_lot)
values
('bidet@attstad.com','password','joe','bidet','1 AT&T Way, Arlington, TX 76011',1),
('rafikoo@attstad.com','password','rafi','koo','1 AT&T Way, Arlington, TX 76011',1),
('buddenj@attstad.com','password','joe','budden','1 AT&T Way, Arlington, TX 76011',1),
('klingtonh@attstad.com','password','hillary','klington','1 AT&T Way, Arlington, TX 76011',2),
('hicksa@attstad.com','password','akiem','hicks','1 AT&T Way, Arlington, TX 76011',2),
('mackk@attstad.com','password','khalil','mack','1 AT&T Way, Arlington, TX 76011',2),
('goldmane@attstad.com','password','eddie','goldman','1 AT&T Way, Arlington, TX 76011',3),
('berries@attstad.com','password','sherie','berrie','1 AT&T Way, Arlington, TX 76011',3),
('andersonj@attstad.com','password','josina','anderson','1 AT&T Way, Arlington, TX 76011',3),
('rodgersa@rodeo.com','password','aaron','rodgers','2 Fairway Drive, Grapevine, TX 75022',1),
('leek@rodeo.com','password','kimber','lee','2 Fairway Drive, Grapevine, TX 75022',1),
('rushs@rodeo.com','password','savanna','rush','2 Fairway Drive, Grapevine, TX 75022',1),
('corvinx@rodeo.com','password','xander','corvin','2 Fairway Drive, Grapevine, TX 75022',2),
('wallerw@rodeo.com','password','wallina','waller','2 Fairway Drive, Grapevine, TX 75022',2),
('floatb@rodeo.com','password','boat','float','2 Fairway Drive, Grapevine, TX 75022',2),
('smithr@rodeo.com','password','rick','smith','2 Fairway Drive, Grapevine, TX 75022',3),
('banab@rodeo.com','password','bert','bana','2 Fairway Drive, Grapevine, TX 75022',3),
('shiestyj@rodeo.com','password','joe','shiesty','2 Fairway Drive, Grapevine, TX 75022',3);

insert into allocation (parking_spot,vehicle,employee,events,date)
values 
(1,'wndmill','buddenj@attstad.com','cowboys vs 49ers','2022-01-13'),
(2,'hgr9231','rafikoo@attstad.com','cowboys vs 49ers','2022-01-13'),
(20,'woofboi','berries@attstad.com','cowboys vs 49ers','2022-01-13'),
(5,'921ends','bidet@attstad.com','cowboys vs 49ers','2022-01-13'),
(5,'titan11','bidet@attstad.com','miley cirus concert',now()),
(22,'213fda1','andersonj@attstad.com','miley cirus concert',now()),
(24,'wndmill','goldmane@attstad.com','miley cirus concert',now()),
(13,'90g21t1','mackk@attstad.com','miley cirus concert',now()),
(9,'turtlez','hicksa@attstad.com','miley cirus concert',now()),
(9,'titan11','hicksa@attstad.com','monster truck rally','2022-02-16'),
(1,'cowboy2','bidet@attstad.com','monster truck rally','2022-02-16'),
(25,'cowboy2','leek@rodeo.com','cowboys club fan meetup',now()),
(48,'90384dw','smithr@rodeo.com','cowboys club fan meetup',now()),
(36,'bebop22','floatb@rodeo.com','cowboys club fan meetup',now()),
(33,'hgr9231','wallerw@rodeo.com','preseason practice open to fans','2022-03-15'),
(40,'likemke','corvinx@rodeo.com','preseason practice open to fans','2022-03-15'),
(27,'edised','rushs@rodeo.com','hannah montana concert','2022-02-16'),
(25,'j3hasd1','rodgersa@rodeo.com','hannah montana concert','2022-02-16'),
(42,'wndmill','banab@rodeo.com','hannah montana concert','2022-02-16'),
(44,'woofboi','shiestyj@rodeo.com','hannah montana concert','2022-02-16');

insert into ticket (driver, events, date, seat)
values 
(312345,'cowboys vs 49ers','2022-01-13','434b');