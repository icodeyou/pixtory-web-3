-- Seed pixes table
-- INSERT INTO pixes (platform_id, path, created_date, is_sorted) VALUES
-- ('android_or_ios_id', 'path/to/image.jpg', '2024-12-25 02:01:20', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2023-12-13 00:01:20', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-12 13:10:02', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-12 20:00:00', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-12 00:13:10', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-12 01:00:00', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-20 17:01:20', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-20 10:19:20', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-23 11:11:11', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-23 11:11:11', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-24 11:11:11', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-25 11:11:11', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-26 11:11:11', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-27 11:11:11', 1),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-28 11:11:11', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-28 11:11:11', 0),
-- ('android_or_ios_id', 'path/to/image.jpg', '2025-01-29 11:11:11', 1)

-- Seed tags table
INSERT INTO tags (name) VALUES
('Nature'),
('Travel'),
('Family'),
('Food'),
('Pets');

-- Seed pixes_tags table
INSERT INTO pixes_tags (picture_id, tag_id) VALUES
(1, 1),
(1, 3),
(2, 2),
(3, 4),
(4, 5);