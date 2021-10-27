-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2021 at 10:15 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ass_detabase_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `deviceId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `statue` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`deviceId`, `name`, `statue`) VALUES
(1001, 'Samsung Galaxy S', 1),
(1002, 'Samsung Galaxy S2', 1),
(1003, 'Samsung Galaxy S3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `device_data`
--

CREATE TABLE `device_data` (
  `id` int(11) NOT NULL,
  `deviceId` int(11) NOT NULL,
  `time` varchar(100) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `device_data`
--

INSERT INTO `device_data` (`id`, `deviceId`, `time`, `value`) VALUES
(1, 1001, '01', 351),
(2, 1001, '02', 146),
(3, 1001, '03', 264),
(4, 1001, '04', 479),
(5, 1001, '05', 304),
(6, 1001, '06', 438),
(7, 1001, '07', 373),
(8, 1001, '08', 498),
(9, 1001, '09', 188),
(10, 1001, '10', 305),
(11, 1002, '01', 159),
(12, 1002, '02', 288),
(13, 1002, '03', 409),
(14, 1002, '04', 300),
(15, 1002, '05', 454),
(16, 1002, '06', 223),
(17, 1002, '07', 489),
(18, 1002, '08', 453),
(19, 1002, '09', 336),
(20, 1002, '10', 183),
(21, 1003, '01', 224),
(22, 1003, '02', 398),
(23, 1003, '03', 334),
(24, 1003, '04', 143),
(25, 1003, '05', 188),
(26, 1003, '06', 352),
(27, 1003, '07', 450),
(28, 1003, '08', 478),
(29, 1003, '09', 230),
(30, 1003, '10', 148);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`deviceId`);

--
-- Indexes for table `device_data`
--
ALTER TABLE `device_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deviceId` (`deviceId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `device_data`
--
ALTER TABLE `device_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `device_data`
--
ALTER TABLE `device_data`
  ADD CONSTRAINT `device_data_ibfk_1` FOREIGN KEY (`deviceId`) REFERENCES `device` (`deviceId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
