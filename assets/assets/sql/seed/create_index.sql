-- Create indexes to optimize queries
CREATE INDEX idx_created_date ON pixes(created_date);
CREATE INDEX idx_picture_tags ON pixes_tags(picture_id, tag_id);
