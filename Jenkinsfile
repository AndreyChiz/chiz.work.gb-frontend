pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 15, unit: 'MINUTES')
    }

    environment {
        DOCKER_BUILDKIT = "1"
        REGISTRY = "reg.chiz.work.gd"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "🔄 Checking out code..."
                checkout scm
            }
        }

        stage('Set Variables') {
            steps {
                script {
                    def name = sh(script: "jq -r '.name' package.json", returnStdout: true).trim()
                    def version = sh(script: "jq -r '.version' package.json", returnStdout: true).trim()
                    env.IMAGE_NAME = "${name}:${version}"

                    echo "🔹 IMAGE_NAME=${env.IMAGE_NAME}"
                    echo "🔹 REGISTRY=${env.REGISTRY}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🛠 Building Docker image..."
                sh './scripts/build.sh'
            }
        }

        stage('Push Image to Registry') {
            steps {
                withCredentials([usernamePassword(
                credentialsId: 'privat_docker_registry_cred',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS')]) {

                    sh './scripts/private_registry_push.sh'
                }
            }
        }

        stage('Run docker-compose') {
            steps {
                sh './scripts/run.sh'
            }
        }
    }

    post {
        always {
            echo "✅ Pipeline finished."
            deleteDir()
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
