-- Create a script that populates all of the database tables with sample data

Use school;

-- Insertar Profesores
INSERT INTO Professors (first_name, last_name, department) VALUES
('Darth', 'Vader', 'Fueza oscura'),
('Sheldom', 'Cooper', 'Física'),
('Severus', 'Snape', 'Magia'),
('Richard', 'Stallman', 'informática');

-- Insertar Cursos
INSERT INTO Courses (course_name, course_code, credits, professor_id) VALUES
('Introducción a Star Wars', 'SW101', 3, 1), -- Darth
('Estructuras de sables', 'SW201', 4, 1),  -- Darth
('Ewoks y Wookies', 'CS202', 3, 1), -- Darth
('Progamación GNU', 'PRO301', 4, 4),  -- Richard
('Diversión con banderas', 'FIS101', 4, 2), -- Sheldom
('Física teórica', 'FIS201', 4, 2),     -- Sheldom
('Magia I', 'MAG101', 3, 3),          -- Severus
('Magia lineal', 'MAG201', 3, 3);      -- Severus

-- Insertar Estudiantes
INSERT INTO Students (first_name, last_name, enrollment_date) VALUES
('Pepe', 'Potamo', '2023-09-01'),
('Super', 'Lopez', '2023-09-01'),
('Carlos', 'Ramirez', '2024-01-15'),
('Bart', 'Simpson', '2024-01-15'),
('Bill', 'Gates', '2024-09-01');

-- Insertar Calificaciones (Notas)
-- Pepe toma 3 cursos con Darth (CS101, CS201) y Richard (CS301)
INSERT INTO Grades (student_id, course_id, grade) VALUES
(1, 1, 85.5), (1, 2, 90.0), (1, 3, 88.0), 
(1, 4, 75.0); -- También tomó física con Sheldom

-- Super toma 2 cursos con Darth y 1 con Severus
INSERT INTO Grades (student_id, course_id, grade) VALUES
(2, 1, 92.0), (2, 2, 89.5), (2, 6, 95.0);

-- Carlos toma 2 cursos con Sheldom y 1 con Severus
INSERT INTO Grades (student_id, course_id, grade) VALUES
(3, 4, 80.0), (3, 5, 82.5), (3, 7, 78.0);

-- Bart toma 3 cursos, lo usamos para la query final
INSERT INTO Grades (student_id, course_id, grade) VALUES
(4, 1, 95.0), (4, 2, 98.0), (4, 8, 97.0);

-- Bill toma 1 curso de cada uno
INSERT INTO Grades (student_id, course_id, grade) VALUES
(5, 1, 70.0), (5, 4, 65.5), (5, 6, 85.0);