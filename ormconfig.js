const path = require('path')

module.exports = {
    "type": "postgres",
    "host": process.env.POSTGRES_HOST || "localhost",
    "port": process.env.DB_PORT || 5432,
    "username": process.env.POSTGRES_USER || "postgres",
    "password": process.env.POSTGRES_PASSWORD || "123",
    "database": process.env.POSTGRES_DB || "app",
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
