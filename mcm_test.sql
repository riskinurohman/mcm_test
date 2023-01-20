-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2023 at 01:36 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `phone` varchar(13) NOT NULL,
  `address` text NOT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ms_mahasiswa`
--

INSERT INTO `ms_mahasiswa` (`id`, `npm`, `nama`, `tempat_lahir`, `tanggal_lahir`, `gender`, `agama`, `email`, `phone`, `address`, `createdAt`, `updatedAt`) VALUES
('32097c57-45be-4aca-b8f9-ce8b0cc6efb9', '43A87007190128', 'Riski Nurohman', 'Jakarta', '2000-03-05', 'L', 'I', 'riskiblog6@gmail.com', '0895555555', 'Bekasi', '2023-01-19 05:31:02.000000', '2023-01-19 05:31:02.000000'),
('6da664ec-aabb-49d8-a241-0a8fd378a42c', '010022', 'Wahyu', 'Jakarta', '2000-03-05', 'L', 'I', 'wahyu@gmail.com', '0895555555', 'Bekasi', '2023-01-19 14:59:43.000000', '2023-01-19 14:59:43.000000'),
('e37b23a6-c29e-462c-8003-473674f16912', '1213121', 'Udin', 'Jakarta', '2000-03-05', 'L', 'I', 'udin@gmail.com', '0895555555', 'Bekasi', '2023-01-19 14:59:25.000000', '2023-01-19 14:59:25.000000');

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

--
-- Dumping data for table `ms_matkul`
--

INSERT INTO `ms_matkul` (`id`, `kode`, `nama_matkul`, `createdAt`, `updatedAt`) VALUES
('05adad06-4eb3-4dce-9046-9310aded6417', 'A006', 'Entrepreneurship', '2023-01-18 13:57:57.000000', '2023-01-18 13:57:57.000000'),
('16938e60-a219-4db0-8594-a1c5ddb263d5', 'A009', 'Pemrograman 2', '2023-01-18 14:01:05.000000', '2023-01-18 14:01:05.000000'),
('1f0b027b-41da-4847-b646-8c12e7884e90', 'A001', 'Pemrograman 1', '2023-01-18 13:56:14.000000', '2023-01-18 13:56:14.000000'),
('2ab294d0-0289-4bba-b57c-73d58f53175c', 'A007', 'Sistem Terintegrasi', '2023-01-18 13:58:17.000000', '2023-01-18 13:58:17.000000'),
('3035ceb5-be8e-4df6-b8de-a027f2c0bc4b', 'A004', 'Jarkom', '2023-01-18 13:57:24.000000', '2023-01-18 13:57:24.000000'),
('456549ea-8e07-4d13-9199-97a40a54e0c5', 'A008', 'Bahasa Inggris', '2023-01-18 13:59:49.000000', '2023-01-18 13:59:49.000000'),
('862088ca-3e07-45db-b3a3-e995eb828277', 'A003', 'Diskrit', '2023-01-18 13:57:04.000000', '2023-01-18 13:57:04.000000'),
('d5e3bf92-6ada-4565-aaf8-28c798dc4598', 'A010', 'Akuntansi', '2023-01-18 14:01:28.000000', '2023-01-18 14:26:22.000000'),
('e5d112bb-d472-4879-98b2-18d66a9d8471', 'A002', 'Kalkulus', '2023-01-18 13:56:49.000000', '2023-01-18 13:56:49.000000'),
('e689735a-42d4-4c85-8402-0e437d7f2de1', 'A005', 'Pendidikan Agama', '2023-01-18 13:57:40.000000', '2023-01-18 13:57:40.000000');

-- --------------------------------------------------------

--
-- Table structure for table `tr_rencana_studi`
--

CREATE TABLE `tr_rencana_studi` (
  `id` varchar(40) NOT NULL,
  `id_mahasiswa` varchar(40) NOT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tr_rencana_studi`
--

INSERT INTO `tr_rencana_studi` (`id`, `id_mahasiswa`, `createdAt`, `updatedAt`) VALUES
('fa4d32d5-6527-4c14-84b9-5ae125a15f5c', '6da664ec-aabb-49d8-a241-0a8fd378a42c', '2023-01-19 17:55:33.000000', '2023-01-19 17:55:33.000000');

-- --------------------------------------------------------

--
-- Table structure for table `tr_rs_detail`
--

CREATE TABLE `tr_rs_detail` (
  `id` varchar(40) NOT NULL,
  `id_tr_rs` varchar(40) NOT NULL,
  `id_matkul` varchar(40) NOT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tr_rs_detail`
--

INSERT INTO `tr_rs_detail` (`id`, `id_tr_rs`, `id_matkul`, `createdAt`, `updatedAt`) VALUES
('004606d9-fd3a-45b1-884a-c180facb1976', 'fa4d32d5-6527-4c14-84b9-5ae125a15f5c', 'e5d112bb-d472-4879-98b2-18d66a9d8471', '2023-01-19 18:08:11.000000', '2023-01-19 18:08:11.000000'),
('9e7e8af0-e9e1-4195-8ffe-d28ff96dcf50', 'fa4d32d5-6527-4c14-84b9-5ae125a15f5c', '1f0b027b-41da-4847-b646-8c12e7884e90', '2023-01-19 18:08:11.000000', '2023-01-19 18:08:11.000000'),
('c69c178c-cd0c-40c7-a191-ee9e7946e1b4', 'fa4d32d5-6527-4c14-84b9-5ae125a15f5c', '862088ca-3e07-45db-b3a3-e995eb828277', '2023-01-19 18:08:11.000000', '2023-01-19 18:08:11.000000');

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

--
-- Indexes for table `tr_rs_detail`
--
ALTER TABLE `tr_rs_detail`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
