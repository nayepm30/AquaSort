CREATE DATABASE AquaSort;
GO

USE AquaSort;
GO


CREATE TABLE Usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    contraseña VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Ejemplo del usuario

INSERT INTO Usuarios (usuario, contraseña, email) -- campos que llevara la tabla al momento de insertarlo.
VALUES (
    'admin',
    '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', -- encriprado con el metodo sha256
    'admin@aquasort.com'
);
