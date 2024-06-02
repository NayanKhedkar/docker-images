# Use the official Keycloak image as the base image
FROM jboss/keycloak:latest

# Set environment variables for admin user
ENV KEYCLOAK_USER=admin
ENV KEYCLOAK_PASSWORD=admin

# Expose ports
EXPOSE 8080

# Set environment variables for PostgreSQL connection
ENV DB_VENDOR=POSTGRES
ENV DB_ADDR=localhost
ENV DB_PORT=5432
ENV DB_DATABASE=keycloak
ENV DB_USER=postgres
ENV DB_PASSWORD=root

# Copy PostgreSQL JDBC driver to the appropriate directory
COPY postgresql-42.2.14.jar /opt/jboss/keycloak/modules/system/layers/base/org/postgresql/main/

# Set the command to run Keycloak standalone
CMD ["-b", "0.0.0.0"]
