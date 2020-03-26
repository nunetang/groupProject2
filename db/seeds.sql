-- ADD SEEDS 1 TABLE AT A TIME

-- Seeds for users table
INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES (1, "akhil@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "2020-03-24 06:33:43", "2020-03-24 06:33:43");
INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES (2, "robert@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "2020-03-21 06:33:43", "2020-03-21 06:33:43");
INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES (3, "bob@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "2020-03-20 06:33:43", "2020-03-20 06:33:43");
INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES (4, "sarah@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "2020-03-22 06:33:43", "2020-03-22 06:33:43");
INSERT INTO users (id, email, password, createdAt, updatedAt) VALUES (5, "ross@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "2020-03-22 06:33:43", "2020-03-22 06:33:43");


-- Seeds for owners table
INSERT INTO owners (id, name, petId, zipCode, createdAt, updatedAt) VALUES (1, "akhil", 1, 98011, "2020-03-22 06:33:43", "2020-03-22 06:33:43");
INSERT INTO owners (id, name, petId, zipCode, createdAt, updatedAt) VALUES (2, "robert", 2, 98006, "2020-03-22 06:33:43", "2020-03-22 06:33:43");
INSERT INTO owners (id, name, petId, zipCode, createdAt, updatedAt) VALUES (3, "bob", 3, 98034, "2020-03-22 06:33:43", "2020-03-22 06:33:43");
INSERT INTO owners (id, name, petId, zipCode, createdAt, updatedAt) VALUES (4, "sarah", 4, 98052, "2020-03-22 06:33:43", "2020-03-22 06:33:43");
INSERT INTO owners (id, name, petId, zipCode, createdAt, updatedAt) VALUES (5, "ross", 5, 98055, "2020-03-22 06:33:43", "2020-03-22 06:33:43");


-- Seeds for dogs table
INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt) 
VALUES (1, "fluffy", 3, 30, "female", "brown", false, "happy pup", "mini poodle", 7, 1, 9, "2020-03-22 06:33:43", "2020-03-22 06:33:43");

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt) 
VALUES (2, "rover", 1, 50, "male", "grey", false, "playful and friendly", "pit bull", 8, 2, 7, "2020-03-22 06:33:43", "2020-03-22 06:33:43");

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt) 
VALUES (3, "bubble", 5, 20, "female", "black", true, "selective when playing", "shiba inu", 5, 4, 2, "2020-03-22 06:33:43", "2020-03-22 06:33:43");

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt) 
VALUES (4, "che che", 8, 45, "female", "blue merle", true, "smart and cute", "australian shepherd", 10, 3, 3, "2020-03-22 06:33:43", "2020-03-22 06:33:43");

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt) 
VALUES (5, "frost", 4, 15, "male", "white", false, "small but fiesty", "chihuahua", 8, 7, 8, "2020-03-22 06:33:43", "2020-03-22 06:33:43");