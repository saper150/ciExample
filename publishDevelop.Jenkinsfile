pipeline {
  agent any
  stages {
    stage('install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage('run') {
        sh 'pm2 start run.config.js'
    }
  }
  tools {
    nodejs 'node'
  }
  environment {
    POSTGRES_PASSWORD = 'dev'
    POSTGRES_USER = 'dev'
    POSTGRES_DB = 'dev'
    POSTGRES_HOST = 'postgres'
    PORT = '8001'
    PM2_NAME = 'dev'
  }
}
 