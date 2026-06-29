@echo off
docker compose up -d generate
docker compose exec generate ./generate %*
