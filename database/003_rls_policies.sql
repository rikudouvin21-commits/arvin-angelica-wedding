-- ==========================================================
-- Arvin & Angelica Wedding Invitation System
-- 003 - Row Level Security Policies
-- ==========================================================

-- INVITATIONS
create policy "Public can read invitations"
on invitations
for select
to anon
using (true);

-- GUESTS
create policy "Public can read guests"
on guests
for select
to anon
using (true);

-- GUEST RESPONSES
create policy "Public can read guest responses"
on guest_responses
for select
to anon
using (true);

create policy "Public can insert guest responses"
on guest_responses
for insert
to anon
with check (true);

-- INVITATION MESSAGES
create policy "Public can read invitation messages"
on invitation_messages
for select
to anon
using (true);

create policy "Public can insert invitation messages"
on invitation_messages
for insert
to anon
with check (true);

-- INVITATION VIEWS
create policy "Public can read invitation views"
on invitation_views
for select
to anon
using (true);

create policy "Public can insert invitation views"
on invitation_views
for insert
to anon
with check (true);

create policy "Public can update invitation views"
on invitation_views
for update
to anon
using (true)
with check (true);