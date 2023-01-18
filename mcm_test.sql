-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2023 at 12:54 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcm_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `ms_mahasiswa`
--

CREATE TABLE `ms_mahasiswa` (
  `id` varchar(40) NOT NULL,
  `npm` varchar(15) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `tempat_lahir` varchar(15) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `gender` char(1) NOT NULL COMMENT 'L/P',
  `agama` char(1) NOT NULL COMMENT 'I/K/H/B/KH',
  `email` varchar(30) NOT NULL,
  `phone` varchar(13) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ms_matkul`
--

CREATE TABLE `ms_matkul` (
  `id` varchar(40) NOT NULL,
  `kode` varchar(5) NOT NULL,
  `nama_matkul` varchar(20) NOT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tr_rencana_studi`
--

CREATE TABLE `tr_rencana_studi` (
  `id` varchar(40) NOT NULL,
  `id_mahasiswa` varchar(40) NOT NULL,
  `id_matkul` varchar(40) NOT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ms_mahasiswa`
--
ALTER TABLE `ms_mahasiswa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ms_matkul`
--
ALTER TABLE `ms_matkul`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tr_rencana_studi`
--
ALTER TABLE `tr_rencana_studi`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
