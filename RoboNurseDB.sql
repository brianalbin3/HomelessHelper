/* HomelessHelper */

DROP DATABASE IF EXISTS `homelesshelper`;
CREATE DATABASE `homelesshelper`;
USE `homelesshelper`;

/* not needed database was DROPped, PK reverse order to DROP */
DROP TABLE IF EXISTS `prescription`;
DROP TABLE IF EXISTS `medicine`;
DROP TABLE IF EXISTS `events`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`(`id` int NOT NULL AUTO_INCREMENT,
					`email` varchar(100),
					`phoneNumber` varchar(10),
					`resetCode` varchar(8) DEFAULT NULL,
					`resetCodeCreated` datetime,
					`failedResetCodeAttempts` int DEFAULT 0,
		     		`passHash` varchar(100),
					`nameFirst` varchar(50),
					`nameLast` varchar(50),
					`emailValidationLink` varchar(128),
					`emailValidationLinkTime` datetime,
					`emailValidated` boolean DEFAULT false,
					`failedLoginAttempts` int DEFAULT 0,
		     		`lastLogin` datetime,
		     		`contactEmail` varchar(100),
		     		`contactPhone` varchar(10),
		     		`createdOn` datetime,
					PRIMARY KEY(`id`)

					
		    )ENGINE=innodb;

CREATE TABLE `events`( `id` int NOT NULL AUTO_INCREMENT,
			`title` varchar(64),
			`start` datetime,
			`end` datetime,
			`description` varchar(2048),
			PRIMARY KEY(`id`)
			)ENGINE=innodb;

CREATE TABLE `medicine`( `id` int NOT NULL AUTO_INCREMENT, 
			`name` varchar(80),
			`submittedBy` int,
			`createdOn` datetime,
			FOREIGN KEY(`submittedBy`) REFERENCES `users`(`id`),
			PRIMARY KEY(`id`)
		       )ENGINE=innodb;


/* TODO: Finish */
/* Can you take different amounts at different times? */
/* Add for each time of day and med type*/
CREATE TABLE `prescription`(`id` int NOT NULL AUTO_INCREMENT,
					        `userId` int NOT NULL,
						`medicineId` int,
						`amount` int DEFAULT 0,
						`totalMG` int,
						`takeTime` datetime,
						 PRIMARY KEY(`id`),
			                         FOREIGN KEY(`medicineId`) REFERENCES `medicine`(`id`),
						 FOREIGN KEY(`userId`) REFERENCES `users`(`id`))ENGINE=innodb;
