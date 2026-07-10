-- Sort students by the courses that they are enrolled in

Use School;

SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    COUNT(g.course_id) AS courses_enrolled
FROM Students s
LEFT JOIN Grades g ON s.student_id = g.student_id
GROUP BY s.student_id, student_name
ORDER BY courses_enrolled DESC;