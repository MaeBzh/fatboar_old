cp .env.example.docker .env.docker

sed -i "s/$DATABASE/$FATBOAR_DB_NAME" .env.docker
sed -i "s/$USER/$FATBOAR_DB_USER" .env.docker
sed -i "s/$PASSWORD/$FATBOAR_DB_PASSWORD" .env.docker