-- The average grade that is given by each professor

Use school;

SELECT 
    CONCAT(p.first_name, ' ', p.last_name) AS professor_name,
    ROUND(AVG(g.grade), 2) AS average_grade_given
FROM Professors p
JOIN Courses c ON p.professor_id = c.professor_id
JOIN Grades g ON c.course_id = g.course_id
GROUP BY p.professor_id, professor_name
ORDER BY average_grade_given DESC;