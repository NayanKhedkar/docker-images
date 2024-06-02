create user replicator with replication encrypted password 'root';
select pg_create_physical_replication_slot('replication_slot');