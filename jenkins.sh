cp .env.docker.example .env.docker

sed -i "s,$DATABASE,${env.FATBOAR_DB_NAME}," .env.docker
sed -i "s,$USER,${env.FATBOAR_DB_USER}," .env.docker
sed -i "s,$PASSWORD,${env.FATBOAR_DB_PASSWORD}," .env.docker