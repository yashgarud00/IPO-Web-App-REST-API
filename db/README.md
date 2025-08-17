# IPO Project Database Setup

## PostgreSQL Database Setup

This project includes PostgreSQL database schema and dummy data scripts located in the `db/` directory.

### Files

- `db/schema_postgresql.sql`: SQL schema to create tables and types.
- `db/dummy_data_postgresql.sql`: SQL script to insert dummy data.
- `db/setup_postgresql.sh`: Bash script to automate database creation, schema setup, and data insertion.

### Prerequisites

- PostgreSQL installed and running.
- `createdb` and `psql` command line tools available.

### Setup Instructions

1. Open a terminal and navigate to the project root directory.
2. Run the setup script:

```bash
bash db/setup_postgresql.sh
```

This will create a new database named `ipo_db`, apply the schema, and insert dummy data.

3. Connect to the database to verify:

```bash
psql -d ipo_db
```

4. Run queries such as:

```sql
SELECT * FROM Companies;
SELECT * FROM IPOs;
SELECT * FROM Documents;
```

### Integration with Frontend

- The frontend dummy data is available in `ipo-frontend/src/utils/dummyData.json`.
- You can modify or extend this JSON file to match your backend data as needed.


