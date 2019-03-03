-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 03, 2019 at 10:07 PM
-- Server version: 5.6.41
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `cnt_id` int(12) NOT NULL,
  `cnt_code` varchar(24) NOT NULL,
  `cnt_title` varchar(128) NOT NULL,
  `cnt_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`cnt_id`, `cnt_code`, `cnt_title`, `cnt_created`) VALUES
(1, '972', 'israel', '2019-03-03 07:00:38'),
(2, '33', 'franch', '2019-03-03 07:00:38');

-- --------------------------------------------------------

--
-- Table structure for table `numbers`
--

CREATE TABLE `numbers` (
  `num_id` int(12) NOT NULL,
  `cnt_id` int(12) NOT NULL,
  `num_number` varchar(24) NOT NULL,
  `num_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `numbers`
--

INSERT INTO `numbers` (`num_id`, `cnt_id`, `num_number`, `num_created`) VALUES
(1, 1, '37638893', '2019-03-01 15:38:52'),
(2, 2, '387398873', '2019-03-01 15:38:52');

-- --------------------------------------------------------

--
-- Table structure for table `send_log`
--

CREATE TABLE `send_log` (
  `log_id` int(12) NOT NULL,
  `usr_id` int(12) NOT NULL,
  `num_id` int(12) NOT NULL,
  `log_message` varchar(128) NOT NULL,
  `log_success` tinyint(1) NOT NULL DEFAULT '1',
  `log_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `send_log`
--

INSERT INTO `send_log` (`log_id`, `usr_id`, `num_id`, `log_message`, `log_success`, `log_created`) VALUES
(1, 1, 1, 'test', 1, '2019-03-01 13:40:36'),
(2, 1, 2, 'test', 0, '2019-03-01 13:40:36'),
(3, 1, 1, 'test', 1, '2019-02-01 13:40:47'),
(4, 1, 1, 'test', 0, '2019-02-01 13:40:47'),
(5, 2, 2, 'test', 1, '2019-01-01 13:40:59'),
(6, 2, 2, 'test', 1, '2019-01-01 13:40:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usr_id` int(12) NOT NULL,
  `usr_name` varchar(128) NOT NULL,
  `usr_active` tinyint(1) NOT NULL DEFAULT '1',
  `usr_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`cnt_id`);

--
-- Indexes for table `numbers`
--
ALTER TABLE `numbers`
  ADD PRIMARY KEY (`num_id`);

--
-- Indexes for table `send_log`
--
ALTER TABLE `send_log`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `cnt_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `numbers`
--
ALTER TABLE `numbers`
  MODIFY `num_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `send_log`
--
ALTER TABLE `send_log`
  MODIFY `log_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `usr_id` int(12) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
