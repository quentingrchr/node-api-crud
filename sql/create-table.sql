CREATE TABLE `node-api`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `age` INT NOT NULL,
  PRIMARY KEY (`id`));
  
ALTER TABLE `node-api`.`users` 
ADD COLUMN `password` VARCHAR(255) NOT NULL AFTER `age`,
CHANGE COLUMN `name` `name` VARCHAR(255) NOT NULL ;

INSERT INTO users VALUES (null, 'Oliver', '67', 'jkzdchzq');
INSERT INTO users VALUES (null, 'Benoit', '24', 'ddc');
INSERT INTO users VALUES (null, 'Théo', '18', 'dqqdcdqs');
INSERT INTO users VALUES (null, 'Thomas', '103', 'hzq');
