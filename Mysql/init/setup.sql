USE nodedb;

CREATE TABLE IF NOT EXISTS nodedb.people (
    id INTEGER auto_increment,
    name VARCHAR(255),
    PRIMARY KEY (id)
);