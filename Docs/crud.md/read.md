
# Read CheatSheet
[Home](../../README.md)

## findAll

### Sequelize

`Model.findAll()`

Example `and` - `or`: 

```
// ----------------------------------------
// ----------------------------------------
const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.or]: [
      { authorId: 12 },
      { authorId: 13 }
    ]
  }
});

// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

// ----------------------------------------
// ----------------------------------------
const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.and]: [
      { authorId: 12 },
      { status: 'active' }
    ]
  }
});

// SELECT * FROM post WHERE authorId = 12 AND status = 'active';

```

### SQL

`select * from public."Tutorials"`

## findOne

### Sequelize

1. `Model.findOne({ where: {title: 'My Title'}})`
2. `Model.findByPk(123)`
3. `findOrCreate()`

Source: [model-querying-finders](https://sequelize.org/master/manual/model-querying-finders.html)

### SQL

`...`

Source: [sequelize.org](https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries)

