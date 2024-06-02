#!/bin/bash
set -e

# If the data directory is empty, perform the base backup
if [ -z "$(ls -A /var/lib/postgresql/data)" ]; then
  echo "Setting up replication..."
  pg_basebackup -h $POSTGRES_MASTER_HOST -D /var/lib/postgresql/data -U replicator -v -P --wal-method=stream
  echo "standby_mode = 'on'" > /var/lib/postgresql/data/recovery.conf
  echo "primary_conninfo = 'host=$POSTGRES_MASTER_HOST port=$POSTGRES_MASTER_PORT user=replicator password=$REPLICATION_PASSWORD'" >> /var/lib/postgresql/data/recovery.conf
  chown -R postgres:postgres /var/lib/postgresql/data
fi

exec "$@"
