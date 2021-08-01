# delete cheatsheet
[Home](../../README.md)

## deleteOne

### Sequelize
`Model.destroy({ where: { id: 4 }})`

### SQL
`delete from public."Tutorials" where id=2`

## deleteMany

### Sequelize
`Model.destroy({ where: { id: [1,2,3,4] }})`

### SQL
`delete from public."Tutorials" where id in (2,3,4)`
