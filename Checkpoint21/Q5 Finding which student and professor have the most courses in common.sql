-- Finding which student and professor have the most courses in common

Use School;

SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    CONCAT(p.first_name, ' ', p.last_name) AS professor_name,
    COUNT(c.course_id) AS courses_in_common
FROM Students s
JOIN Grades g ON s.student_id = g.student_id
JOIN Courses c ON g.course_id = c.course_id
JOIN Professors p ON c.professor_id = p.professor_id
GROUP BY s.student_id, p.professor_id, student_name, professor_name
HAVING courses_in_common = (
    SELECT MAX(cnt)
    FROM (
        SELECT COUNT(c2.course_id) AS cnt
        FROM Students s2
        JOIN Grades g2 ON s2.student_id = g2.student_id
        JOIN Courses c2 ON g2.course_id = c2.course_id
        JOIN Professors p2 ON c2.professor_id = p2.professor_id
        GROUP BY s2.student_id, p2.professor_id
    ) AS sub
);