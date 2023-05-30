CREATE DATABASE todo;

USE todo;

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

CREATE TABLE todo_list (
    list_id INT PRIMARY KEY AUTO_INCREMENT,
    list_name VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE todo_item (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_name VARCHAR(255),
    reminder_date DATETIME,
    completed BOOLEAN,
    list_id INT,
    FOREIGN KEY (list_id) REFERENCES todo_list(list_id)
);

CREATE TABLE tag (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR(255),
    tag_id INT,
    FOREIGN KEY (item_id) REFERENCES todo_item(item_id)
);

