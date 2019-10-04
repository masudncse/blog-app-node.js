-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 04, 2019 at 03:19 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(17, 'werwer', '2019-09-28 15:47:55', '2019-09-28 15:47:55'),
(18, 'werwer', '2019-09-28 15:48:08', '2019-09-28 15:48:08'),
(20, '', '2019-09-30 15:47:06', '2019-09-30 15:47:06'),
(21, '', '2019-09-30 15:47:44', '2019-09-30 15:47:44'),
(22, 'aaa', '2019-09-30 15:48:39', '2019-09-30 15:48:40'),
(23, 'aaa', '2019-09-30 15:55:54', '2019-09-30 15:55:54'),
(24, 'aaa', '2019-09-30 15:56:11', '2019-09-30 15:56:11'),
(25, 'aaa', '2019-09-30 15:57:08', '2019-09-30 15:57:09'),
(26, 'aaa', '2019-09-30 15:57:33', '2019-09-30 15:57:33'),
(27, 'EEEE', '2019-09-30 16:00:38', '2019-09-30 16:00:38'),
(28, 'EEEE', '2019-09-30 16:16:11', '2019-09-30 16:16:11'),
(29, 'werwerwer', '2019-09-30 16:35:26', '2019-09-30 16:35:26'),
(30, 'wrwer', '2019-09-30 16:54:08', '2019-09-30 16:54:08');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `categoryId`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 17, 'dgh', 'sdfg', '2019-09-30 17:35:48', '2019-09-30 17:35:48'),
(2, 17, 'dgh', 'sdfg', '2019-09-30 17:38:27', '2019-09-30 17:38:27'),
(3, 17, 'dgh', 'sdfg', '2019-09-30 17:38:40', '2019-09-30 17:38:40'),
(4, 17, 'dgh', 'sdfg', '2019-09-30 17:40:26', '2019-09-30 17:40:26'),
(5, 17, 'ert', 'sdh', '2019-09-30 17:41:19', '2019-09-30 17:41:19'),
(6, 17, 'dddd', 'ddd', '2019-09-30 17:42:33', '2019-09-30 17:42:34');

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
