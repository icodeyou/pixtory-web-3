-- Create pixes table
CREATE TABLE pixes (
    db_id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform_id TEXT NOT NULL,
    path TEXT NOT NULL,
    created_date DATETIME NOT NULL,
    status TEXT NOT NULL
);

-- Create tags table
CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Create pixes_tags table (many-to-many relationship)
CREATE TABLE pixes_tags (
    picture_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY(picture_id) REFERENCES Pictures(id) ON DELETE CASCADE,
    FOREIGN KEY(tag_id) REFERENCES Tags(id) ON DELETE CASCADE,
    PRIMARY KEY (picture_id, tag_id)
);
