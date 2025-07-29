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
    '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', -- encriptado con el metodo sha256. Link para generar las contraseñas encriptadas con este metodo 
                                                                        -- https://emn178-github-io.translate.goog/online-tools/sha256.html?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc
    'admin@aquasort.com'
);
