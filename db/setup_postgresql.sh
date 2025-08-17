#!/bin/bash
# Script to setup PostgreSQL database for IPO project

# Variables
DB_NAME="ipo_db"
SCHEMA_FILE="db/schema_postgresql.sql"
DATA_FILE="db/dummy_data_postgresql.sql"

echo "Creating database $DB_NAME..."
createdb $DB_NAME

echo "Applying schema from $SCHEMA_FILE..."
psql -d $DB_NAME -f $SCHEMA_FILE

echo "Inserting dummy data from $DATA_FILE..."
psql -d $DB_NAME -f $DATA_FILE

echo "Setup complete. You can now connect to the database $DB_NAME."
echo "Example: psql -d $DB_NAME"
