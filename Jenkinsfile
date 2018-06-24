pipeline {
  agent any
  stages {
    stage('install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage('seed database') {
      parallel {
        stage('seed database') {
          steps {
            sh 'npm run seed'
          }
        }
        stage('lint') {
          steps {
            sh 'npm run lint'
          }
        }
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
  tools {
    nodejs 'node'
  }
  environment {
    POSTGRES_PASSWORD = '123'
    POSTGRES_USER = 'postgres'
    POSTGRES_DB = 'postgres'
    POSTGRES_HOST = 'postgres'
  }
}