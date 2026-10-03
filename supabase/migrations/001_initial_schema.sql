-- 001_initial_schema.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ENUMS & FUNCTIONS
CREATE TYPE section_type AS ENUM (
    'hero', 'about', 'stats', 'projects', 'experience', 'skills', 
    'timeline', 'achievements', 'certifications', 'github', 'blog', 'contact'
);

-- Function to check if current user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 2. TABLES
CREATE TABLE profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    updated_at TIMESTAMPTZ,
    username TEXT UNIQUE,
    full_name TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE navigation_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label TEXT NOT NULL,
    path TEXT NOT NULL,
    icon TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    visible BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type section_type UNIQUE NOT NULL,
    title TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    visible BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE hero_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    greeting TEXT NOT NULL,
    name_line1 TEXT NOT NULL,
    name_line2 TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE about_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    resume_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    github_url TEXT,
    live_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE project_technologies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE project_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company TEXT NOT NULL,
    position TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    current BOOLEAN DEFAULT false,
    description TEXT,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE education (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    institution TEXT NOT NULL,
    degree TEXT NOT NULL,
    field_of_study TEXT NOT NULL,
    start_date DATE,
    end_date DATE,
    gpa TEXT,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE skill_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES skill_categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    level INTEGER,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    issuer TEXT NOT NULL,
    date DATE,
    url TEXT,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE statistics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE timeline_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    year TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE social_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    platform TEXT NOT NULL,
    url TEXT NOT NULL,
    visible BOOLEAN DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE resume_files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    file_url TEXT NOT NULL,
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);


-- 3. INDEXES
CREATE INDEX idx_navigation_items_visible_order ON navigation_items(visible, "order");
CREATE INDEX idx_sections_visible_order ON sections(visible, "order");
CREATE INDEX idx_projects_visible_order ON projects(visible, "order");
CREATE INDEX idx_experience_visible_order ON experience(visible, "order");
CREATE INDEX idx_education_visible_order ON education(visible, "order");
CREATE INDEX idx_skill_categories_order ON skill_categories("order");
CREATE INDEX idx_skills_category_order ON skills(category_id, "order");
CREATE INDEX idx_achievements_visible_order ON achievements(visible, "order");
CREATE INDEX idx_certifications_visible_order ON certifications(visible, "order");
CREATE INDEX idx_statistics_visible_order ON statistics(visible, "order");
CREATE INDEX idx_timeline_events_visible_order ON timeline_events(visible, "order");
CREATE INDEX idx_activities_visible_order ON activities(visible, "order");
CREATE INDEX idx_blog_posts_published_date ON blog_posts(published, published_at);
CREATE INDEX idx_social_links_visible_order ON social_links(visible, "order");


-- 4. ROW LEVEL SECURITY
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for public SELECT (read-only for visible/published content)
CREATE POLICY "Public profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public site_settings are viewable by everyone" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Visible navigation_items are viewable by everyone" ON navigation_items FOR SELECT USING (visible = true);
CREATE POLICY "Visible sections are viewable by everyone" ON sections FOR SELECT USING (visible = true);
CREATE POLICY "hero_content is viewable by everyone" ON hero_content FOR SELECT USING (true);
CREATE POLICY "about_content is viewable by everyone" ON about_content FOR SELECT USING (true);
CREATE POLICY "Visible projects are viewable by everyone" ON projects FOR SELECT USING (visible = true);
CREATE POLICY "Project tech is viewable by everyone" ON project_technologies FOR SELECT USING (true);
CREATE POLICY "Project images are viewable by everyone" ON project_images FOR SELECT USING (true);
CREATE POLICY "Visible experience is viewable by everyone" ON experience FOR SELECT USING (visible = true);
CREATE POLICY "Visible education is viewable by everyone" ON education FOR SELECT USING (visible = true);
CREATE POLICY "Skill categories are viewable by everyone" ON skill_categories FOR SELECT USING (true);
CREATE POLICY "Skills are viewable by everyone" ON skills FOR SELECT USING (true);
CREATE POLICY "Visible achievements are viewable by everyone" ON achievements FOR SELECT USING (visible = true);
CREATE POLICY "Visible certifications are viewable by everyone" ON certifications FOR SELECT USING (visible = true);
CREATE POLICY "Visible statistics are viewable by everyone" ON statistics FOR SELECT USING (visible = true);
CREATE POLICY "Visible timeline_events are viewable by everyone" ON timeline_events FOR SELECT USING (visible = true);
CREATE POLICY "Visible activities are viewable by everyone" ON activities FOR SELECT USING (visible = true);
CREATE POLICY "Published blog posts are viewable by everyone" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Visible social_links are viewable by everyone" ON social_links FOR SELECT USING (visible = true);
CREATE POLICY "resume_files are viewable by everyone" ON resume_files FOR SELECT USING (true);

-- Admin ALL privileges policies
DO $$
DECLARE
    t TEXT;
BEGIN
    FOR t IN 
        SELECT table_name FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    LOOP
        EXECUTE format('CREATE POLICY "Admins have full access to %I" ON %I USING (is_admin()) WITH CHECK (is_admin());', t, t);
    END LOOP;
END;
$$;

-- Contact Messages Specific Policies
CREATE POLICY "Anyone can insert contact_messages" ON contact_messages FOR INSERT WITH CHECK (true);
-- Note: Admin SELECT, UPDATE, DELETE already handled in the loop above.


-- 5. STORAGE BUCKETS
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies (Requires auth.uid() check for storage objects but ignoring for pure SQL simplicity, here is general admin check)
-- Public read
CREATE POLICY "Public Read Resumes" ON storage.objects FOR SELECT USING (bucket_id = 'resumes');
CREATE POLICY "Public Read Images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
-- Admin write
CREATE POLICY "Admin All Resumes" ON storage.objects FOR ALL USING (bucket_id = 'resumes' AND is_admin()) WITH CHECK (bucket_id = 'resumes' AND is_admin());
CREATE POLICY "Admin All Images" ON storage.objects FOR ALL USING (bucket_id = 'images' AND is_admin()) WITH CHECK (bucket_id = 'images' AND is_admin());


-- 6. SEED DATA

-- Hero Content
INSERT INTO hero_content (greeting, name_line1, name_line2, title, subtitle, description)
VALUES (
    'whoami',
    'ANVITH',
    'KUMAR_',
    'Computer Engineering',
    'Software | Data | AI',
    'I build software that solves real problems.'
);

-- Sections
INSERT INTO sections (type, title, "order", visible) VALUES
    ('hero', 'Hero', 1, true),
    ('about', 'About', 2, true),
    ('stats', 'Stats', 3, true),
    ('projects', 'Projects', 4, true),
    ('experience', 'Experience', 5, true),
    ('skills', 'Skills', 6, true),
    ('timeline', 'Timeline', 7, true),
    ('achievements', 'Achievements', 8, true),
    ('certifications', 'Certifications', 9, true),
    ('github', 'GitHub', 10, true),
    ('blog', 'Blog', 11, false),
    ('contact', 'Contact', 12, true);

-- Navigation Items (example)
INSERT INTO navigation_items (label, path, "order", visible) VALUES
    ('Home', '#hero', 1, true),
    ('About', '#about', 2, true),
    ('Projects', '#projects', 3, true),
    ('Experience', '#experience', 4, true),
    ('Skills', '#skills', 5, true),
    ('Contact', '#contact', 6, true);

-- Projects
WITH p1 AS (
    INSERT INTO projects (title, description, "order")
    VALUES ('HelpMate - Community Volunteer Coordination Platform', 'Built a cross-platform app connecting communities with volunteers using proximity-based geospatial matching.', 1)
    RETURNING id
),
p2 AS (
    INSERT INTO projects (title, description, "order")
    VALUES ('Time Capsule - Encrypted Media Storage App', 'Developed a secure digital time capsule platform with AES-256 encryption for storing and scheduling personal messages and media.', 2)
    RETURNING id
),
p3 AS (
    INSERT INTO projects (title, description, "order")
    VALUES ('AI Code - AI-Powered Code Review Extension', 'Built a Chrome extension that uses AI to provide intelligent code reviews, suggestions, and explanations.', 3)
    RETURNING id
)
INSERT INTO project_technologies (project_id, name, "order")
SELECT id, tech, row_number() over () FROM (
    SELECT id, unnest(ARRAY['React Native', 'FastAPI', 'MongoDB', 'Clerk', 'Stripe', 'Leaflet']) AS tech FROM p1
    UNION ALL
    SELECT id, unnest(ARRAY['MERN', 'AES Encryption', 'NodeMailer', 'Cloudinary']) FROM p2
    UNION ALL
    SELECT id, unnest(ARRAY['React', 'Tailwind CSS', 'Flask', 'SQLite', 'Chrome Extension API', 'Gemini']) FROM p3
) t;

-- Experience
INSERT INTO experience (company, position, start_date, end_date, current, description, "order") VALUES
    ('MindMatrix.io', 'AI App Developer Intern', '2026-02-01', '2026-05-31', false, 'Worked on AI applications.', 1),
    ('NIIT Foundation / Cisco CSR', 'Cyber & AI Workforce Intern', '2026-06-01', '2026-09-30', false, 'Focused on cybersecurity and AI workforce initiatives.', 2);

-- Education
INSERT INTO education (institution, degree, field_of_study, start_date, end_date, gpa, visible) VALUES
    ('New Horizon College of Engineering', 'B.E.', 'Computer Engineering', '2022-08-01', '2026-05-31', '9.11', true);

-- Skill Categories & Skills
WITH c1 AS (INSERT INTO skill_categories(name, "order") VALUES ('PROGRAMMING', 1) RETURNING id),
     c2 AS (INSERT INTO skill_categories(name, "order") VALUES ('DEVELOPMENT', 2) RETURNING id),
     c3 AS (INSERT INTO skill_categories(name, "order") VALUES ('DATABASE', 3) RETURNING id),
     c4 AS (INSERT INTO skill_categories(name, "order") VALUES ('CONCEPTS', 4) RETURNING id),
     c5 AS (INSERT INTO skill_categories(name, "order") VALUES ('SECURITY', 5) RETURNING id),
     c6 AS (INSERT INTO skill_categories(name, "order") VALUES ('TOOLS', 6) RETURNING id)
INSERT INTO skills (category_id, name, "order")
SELECT id, skill, row_number() over() FROM (
    SELECT id, unnest(ARRAY['Java', 'Python', 'JavaScript', 'SQL']) as skill FROM c1
    UNION ALL SELECT id, unnest(ARRAY['React', 'React Native', 'Node.js', 'FastAPI', 'Flask', 'HTML', 'CSS']) FROM c2
    UNION ALL SELECT id, unnest(ARRAY['MongoDB', 'SQL', 'SQLite']) FROM c3
    UNION ALL SELECT id, unnest(ARRAY['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design']) FROM c4
    UNION ALL SELECT id, unnest(ARRAY['Cryptography', 'RBAC', 'Digital Forensics', 'Vulnerability Assessment', 'Cybersecurity']) FROM c5
    UNION ALL SELECT id, unnest(ARRAY['GitHub', 'Postman', 'Tableau', 'Snowflake', 'Android Studio', 'VS Code']) FROM c6
) t;

-- Statistics
INSERT INTO statistics (label, value, "order") VALUES
    ('LeetCode Problems', '370+', 1),
    ('Major Projects', '6+', 2),
    ('Internship Experiences', '2', 3),
    ('CGPA', '9.11', 4);

-- Certifications
INSERT INTO certifications (title, issuer, "order") VALUES
    ('Foundations of Cybersecurity', 'Google', 1),
    ('Cloud Computing', 'IBM', 2),
    ('Data Analyst 101', 'Microsoft', 3),
    ('Introduction to Tableau', 'Simplilearn', 4);

-- Achievements
INSERT INTO achievements (title, "order") VALUES
    ('370+ LeetCode problems solved', 1),
    ('100-day streak badge on LeetCode', 2),
    ('State-level athletics/handball', 3),
    ('VTU Handball Nationals', 4);

-- Social Links
INSERT INTO social_links (platform, url, "order") VALUES
    ('GitHub', 'https://github.com/anvith511', 1),
    ('LinkedIn', '#', 2),
    ('LeetCode', '#', 3),
    ('Email', 'mailto:#', 4);

-- Timeline Events
INSERT INTO timeline_events (year, title, description, "order") VALUES
    ('2022', 'Started Computer Engineering at NHCE', 'Began journey in software engineering.', 1),
    ('2024', 'Software Projects & DSA Practice', 'Focused on core CS concepts and practical projects.', 2),
    ('2025', 'AI Projects & Full-stack Development', 'Built intelligent and full-stack applications.', 3),
    ('2026', 'MindMatrix.io, NIIT/Cisco, Graduation', 'Internships in AI and Cyber, culminating in graduation.', 4);

