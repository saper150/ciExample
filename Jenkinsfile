pipeline {
  agent any
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
