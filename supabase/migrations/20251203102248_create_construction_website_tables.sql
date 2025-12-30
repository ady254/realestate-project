/*
  # Construction Company Website Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Short description
      - `full_description` (text) - Detailed description
      - `image_url` (text) - Project image URL
      - `category` (text) - Project category (Residential, Commercial, etc.)
      - `completion_date` (date) - When project was completed
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text) - Client's name
      - `company` (text) - Client's company (optional)
      - `content` (text) - Testimonial text
      - `rating` (integer) - Rating out of 5
      - `image_url` (text) - Client photo URL (optional)
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone (optional)
      - `message` (text) - Message content
      - `status` (text) - Submission status (new, in_progress, completed)
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on all tables
    - Public read access for projects and testimonials
    - Authenticated users can manage all data
    - Anyone can submit contact forms
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  full_description text,
  image_url text NOT NULL,
  category text NOT NULL,
  completion_date date,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text,
  content text NOT NULL,
  rating integer DEFAULT 5,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);