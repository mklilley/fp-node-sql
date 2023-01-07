# fp-node-sql

An educational repo that shows how to connect a node backend to a Postgres SQL server.

## Local set-up
- Create a local test Postgres server
  - e.g. using Docker, run `docker run -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`
- Clone this repo
- Add `.env` file with the following variables:
  - `PG_CONN="postgresql://postgres:password@localhost:5432/postgres"`
- Run `npm install`
- Run `npm run dev`

## Cloud deployment

Once you deploy this code, you'll need to specify a `PG_CONN` environment variable on your cloud service provider that reflects the remote database connection parameters. It will take a similar form to the local version:

```
postgresql://{USERNAME}:{PASSWORD}@{HOSTNAME}:{PORT}/{DB_NAME}
```

Typically, a remote postgres server still has `DB_NAME=postgres` as it's default database name and `PORT=5432`.

It's often the case that you'll need to specify `?sslmode=require` at the end of the connection string for cloud based database connections - see [node-postgres docs](https://node-postgres.com/features/connecting) for more specifics.

A [video walkthrough](https://www.youtube.com/watch?v=_SGMs3STWAY) of how to continuiously deploy Node + Postgres to Azure cloud deployment can be found on my YouTube channel.
