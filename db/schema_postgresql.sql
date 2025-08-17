-- PostgreSQL schema for Companies, IPOs, and Documents tables

CREATE TABLE Companies (
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    company_logo VARCHAR(255)
);

CREATE TYPE ipo_status AS ENUM ('Upcoming', 'Open', 'Closed', 'Listed');

CREATE TABLE IPOs (
    ipo_id SERIAL PRIMARY KEY,
    company_id INT NOT NULL REFERENCES Companies(company_id) ON DELETE CASCADE,
    price_band VARCHAR(50),
    open_date DATE,
    close_date DATE,
    issue_size VARCHAR(100),
    issue_type VARCHAR(50),
    listing_date DATE,
    status ipo_status,
    ipo_price NUMERIC(10,2),
    listing_price NUMERIC(10,2),
    listing_gain NUMERIC(5,2),
    current_market_price NUMERIC(10,2),
    current_return NUMERIC(5,2)
);

CREATE TABLE Documents (
    document_id SERIAL PRIMARY KEY,
    ipo_id INT NOT NULL REFERENCES IPOs(ipo_id) ON DELETE CASCADE,
    rhp_pdf VARCHAR(255),
    drhp_pdf VARCHAR(255)
);
