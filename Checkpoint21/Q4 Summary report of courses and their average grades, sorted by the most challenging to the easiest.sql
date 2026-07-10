-- Create a summary report of courses and their average grades, sorted by the most challenging course (course with the lowest average grade) to the easiest course

Use School;

SELECT 
    c.course_name,
    c.course_code,
    COUNT(g.student_id) AS total_students,
    ROUND(AVG(g.grade), 2) AS average_grade
FROM Courses c
JOIN Grades g ON c.course_id = g.course_id
GROUP BY c.course_id, c.course_name, c.course_code
ORDER BY average_grade ASC; 