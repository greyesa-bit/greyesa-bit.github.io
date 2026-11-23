-- 1. Empleados que ganan más de 10.000, de mayor a menor salario
SELECT employee_id, first_name, last_name, salary
FROM t1_employees
WHERE salary > 10000
ORDER BY salary DESC;

-- 2. Empleados contratados desde 2017
SELECT employee_id, first_name, last_name, hire_date
FROM t1_employees
WHERE EXTRACT(YEAR FROM hire_date) >= 2017
ORDER BY hire_date;

-- 3. Nombre de cada empleado con el nombre de su departamento
SELECT e.first_name, e.last_name, d.department_name
FROM t1_employees e
JOIN t1_departments d ON d.department_id = e.department_id
ORDER BY d.department_name, e.last_name;

-- 4. Empleados que no tienen departamento
SELECT employee_id, first_name, last_name
FROM t1_employees
WHERE department_id IS NULL;

-- 5. Cantidad de empleados y salario promedio por departamento
SELECT d.department_name,
       COUNT(*)               AS empleados,
       ROUND(AVG(e.salary), 2) AS salario_promedio
FROM t1_employees e
JOIN t1_departments d ON d.department_id = e.department_id
GROUP BY d.department_name
ORDER BY empleados DESC;

-- 6. Departamentos con más de 5 empleados
SELECT d.department_name, COUNT(*) AS empleados
FROM t1_employees e
JOIN t1_departments d ON d.department_id = e.department_id
GROUP BY d.department_name
HAVING COUNT(*) > 5
ORDER BY empleados DESC;

-- 7. Empleados que ganan más que el promedio de toda la empresa
SELECT first_name, last_name, salary
FROM t1_employees
WHERE salary > (SELECT AVG(salary) FROM t1_employees)
ORDER BY salary DESC;

-- 8. Departamentos que no tienen ningún empleado
SELECT d.department_id, d.department_name
FROM t1_departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM t1_employees e
    WHERE e.department_id = d.department_id
)
ORDER BY d.department_id;

-- 9. Cada empleado con el nombre de su jefe
SELECT e.first_name || ' ' || e.last_name AS empleado,
       j.first_name || ' ' || j.last_name AS jefe
FROM t1_employees e
LEFT JOIN t1_employees j ON j.employee_id = e.manager_id
ORDER BY jefe NULLS FIRST, empleado;

-- 10. Empleados que han cambiado de cargo y cuántas veces
SELECT e.first_name, e.last_name, COUNT(*) AS cambios
FROM t1_job_history h
JOIN t1_employees e ON e.employee_id = h.employee_id
GROUP BY e.first_name, e.last_name
ORDER BY cambios DESC, e.last_name;

-- 11. Insertar un departamento, verlo y deshacer el cambio con ROLLBACK
INSERT INTO t1_departments (department_id, department_name, manager_id, location_id)
VALUES (300, 'Analitica', NULL, 1700);

SELECT department_id, department_name
FROM t1_departments
WHERE department_id = 300;

ROLLBACK;

SELECT department_id, department_name
FROM t1_departments
WHERE department_id = 300;
