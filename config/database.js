const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('d21210ihq09dp0', 
                                'otbikdlvpflkqf', 
                                's8a23d5470b1089ed801964e2a6316f827abc4a8171e264a6483cbdbb0837a929', {
  host: 'ec2-3-216-89-250.compute-1.amazonaws.com',
  port:5432,
  dialect: 'postgres',
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

