FROM postgres:10.4-alpine

COPY --chown=postgres ./initDatabases.sql /docker-entrypoint-initdb.d/init.sql
