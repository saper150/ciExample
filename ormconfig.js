const path = require('path')

module.exports = {
    "type": "postgres",
    "host": process.env.DB_HOST || "localhost",
    "port": process.env.DB_PORT || 5432,
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "123",
    "database": process.env.DB_DATABASE || "app",
    "synchronize": true,
    "logging": false,
    "entities": [
        path.join(__dirname, 'src/entity/**/*.ts'),
        path.join(__dirname, 'src/entity/**/*.js')
    ],
    "migrations": [
        path.join(__dirname, 'src/entity/**/*.js'),
        path.join(__dirname, 'src/entity/**/*.ts')
    ],
    "subscribers": [
        path.join(__dirname, 'src/subscriber/**/*.ts'),
        path.join(__dirname, 'src/subscriber/**/*.js')
    ]
}
