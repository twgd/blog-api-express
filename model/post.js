const Sequelize = require('sequelize');
const sequelize = require('./db');

const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    states: {
        type: Sequelize.ENUM,
        values: ['active', 'deleted'],
        allowNull: false,
        defaultValue: 'active',
    },
    createdAt: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: 'TIMESTAMP',
        allowNull: true,
        defaultValue: null,
    },
}, {
    tableName: 'posts',
});

Post.sync(/*{force: true}*/);

module.exports = Post;