const Sequelize = require("sequelize");


// 'postgres://user:pass@localhost:5432/db'
const str = 'postgres://shervin1995:MohammadAminKhani@localhost:5432/test-junior'
const sequelize = new Sequelize(str,{
  logging: false
});
 
// test connection
async function postgresConnection() {
    try {
        await sequelize.authenticate(); 
        console.log('postgres connected success!');
    } catch (error) {
        console.error('postgres connection Failed!', error);
    } 
} 

//
postgresConnection(); 
 
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
 


//
module.exports = Tutorial
