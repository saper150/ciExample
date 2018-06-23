pipeline {
  agent any
    environment {
        POSTGRES_PASSWORD = '123'
        POSTGRES_USER = 'postgres'
        POSTGRES_DB = 'postgres'
        POSTGRES_HOST = 'postgres'
    }
  tools {nodejs "node"}
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage("seed database") {
      steps {
        sh 'npm run seed'
      }
    }
    stage("test") {
      steps {
        sh 'npm test'
      }
    }
     stage("lint") {
      steps {
        sh 'npm lint'
      }
    }
  }
}
