# update 
[Home](../../README.md)

## updateOne
`Model.update(req.body,{where: {id: 3}})`

##  updateMany (multi values) 

`Model.bulkCreate([...], { updateOnDuplicate: ["name"] })`

Example: 
```
Model.bulkCreate([{
    id: 1,
    title: "kkkk"
},{
    id: 2,
    title: "ererer"
}], { updateOnDuplicate: ["title"] })

```


Source: [sequelize.org](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-bulkCreate)

## updateMany (common value)

### Sequelize
```
User.update({ activationStatus: 'active'}, {
          where: {
              id: [1,2,3,4,5,6,7,8,9,10]
          }
      });
```

### SQL

`UPDATE User SET activationStatus = 'active' WHERE id IN(1,2,3,4,5,6,7,8,9,10);`
