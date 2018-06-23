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
        path.join(__dirname, 'src/entity/**/!(*.spec.js|*.spec.ts)'),
    ],
    "migrations": [
        path.join(__dirname, 'src/entity/**/!(*.spec.js|*.spec.ts)'),
    ],
    "subscribers": [
        path.join(__dirname, 'src/subscriber/**/!(*.spec.js|*.spec.ts)'),
    ]
}
