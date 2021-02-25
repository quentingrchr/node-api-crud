CREATE TABLE `node-api`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `age` INT NOT NULL,
  PRIMARY KEY (`id`));
  
ALTER TABLE `node-api`.`users` 
ADD COLUMN `password` VARCHAR(255) NOT NULL AFTER `age`,
CHANGE COLUMN `name` `name` VARCHAR(255) NOT NULL ;
