-- Build a database with the following tables: Students, Courses, Professors, Grades & Foreign key relationships between the tables

Create DATABASE School;
Use School;

-- 1. Tabla Professors
CREATE TABLE Professors (professor_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, department VARCHAR(50));

-- 2. Tabla Courses (1:N con Professors)
CREATE TABLE Courses ( course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(100) NOT NULL, course_code VARCHAR(20) NOT NULL UNIQUE, credits INT NOT NULL, professor_id INT NOT NULL, FOREIGN KEY (professor_id) REFERENCES Professors(professor_id));

-- 3. Tabla Students
CREATE TABLE Students ( student_id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, enrollment_date DATE NOT NULL);

-- 4. Tabla Grades (Relación N:M entre Students y Courses)
CREATE TABLE Grades ( grade_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT NOT NULL, course_id INT NOT NULL, grade DECIMAL(5,2) NOT NULL CHECK (grade >= 0 AND grade <= 100), FOREIGN KEY (student_id) REFERENCES Students(student_id), FOREIGN KEY (course_id) REFERENCES Courses(course_id), UNIQUE (student_id, course_id)
);