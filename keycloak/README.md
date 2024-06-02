Run command
docker run -p 8081:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin --name keycloak quay.io/keycloak/keycloak:24.0.3 start-dev