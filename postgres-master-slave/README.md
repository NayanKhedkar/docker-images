Explanation:

We define two services: postgres-master and postgres-slave.
Each service uses the official PostgreSQL Docker image.
Port 5432 is exposed for the master, and port 5433 (different from the master's port) is exposed for the slave to avoid conflicts.
We set environment variables POSTGRES_USER and POSTGRES_PASSWORD for both services.
We mount volumes for persistent data storage. You need to create directories named master and slave in the same directory as your docker-compose.yml file.
For the slave service, we provide a custom command to configure it as a read-only replica by setting max_wal_senders to 0 and hot_standby to on.
Both services are connected to the same Docker network (postgres-network) to allow communication between them.
To run the services, navigate to the directory containing the docker-compose.yml file and run:

command -
docker-compose u

https://github.com/eremeykin/pg-primary-replica.git