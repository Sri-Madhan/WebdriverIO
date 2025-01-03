pipeline{
    agent any;

    parameters{
        choice(name:'SUITE',choices:['Smoke','Regression','E2E'],description: "Choose the suite to run")
    }

    environment {
        SUITE = "${params.SUITE}"
    }

    stages{

        stage('Clean Workspace') {
            steps {
                echo "Cleaning up workspace before starting the build."
                deleteDir()  
            }
        }

         stage('Checkout') {
            steps{
                echo "Checking out code from the repository"
                git branch: 'main', url: 'https://github.com/Sri-Madhan/WebdriverIO.git'

            }
         }

        stage('Test'){
            steps{
                echo "Running ${SUITE} suite"

            }
        }

    }

    post {
        success {
            echo "Success!"
        }
        failure{
            echo "Failure!"
        }
    }
}