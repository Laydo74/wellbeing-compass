CREATE TYPE public.app_role AS ENUM ('owner');

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL DEFAULT 'owner',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own role" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE TABLE public.content_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_key text NOT NULL,
  section_key text NOT NULL,
  eyebrow text,
  title text NOT NULL,
  body text NOT NULL DEFAULT '',
  cta_label text,
  cta_url text,
  image_url text,
  image_alt text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (page_key, section_key)
);
GRANT SELECT ON public.content_entries TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.content_entries TO authenticated;
GRANT ALL ON public.content_entries TO service_role;
ALTER TABLE public.content_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published content is public" ON public.content_entries FOR SELECT TO anon, authenticated USING (is_published OR public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners create content" ON public.content_entries FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners update content" ON public.content_entries FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'owner')) WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners delete content" ON public.content_entries FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'owner'));
CREATE TRIGGER content_entries_updated BEFORE UPDATE ON public.content_entries FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.blog_categories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.blog_categories TO authenticated;
GRANT ALL ON public.blog_categories TO service_role;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published categories are public" ON public.blog_categories FOR SELECT TO anon, authenticated USING (is_published OR public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners create categories" ON public.blog_categories FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners update categories" ON public.blog_categories FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'owner')) WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners delete categories" ON public.blog_categories FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'owner'));
CREATE TRIGGER blog_categories_updated BEFORE UPDATE ON public.blog_categories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  cover_image_url text,
  cover_image_alt text,
  category_id uuid REFERENCES public.blog_categories(id) ON DELETE SET NULL,
  seo_title text,
  seo_description text,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.blog_posts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published posts are public" ON public.blog_posts FOR SELECT TO anon, authenticated USING (is_published OR public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners create posts" ON public.blog_posts FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners update posts" ON public.blog_posts FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'owner')) WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners delete posts" ON public.blog_posts FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'owner'));
CREATE TRIGGER blog_posts_updated BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.booking_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text CHECK (char_length(phone) <= 40),
  country text NOT NULL CHECK (char_length(country) <= 80),
  area_of_support text NOT NULL CHECK (char_length(area_of_support) <= 120),
  session_format text NOT NULL CHECK (char_length(session_format) <= 60),
  availability text NOT NULL CHECK (char_length(availability) <= 200),
  contact_method text NOT NULL CHECK (char_length(contact_method) <= 40),
  message text CHECK (char_length(message) <= 2000),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','closed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.booking_enquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.booking_enquiries TO authenticated;
GRANT ALL ON public.booking_enquiries TO service_role;
ALTER TABLE public.booking_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request a session" ON public.booking_enquiries FOR INSERT TO anon, authenticated WITH CHECK (status = 'new');
CREATE POLICY "Owners read enquiries" ON public.booking_enquiries FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners update enquiries" ON public.booking_enquiries FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'owner')) WITH CHECK (public.has_role(auth.uid(), 'owner'));
CREATE POLICY "Owners delete enquiries" ON public.booking_enquiries FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'owner'));
CREATE TRIGGER booking_enquiries_updated BEFORE UPDATE ON public.booking_enquiries FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX content_entries_public_idx ON public.content_entries (page_key, is_published, sort_order);
CREATE INDEX blog_posts_public_idx ON public.blog_posts (is_published, published_at DESC);
CREATE INDEX booking_enquiries_created_idx ON public.booking_enquiries (created_at DESC);

INSERT INTO public.blog_categories (name, slug, sort_order) VALUES
('Wellbeing','wellbeing',1),('Leadership','leadership',2),('Women','women',3),('Men','men',4),('Relationships','relationships',5),('Life Transitions','life-transitions',6),('Executive Wellbeing','executive-wellbeing',7);

INSERT INTO public.content_entries (page_key, section_key, eyebrow, title, body, cta_label, cta_url, sort_order, is_published) VALUES
('home','hero','PRIVATE WELLBEING ADVISORY','Wellbeing, reimagined for those who carry more.','Private, thoughtful support for individuals, families and leaders across the Gulf—designed around the realities of a demanding life.','Book a Private Session','/book/',0,true),
('home','positioning','A MORE PERSONAL STANDARD','Clarity begins with space to think.','GULFWELLBEING offers a calm, considered setting to navigate pressure, relationships, transitions and the responsibilities that rarely pause. Every conversation is shaped around you.','Discover the Approach','/about/#approach',1,true),
('home','privacy','DESIGNED WITH DISCRETION','A private setting. A considered pace.','Your experience is approached with care, restraint and respect. Sessions are personal, discreet and structured around what feels most useful to you.','Book a Private Session','/book/',8,true),
('global','contact','CONTACT','Private enquiries','Contact details will be added here.','','',0,true),
('about','practitioner','THE PRACTITIONER','Tarkan, Wellbeing Advisor','[Add professional biography here]','','',0,true),
('about','approach','THE APPROACH','Personal, practical and deeply considered.','The work begins by understanding your context without assumption. Together, we create space for perspective, steadier decisions and sustainable ways forward.','','',1,true),
('about','private-confidential','PRIVATE & CONFIDENTIAL','Discretion is part of the experience.','Sessions take place in a private, respectful setting designed with discretion in mind. Your circumstances shape the pace and focus of every conversation.','Book a Private Session','/book/',2,true);