-- MySQL dump 10.13  Distrib 5.6.26, for Linux (x86_64)
--
-- Host: localhost    Database: prodsec
-- ------------------------------------------------------
-- Server version	5.5.5-10.0.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `csrf_users`
--

DROP TABLE IF EXISTS `csrf_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `csrf_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `user_level` int(11) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `csrf_users`
--

LOCK TABLES `csrf_users` WRITE;
/*!40000 ALTER TABLE `csrf_users` DISABLE KEYS */;
INSERT INTO `csrf_users` VALUES (1,'bscarvell',2),(2,'LordTuskington',1),(3,'Administrator',1);
/*!40000 ALTER TABLE `csrf_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqli_pages`
--

DROP TABLE IF EXISTS `sqli_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sqli_pages` (
  `pageId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`pageId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqli_pages`
--

LOCK TABLES `sqli_pages` WRITE;
/*!40000 ALTER TABLE `sqli_pages` DISABLE KEYS */;
INSERT INTO `sqli_pages` VALUES (1,'About','Hello, this is an about page.'),(2,'Security','We pride ourselves on security, however should you find a security vulnerability, <a href=\"#\">email</a> us!!'),(3,'Contact','Sorry, contact page is currently unavailable due to spam abuse'),(4,'Disclaimer','By using this website, you agree to worship Lord Tusk');
/*!40000 ALTER TABLE `sqli_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqli_users`
--

DROP TABLE IF EXISTS `sqli_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sqli_users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqli_users`
--

LOCK TABLES `sqli_users` WRITE;
/*!40000 ALTER TABLE `sqli_users` DISABLE KEYS */;
INSERT INTO `sqli_users` VALUES (1,'scarvell','NeverStorePlainText'),(2,'LordTuskington','MitreIsMyBFF4Eva');
/*!40000 ALTER TABLE `sqli_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-24  9:52:09
