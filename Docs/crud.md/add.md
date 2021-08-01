# Add 

[Home](../../README.md)

## insertOne

### Sequelize

`Model.create({title: "hello", description: "world"})`

### SQL

```
INSERT INTO public."Tutorials" (title, description)
VALUES ("title_01", "description_01");

```

## insertMany

### Sequelize

```
User.bulkCreate([
  { username: 'barfooz', isAdmin: true },
  { username: 'foo', isAdmin: true },
  { username: 'bar', isAdmin: false }
]).then(() => { 
  return User.findAll();
}).then(users => {
  console.log(users) 
});

```

Source: [cargo bulkCreate mysql](https://stackoverflow.com/questions/29461908/how-to-do-bulk-insert-using-sequelize-and-node-js/31971563)


### SQL

```
INSERT INTO public."Tutorials" (title, description)
VALUES
    ("title_01", "description_01"),
    ("title_02", "description_02"),
    ("title_03", "description_03");

```
