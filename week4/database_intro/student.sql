
CREATE TABLE students
(
  id SERIAL4 PRIMARY KEY, 
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  dob DATE,
  highscore FLOAT8
);

INSERT INTO students (firstname, lastname, dob, highscore)
VALUES ('John', 'Smith', '29/06/2015', 4.1);

INSERT INTO students (firstname, lastname, dob, highscore)
VALUES ('Mary', 'Jones', '01/01/1999', 3.7);

INSERT INTO students (firstname, lastname, dob, highscore)
VALUES ('Tom', 'White', '09/01/1998', 4.9);

INSERT INTO students (firstname, lastname, dob, highscore)
VALUES ('Jane', 'Smith', '02/05/1986', 4.3);


