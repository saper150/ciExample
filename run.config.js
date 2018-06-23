
const path = require('path')

module.exports = {
  apps: [
    {
      name: process.env.PM2_NAME,
      script: path.join(__dirname, 'dist', 'src', 'index.js'),
      instances: 1,
      env: process.env
    }
  ]
}
