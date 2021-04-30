cp .env.docker.example .env.docker

sed -i "s,$$DATABASE,${DB_NAME}," .env.docker
sed -i "s,$$USER,${DB_USER}," .env.docker
sed -i "s,$$PASSWORD,${DB_PASSWORD}," .env.docker
