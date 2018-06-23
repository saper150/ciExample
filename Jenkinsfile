pipeline {
  agent {
    node {
      label 'node'
    }

  }
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