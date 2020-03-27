-- ADD SEEDS 1 TABLE AT A TIME

-- Seeds for parks table
INSERT INTO Parks (name, createdAt, updatedAt)
	VALUES
		("Seattle Dog Park", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	    ("Sammamish Dog Park", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	    ("Northside Dog Park", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	    ("Kirkland Dog Park", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	    ("Eastside Dog Park", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	    
	INSERT INTO Users (email, password, name, profileImage, createdAt, updatedAt)
	VALUES
		("akhil@yahoo.com", "$2a$10$LKLZFVXcmW6ybr9EqpkiNuzeyFW30oF072vkk/tBCYOCKEdFYwKAW", "Akhil", "https://www.pexels.com/photo/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-photo-736716/", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
	

	INSERT INTO Dogs (name, gender, bio, weight, energy, patience, dominance, profileImage, UserId, createdAt, updatedAt)
	VALUES
		("Fluffy", "Male", "A Good Boy", 70, 3, 6, 2,  "https://pixabay.com/photos/puppy-dog-pet-animal-cute-white-1903313/", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);