-- ADD SEEDS 1 TABLE AT A TIME

-- Seeds for users table
INSERT INTO users (id, email, password, name, createdAt, updatedAt) VALUES (1, "akhil@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "akhil", "2020-03-24 06:33:43", "2020-03-24 06:33:43");
INSERT INTO users (id, email, password, name, createdAt, updatedAt) VALUES (2, "robert@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "robert", "2020-03-21 06:33:43", "2020-03-21 06:33:43");
INSERT INTO users (id, email, password, name, createdAt, updatedAt) VALUES (3, "bob@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "bob", "2020-03-20 06:33:43", "2020-03-20 06:33:43");
INSERT INTO users (id, email, password, name, createdAt, updatedAt) VALUES (4, "sarah@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "sarah", "2020-03-22 06:33:43", "2020-03-22 06:33:43");
INSERT INTO users (id, email, password, name, createdAt, updatedAt) VALUES (5, "ross@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "ross", "2020-03-22 06:33:43", "2020-03-22 06:33:43");



-- Seeds for dogs table
INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt, ownerID) 
VALUES (1, "fluffy", 3, 30, "female", "brown", no, "happy pup", "mini poodle", 7, 1, 9, "2020-03-22 06:33:43", "2020-03-22 06:33:43", 1);

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt, ownerID) 
VALUES (2, "rover", 1, 50, "male", "grey", no, "playful and friendly", "pit bull", 8, 2, 7, "2020-03-22 06:33:43", "2020-03-22 06:33:43", 2);

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt, ownerID) 
VALUES (3, "bubble", 5, 20, "female", "black", yes, "selective when playing", "shiba inu", 5, 4, 2, "2020-03-22 06:33:43", "2020-03-22 06:33:43", 3);

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt, ownerID) 
VALUES (4, "che che", 8, 45, "female", "blue merle", yes, "smart and cute", "australian shepherd", 10, 3, 3, "2020-03-22 06:33:43", "2020-03-22 06:33:43", 4);

INSERT INTO dogs (id, name, age, weight, gender, color, longFur, description, type, energetic, aggressive, social, createdAt, updatedAt, ownerID) 
VALUES (5, "frost", 4, 15, "male", "white", no, "small but fiesty", "chihuahua", 8, 7, 8, "2020-03-22 06:33:43", "2020-03-22 06:33:43", 5);