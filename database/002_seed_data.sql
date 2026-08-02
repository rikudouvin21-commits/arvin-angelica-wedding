-- ==========================================================
-- Seed Data v1.0
-- Development Sample Invitation
-- ==========================================================

-- Create invitation

insert into invitations (
    token,
    family_name,
    reserved_seats,
    rsvp_deadline
)
values (
    '7QF4KX9MPL2A',
    'Dela Cruz Family',
    4,
    '2026-12-20 23:59:59+08'
);

-- Create guests

insert into guests (
    invitation_id,
    full_name,
    display_order
)
select
    i.id,
    g.full_name,
    g.display_order
from invitations i
cross join (
    values
        ('Arvin Dela Cruz', 1),
        ('Angelica Fulgencio', 2),
        ('Matthew Dela Cruz', 3),
        ('Sophia Fulgencio', 4)
) as g(full_name, display_order)
where i.token = '7QF4KX9MPL2A';