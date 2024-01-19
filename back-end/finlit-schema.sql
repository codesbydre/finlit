CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

--

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  difficulty VARCHAR(50),
  topic VARCHAR(100)
);

CREATE TABLE quiz_questions (
  id SERIAL PRIMARY KEY,
  quiz_id INTEGER REFERENCES quizzes(id),
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D'))
);


CREATE TABLE quiz_attempts (
  id SERIAL PRIMARY KEY,
  user_username VARCHAR(25) REFERENCES users(username),
  quiz_id INTEGER REFERENCES quizzes(id),
  score INTEGER NOT NULL,
  attempt_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--- 

CREATE TABLE user_responses (
id SERIAL PRIMARY KEY,
attempt_id INTEGER REFERENCES quiz_attempts(id),
question_id INTEGER REFERENCES quiz_questions(id),
user_answer CHAR(1)
);



CREATE TABLE saved_articles (
  id SERIAL PRIMARY KEY,
  user_username VARCHAR(25) REFERENCES users(username),
  article_title TEXT NOT NULL,
  article_description TEXT,  
  article_image_url TEXT,    
  article_link TEXT NOT NULL,
  article_published_at TIMESTAMP, 
  saved_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- **** MAKE SURE THESE TABLES ALIGNED WITH NEWSAPI ***

CREATE TABLE user_interests (
  id SERIAL PRIMARY KEY,
  user_username VARCHAR(25) REFERENCES users(username),
  interest VARCHAR(100) NOT NULL
);