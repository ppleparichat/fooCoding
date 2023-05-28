-- 1.What are the names of countries with population greater than 8 million
SELECT Name FROM new_world.country
WHERE Population > 8000000;

-- 2.What are the names of countries that have “land” in their names ?
SELECT Name FROM new_world.country
WHERE Name LIKE "%land%";

-- 3.What are the names of the cities with population in between 500,000 and 1 million ?
SELECT Name FROM new_world.country
WHERE Population BETWEEN 500000 AND 1000000;

-- 4.What's the name of all the countries on the continent ‘Europe’ ?
SELECT Name FROM new_world.country
WHERE Continent IN ("Europe");

-- 5.List all the countries in the descending order of their surface areas.
SELECT Name FROM new_world.country
ORDER BY SurfaceArea DESC;

-- 6.What are the names of all the cities in the Netherlands?
SELECT Name FROM new_world.city
WHERE CountryCode = "NLD";

--  Fixed
SELECT city.name FROM city
INNER JOIN country ON city.countrycode = country.code
WHERE country.name = 'Netherlands';


-- 7.What is the population of Rotterdam ?
SELECT Name, Population FROM new_world.city
WHERE city.name = "Rotterdam";

-- 8.What's the top 10 countries by Surface Area ?
SELECT Name FROM new_world.country
ORDER BY SurfaceArea DESC
LIMIT 10;

-- 9. What's the top 10 most populated cities?
SELECT Name, Population FROM new_world.city
ORDER BY Population DESC
LIMIT 10;

-- What is the population of the world ?
SELECT SUM(Population) 
FROM new_world.country;