pipeline {
  agent any
  stages {
    stage('install dependencies') {
      steps {
        nodejs(nodeJSInstallationName: 'node10'){
          sh '''npm install'''
        }
      }
    }
    stage('test') {
      steps {
        nodejs(nodeJSInstallationName: 'node10'){
          sh '''npm run test'''
        }
      }
    }
    stage('lint') {
      steps {
        nodejs(nodeJSInstallationName: 'node10'){
          sh '''npm run lint'''
        }
      }
    }
  }
}