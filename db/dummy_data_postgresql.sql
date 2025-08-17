-- Dummy data insertion for Companies, IPOs, and Documents tables

-- Insert Companies
INSERT INTO Companies (company_name, company_logo) VALUES
('Tech Innovators Inc.', 'https://example.com/logos/tech_innovators.png'),
('Green Energy Corp.', 'https://example.com/logos/green_energy.png'),
('HealthPlus Ltd.', 'https://example.com/logos/healthplus.png');

-- Insert IPOs
INSERT INTO IPOs (company_id, price_band, open_date, close_date, issue_size, issue_type, listing_date, status, ipo_price, listing_price, listing_gain, current_market_price, current_return) VALUES
(1, '100-120', '2024-07-01', '2024-07-10', '10 million shares', 'Book Building', '2024-07-15', 'Upcoming', 110.00, NULL, NULL, NULL, NULL),
(2, '80-95', '2024-07-05', '2024-07-15', '15 million shares', 'Fixed Price', '2024-07-20', 'Upcoming', 87.50, NULL, NULL, NULL, NULL),
(3, '150-170', '2024-07-12', '2024-07-20', '8 million shares', 'Book Building', '2024-07-25', 'Upcoming', 160.00, NULL, NULL, NULL, NULL);

-- Insert Documents
INSERT INTO Documents (ipo_id, rhp_pdf, drhp_pdf) VALUES
(1, 'https://example.com/docs/tech_innovators_rhp.pdf', 'https://example.com/docs/tech_innovators_drhp.pdf'),
(2, 'https://example.com/docs/green_energy_rhp.pdf', 'https://example.com/docs/green_energy_drhp.pdf'),
(3, 'https://example.com/docs/healthplus_rhp.pdf', 'https://example.com/docs/healthplus_drhp.pdf');
