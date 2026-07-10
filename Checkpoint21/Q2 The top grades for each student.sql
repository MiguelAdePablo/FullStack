-- The top grades for each student

Use School;

SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    MAX(g.grade) AS top_grade
FROM Students s
JOIN Grades g ON s.student_id = g.student_id
GROUP BY s.student_id, student_name
ORDER BY top_grade DESC;