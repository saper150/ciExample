pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh '''npm run test
'''
      }
    }
    stage('lint') {
      steps {
        sh '''npm run lint
'''
      }
    }
  }
}