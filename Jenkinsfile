pipeline {
  agent any
    environment {
        POSTGRES_PASSWORD = '123'
        POSTGRES_USER = 'postgres'
        POSTGRES_DB = 'apiaTest'
        POSTGRES_HOST = 'postgres'
    }
  tools {nodejs "node"}
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm install'
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
