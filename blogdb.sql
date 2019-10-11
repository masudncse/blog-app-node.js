-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 11, 2019 at 09:12 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(31, 'Bangladesh', '2019-10-11 08:26:03', '2019-10-11 08:26:03'),
(32, 'International', '2019-10-11 08:26:10', '2019-10-11 08:26:10'),
(33, 'Sports', '2019-10-11 08:26:21', '2019-10-11 08:26:21'),
(34, 'Opinion', '2019-10-11 08:26:27', '2019-10-11 08:26:27'),
(35, 'Economy', '2019-10-11 08:26:34', '2019-10-11 08:26:34'),
(36, 'Entertainment', '2019-10-11 08:26:41', '2019-10-11 08:26:41'),
(37, 'Lifestyle', '2019-10-11 08:26:47', '2019-10-11 08:26:47'),
(38, 'Science', '2019-10-11 08:26:56', '2019-10-11 08:26:56');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) NOT NULL,
  `title` varchar(160) NOT NULL,
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `categoryId`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
(12, 31, 'Abrar’s accused killers were ‘generous’, ‘humble’, say families', 'They were the apples of their families’ eyes. Friends, relatives and neighbours loved them. They were known in their localities to be the generous, humble and bright kids. They were supposed to take responsibility of their families after graduating from one of the most prestigious engineering universities, BUET, in just a few months. Their parents were counting the days.', '2019-10-11 08:32:48', '2019-10-11 08:32:48'),
(13, 31, 'Abrar killing described in detail', 'Chhatra League men brutally beat up BUET student Abrar Fahad with cricket stumps and a thick skipping rope. He fell to the ground writhing in pain. They dragged him up and began thrashing him again. After this assault continued for an hour or so, Abrar began to vomit. He vomited three times and then became inert.', '2019-10-11 08:43:36', '2019-10-11 08:43:36'),
(14, 32, 'Modi-Xi informal summit begins Friday', 'Tamil Nadu\'s picturesque seaside town of Mahabalipuram is all geared up to host the second informal summit between Indian prime minister Narendra Modi and Chinese president Xi Jinping that begins on Friday. ', '2019-10-11 08:44:28', '2019-10-11 08:44:28'),
(15, 33, 'Bangladesh go down fighting against Qatar', 'Bangladesh’s footballers conceded a 0-2 defeat against Asian Champions Qatar in their home match of the joint Qualification round for the FIFA World Cup 2022 and AFC Asian Cup 2023 at a packed Bangabandhu National Stadium (BNS) on Thursday evening, reports UNB.', '2019-10-11 08:45:16', '2019-10-11 08:45:16');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
