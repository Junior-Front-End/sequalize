# Create Table 

[Home](../../README.md)

### Sequelize
 
``` 
const Tutorial = sequelize.define("Tutorial", { 
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    } 
});

```

### SQL

```
DROP TABLE IF EXISTS Tutorials;

CREATE TABLE Tutorials (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

```