SELECT 
    'day' AS period_type,
    strftime('%Y-%m-%d 00:00:00', created_date) AS base_date,
    SUM(CASE WHEN status = 'sorted' THEN 1 ELSE 0 END) AS sorted_pictures,
    COUNT(*) AS total_pictures
FROM pixes
GROUP BY strftime('%Y-%m-%d 00:00:00', created_date)
ORDER BY created_date DESC;
