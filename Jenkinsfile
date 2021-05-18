pipeline {
    agent {
        docker { image 'node:latest' }
    }
    
    stages {
        stage('clone') {
            steps {
                git 'https://github.com/MaeBzh/fatboar.git'
                sh 'cd ../ && ls'
            }
        }
        stage('build')  {
            steps {
                 sh 'sh jenkins.sh'
            }
        }
        stage('test') {
            steps {
                sh 'cd fatboar-api && ls && npm install && npm test'
            }
        }
        stage('SonarQube analysis') {
            steps {
                script {
                docker.image('newtmitch/sonar-scanner').inside('-v /var/run/docker.sock:/var/run/docker.sock --entrypoint="" --net furiousducks_workflow_jenkins-nw') {
                    sh '''/usr/local/bin/sonar-scanner \\
                        -Dsonar.host.url=http://sonarqube:9000 \\
                        -Dsonar.projectBaseDir=.\\
                        -Dsonar.projectKey=fatboar-api \\
                        -Dsonar.projectName=fatboar-api \\
                        -Dsonar.login=0245d27f63f243a6776bdf7938979755186e435a\\
                        -Dsonar.verbose=true''' 
                    }
                
                }
            }
        }
    }
} 
