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
                withEnv(["PATH+EXTRA=/usr/local/bin", "PROFILE=${PROFILE}"]) {
                    sh "npm run wdio ${PROFILE}"  
                }
            }
        }

        stage('Zip Test Reports') {
            steps {
               echo "Zipping the test reports and console logs..."
                script {
                   sh 'zip -r "build-reports.zip" allure-results logs'
                } 
            }
        }

    }

    post {
        success {
            echo "Success!"
            emailext(
            subject: "Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: "The build and tests have completed successfully.\n\nYou can check the build details here: ${env.BUILD_URL}",
            to: "srimadhan218@gmail.com",  
            attachmentsPattern: 'build-reports.zip'
        )
        }
        failure{
            echo "Failure!"
                    emailext(
            subject: "Build Failure: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
            body: "The build has failed. Please check the logs for details.\n\nBuild URL: ${env.BUILD_URL}",
            to: "srimadhan218@gmail.com", 
            attachmentsPattern: 'build-reports.zip'
        )
        }
    }
}