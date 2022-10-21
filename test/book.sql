/*
 Navicat Premium Data Transfer

 Source Server         : lab1-library
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:30306
 Source Schema         : books

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 22/09/2022 20:14:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `genre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of book
-- ----------------------------
BEGIN;
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (1, '活着', 'Fiction', '2011', '余华');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (2, '你当像鸟飞往你的山', 'Biography & Autobiography - Artists, Architects & Photographers', '2019', '塔拉·韦斯特弗');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (3, '百年孤独', 'Fiction - Classics', '2011', '加西亚•马尔克斯, 范晔');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (4, '蛤蟆先生去看心理医生', 'Psychology', '2020', '戴博德·罗伯特');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (5, '月亮与六便士', 'Fiction - Literary Fiction', '2019', '威廉·萨默赛特·毛姆');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (6, 'It Ends with Us', 'Romance - Contemporary Romance', '2016', 'Colleen Hoover');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (7, 'The Song of Achilles: A Novel', 'Fiction - Historical', '2012', 'Madeline Miller');
INSERT INTO `book` (`id`, `name`, `genre`, `date`, `author`) VALUES (8, 'A Little Life', 'Fiction - American Fiction', '2015', 'Hanya Yanagihara');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
