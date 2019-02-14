const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog-api_db', process.env.ID || '', process.env.PWD ||'', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false,
    },
    timezone: '+08:00'
});

// test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;