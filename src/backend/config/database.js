require('sqlite3').verbose()

module.exports = {
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
    pool:{
        max:100,
        min:0,
        idle:200000,
        acquire: 1000000
    }
}
