Select EmployeeID,FirstName,LastName,Title,BirthDate,HireDate From Employees



CREATE TABLE TestTable( Id INT, Test int)

DECLARE @I INT= 0
WHILE @I <1000000000
BEGIN
	INSERT INTO TestTable VALUES(@I+1,@I+1)
	SET @I=@I+1
END

SELECT * FROM TestTable

Select * From Suppliers

