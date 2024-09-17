FROM mysql:latest

ENV MYSQL_DATABASE=blog
ENV MYSQL_ROOT_PASSWORD=root

COPY init.sql /docker-entrypoint-initdb.d/