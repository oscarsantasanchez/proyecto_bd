-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurante
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Cerveza',5),(2,'Vino',10),(3,'Gaseosa',2),(4,'Agua',1.5),(5,'Hamburguesa',8),(6,'Pizza',10),(7,'Refresco de cola',2.5),(8,'Refresco de naranja',2.5),(9,'Agua mineral',1.75),(10,'Jugo de naranja',2),(11,'Ensalada verde',4),(12,'Sopa de pollo',3.5),(13,'Spaghetti al pesto',7),(14,'Pollo a la parrilla',9),(15,'Filete de salmón',12),(16,'Tacos al pastor',6),(17,'Burrito de carne asada',7),(18,'Papas fritas',3),(19,'Tarta de queso',5),(20,'Brownie con helado',6),(21,'Café americano',2),(22,'Café expreso',2.5),(23,'Té verde',2),(24,'Mojito',7),(25,'Margarita',8),(26,'Piña colada',8.5),(27,'Mojito sin alcohol',5),(28,'Cóctel de frutas',4),(29,'Smoothie de fresa',3.5),(30,'Batido de chocolate',4.5),(31,'Jamón ibérico',15),(32,'Paella',12),(33,'Tortilla española',6),(34,'Gazpacho',4),(35,'Pulpo a la gallega',14),(36,'Patatas bravas',5),(37,'Churros con chocolate',4),(38,'Fabada asturiana',10),(39,'Sangría',7),(40,'Tarta de Santiago',8),(41,'Crema catalana',6),(42,'Croquetas de jamón',7),(43,'Mariscada',20),(44,'Calamares a la romana',9),(45,'Pisto',6),(46,'Rabo de toro',16),(47,'Pimientos de padrón',5),(48,'Pescado frito',10),(49,'Turrón',5),(50,'Queso manchego',8),(51,'Rabas',12),(52,'Cocido montañés',11),(53,'Quesada pasiega',9),(54,'Sobaos pasiegos',6),(55,'Anchoas de Cantabria',13),(56,'Bonito del norte en conserva',8),(57,'Orujo de Liébana',10),(58,'Sobao Joselín',7),(59,'Caracoles de Cantabria',15),(60,'Queso picón de Tresviso',14),(61,'Cecina de ciervo',18),(62,'Sidra cántabra',6),(63,'Miénteme',4),(64,'Truchas a la pasiega',10),(65,'Tarta de hojaldre',9),(66,'Anchoas de Laredo',12),(67,'Cachopo cántabro',16),(68,'Roscos de anís',5),(69,'Orujo de hierbas',11),(70,'Revuelto de erizos de mar',20),(71,'Carne guisada con patatas',14),(72,'Empanada de carne',8),(73,'Croquetas de cocido',7),(74,'Bocartes fritos',11),(75,'Sorropotún',13),(76,'Queso de Nata',12),(77,'Empanadillas de Bonito',9),(78,'Caracoles a la montañesa',15),(79,'Morcilla de Burgos',7),(80,'Tarta de queso de Camaleño',10),(81,'Sobrassada',9),(82,'Pimiento relleno de marisco',18),(83,'Tarta de nuez de Valderredible',11),(84,'Cocido Lebaniego',12),(85,'Bonito encebollado',14),(86,'Sopa de pescado de Santoña',11),(87,'Roscón de Reyes',8),(88,'Leche frita',7),(89,'Escalopines al Cabrales',16),(90,'Cochinillo asado',20),(91,'Cachopín',13),(92,'Calamares en su tinta',15),(93,'Queso de tres leches',11),(94,'Merluza en salsa verde',13),(95,'Hojaldre de sobaos y nata',10),(96,'Sorbete de orujo',6),(97,'Paté de ciervo',9),(98,'Bollos preñaos',5),(99,'Arroz con leche',6),(100,'Sobrasada de Cantabria',8);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04 22:29:41
