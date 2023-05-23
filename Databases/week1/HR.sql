-- create a database HR
CREATE DATABASE HR;

-- create a table locations
USE HR;

CREATE TABLE locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(255),
    country VARCHAR(255)
);

-- create a table employee
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(50),
    salary INT,
    location_id INT,
    FOREIGN KEY (location_id) REFERENCES locations(id)
);

-- Insert 10-20 rows in each table with relevant fields. (Make sure that you have relevant relations)
INSERT INTO locations (city, country)
VALUES
   ('London', 'UK'),
   ('Paris', 'France'),
   ('Sydney', 'Australia'),
   ('Tokyo', 'Japan'),
   ('Berlin', 'Germany'),
   ('Toronto', 'Canada'),
   ('Madrid', 'Spain'),
   ('Moscow', 'Russia'),
   ('Rome', 'Italy'),
   ('Dubai', 'UAE'),
   ('Sao Paulo', 'Brazil'),
   ('New York', 'USA');

INSERT INTO employee (employee_name, salary, location_id)
VALUES
    ('นก', 5000, 1),
    ('แมว', 8000, 2),
    ('ไก่', 7000, 3),
    ('หมู', 9000, 4),
    ('แดง', 3000, 5),
    ('นาง', 9000, 6),
    ('หน่อย', 7000, 7),
    ('ดา', 2000, 8),
    ('เปี๊ยก', 5000, 9),
    ('เป็ด', 8000, 10),
    ('เปิ้ล', 1000, 11),
    ('เจ', 6000, 12);

SELECT * FROM employee;