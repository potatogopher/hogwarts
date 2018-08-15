/* Replace with your SQL commands */
CREATE TABLE student_courses (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  grade VARCHAR(30) NOT NULL,

  student_id INT(6) NOT NULL,
  course_id INT(6) NOT NULL,

  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id
) 