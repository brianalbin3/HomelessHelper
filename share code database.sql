/* robo nurse - ackit - 2020 */
/* run this once to install, running down the road again will wipe
   out all data */

drop database if exists `robo_project`;
create database `robo_project`;
USE `robo_project`;

drop table if exists `ackit_ban`;
drop table if exists `ackit_rep`;
drop table if exists `ackit_revised`;
drop table if exists `ackit_data`;
drop table if exists `ackit_subtopic`;
drop table if exists `ackit_topic`;
drop table if exists `ackit_passwords`;
drop table if exists `ackit_users`;


/*
<?php
  define('PAGE_LIMIT',10);
?>

  username,registered(?) --> password check --> banned check
  [main topic]-->[subtopics]-->[title/topic][description]
  --> [data]-->[who posts]-->is revision? replace with revision
  [replys] --> [userid] --> [erply data]
  LIMIT 0,10; per page (i % PAGE_LIMIT)

*/

create table `ackit_users`(`id` int not null auto_increment,
                            `username` varchar(30) not null,
                            `registered` boolean DEFAULT 0,
                            `hash` varchar(128), /* sha512 + salt */
                            `datejoined` date,
                            `posts` int default 0,
                            PRIMARY KEY(`id`))ENGINE=innoDB;

create table `ackit_passwords`(`id` int not null auto_increment,
                               `uid` int not null,
                               `password` varchar(128) not null,
                               PRIMARY KEY(`id`),
                               FOREIGN KEY(`uid`) REFERENCES `ackit_users`(`id`)
                               ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

create table `ackit_topics` (`id` int not null auto_increment,
                            `uid` int not null,
                            `title` varchar(50),
                            `description` varchar(80),
                            PRIMARY KEY(`id`),
                            FOREIGN KEY(`uid`) REFERENCES `ackit_users`(`id`)
                            ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

create table `ackit_subtopic` (`id` int not null auto_increment,
                              `tid` int not null,
                              `topic` varchar(50),
                              `description` varchar(80),
                              PRIMARY KEY(`id`),
                              FOREIGN KEY(`tid`) REFERENCES `ackit_topics`(`id`)
                              ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

create table `ackit_data` (`id` int not null auto_increment,
                            `sub` int not null,
                            `uid` int not null,
                            `adata` blob,
                            PRIMARY KEY(`id`),
                            FOREIGN KEY(`sub`) REFERENCES `ackit_subtopic`(`id`)
                            ON UPDATE CASCADE ON DELETE CASCADE,
                            FOREIGN KEY(`uid`) REFERENCES `ackit_users`(`id`)
                            ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

create table `ackit_revised`(`id` int not null auto_increment,
                             `sda` int not null,
                             `rdata` blob,
                             PRIMARY KEY(`id`),
                             FOREIGN KEY(`sda`) REFERENCES `ackit_data`(`id`)
                             ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

create table `ackit_rep`(`id` int not null auto_increment,
                            `did` int not null,
                            `uid` int not null,
                            `sdata` blob,
                            `rdate` date,
                          PRIMARY KEY(`id`),
                          FOREIGN KEY(`uid`) REFERENCES `ackit_users`(`id`)
                          ON UPDATE CASCADE ON DELETE CASCADE,
                          FOREIGN KEY(`did`) REFERENCES `ackit_data`(`id`)
                          ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

create table `ackit_ban`(`id` not null auto_increment,
                         `uid` not null,
                         `descript` varchar(100),
                        PRIMARY KEY(`id`),
                        FOREIGN KEY(`uid`) REFERENCES `ackit_users`(`id`)
                        ON UPDATE CASCADE ON DELETE CASCADE)ENGINE=innoDB;

insert into `ackit_users` values (NULL,'demouser',1,'hash','2020-12-2',12);
insert into `ackit_passwords` values(NULL,1,'a string that will never evaluate to a password');
insert into `ackit_topics` values(NULL,1,'demo topic','demo description');
insert into `ackit_subtopic` values(NULL,1,'subtopic to demo','description to subtopic');
insert into `ackit_data` values(NULL,1,1,'this is where the main steram of data/text/post goes, this is demo');
insert into `ackit_rep` values(NULL,1,1,'here is a reply to your topic of intrest','2020-12-2');
