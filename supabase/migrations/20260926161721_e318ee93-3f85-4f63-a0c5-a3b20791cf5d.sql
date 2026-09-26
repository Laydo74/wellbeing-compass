CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA private TO authenticated;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated;

DROP POLICY "Published content is public" ON public.content_entries;
CREATE POLICY "Published content is public" ON public.content_entries FOR SELECT TO anon, authenticated USING (is_published OR private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners create content" ON public.content_entries;
CREATE POLICY "Owners create content" ON public.content_entries FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners update content" ON public.content_entries;
CREATE POLICY "Owners update content" ON public.content_entries FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'owner')) WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners delete content" ON public.content_entries;
CREATE POLICY "Owners delete content" ON public.content_entries FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'owner'));

DROP POLICY "Published categories are public" ON public.blog_categories;
CREATE POLICY "Published categories are public" ON public.blog_categories FOR SELECT TO anon, authenticated USING (is_published OR private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners create categories" ON public.blog_categories;
CREATE POLICY "Owners create categories" ON public.blog_categories FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners update categories" ON public.blog_categories;
CREATE POLICY "Owners update categories" ON public.blog_categories FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'owner')) WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners delete categories" ON public.blog_categories;
CREATE POLICY "Owners delete categories" ON public.blog_categories FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'owner'));

DROP POLICY "Published posts are public" ON public.blog_posts;
CREATE POLICY "Published posts are public" ON public.blog_posts FOR SELECT TO anon, authenticated USING (is_published OR private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners create posts" ON public.blog_posts;
CREATE POLICY "Owners create posts" ON public.blog_posts FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners update posts" ON public.blog_posts;
CREATE POLICY "Owners update posts" ON public.blog_posts FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'owner')) WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners delete posts" ON public.blog_posts;
CREATE POLICY "Owners delete posts" ON public.blog_posts FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'owner'));

DROP POLICY "Owners read enquiries" ON public.booking_enquiries;
CREATE POLICY "Owners read enquiries" ON public.booking_enquiries FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners update enquiries" ON public.booking_enquiries;
CREATE POLICY "Owners update enquiries" ON public.booking_enquiries FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'owner')) WITH CHECK (private.has_role(auth.uid(), 'owner'));
DROP POLICY "Owners delete enquiries" ON public.booking_enquiries;
CREATE POLICY "Owners delete enquiries" ON public.booking_enquiries FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'owner'));

DROP FUNCTION public.has_role(uuid, public.app_role);