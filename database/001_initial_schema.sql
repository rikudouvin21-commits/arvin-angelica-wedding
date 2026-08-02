-- ==========================================================
-- Arvin & Angelica Wedding Invitation System
-- Database Schema v1.0
-- ==========================================================

create extension if not exists pgcrypto;

-- ==========================================================
-- ENUMS
-- ==========================================================

do $$
begin
    if not exists (
        select 1
        from pg_type
        where typname = 'invitation_status'
    ) then
        create type invitation_status as enum (
            'pending',
            'partial',
            'completed'
        );
    end if;
end $$;

do $$
begin
    if not exists (
        select 1
        from pg_type
        where typname = 'guest_response_status'
    ) then
        create type guest_response_status as enum (
            'accepted',
            'declined'
        );
    end if;
end $$;

do $$
begin
    if not exists (
        select 1
        from pg_type
        where typname = 'device_type'
    ) then
        create type device_type as enum (
            'mobile',
            'desktop',
            'tablet',
            'unknown'
        );
    end if;
end $$;

-- ==========================================================
-- INVITATIONS
-- ==========================================================

create table if not exists invitations (

    id uuid primary key default gen_random_uuid(),

    token text not null unique,

    family_name text not null,

    reserved_seats integer not null
        check (reserved_seats > 0),

    status invitation_status
        not null default 'pending',

    responded_at timestamptz,

    rsvp_deadline timestamptz,

    is_locked boolean
        not null default false,

    created_at timestamptz
        not null default now(),

    updated_at timestamptz
        not null default now()
);

comment on table invitations is
'One invitation represents one invited family.';

-- ==========================================================
-- GUESTS
-- ==========================================================

create table if not exists guests (

    id uuid primary key default gen_random_uuid(),

    invitation_id uuid
        not null
        references invitations(id)
        on delete cascade,

    full_name text not null,

    nickname text,

    display_order integer
        not null default 1,

    is_child boolean
        not null default false,

    created_at timestamptz
        not null default now()
);

comment on table guests is
'Individual invited guests belonging to one invitation.';

-- ==========================================================
-- GUEST RESPONSES
-- ==========================================================

create table if not exists guest_responses (

    id uuid primary key default gen_random_uuid(),

    guest_id uuid
        not null unique
        references guests(id)
        on delete cascade,

    response guest_response_status
        not null,

    responded_at timestamptz
        not null default now()
);

comment on table guest_responses is
'Stores the RSVP response of each invited guest.';

-- ==========================================================
-- INVITATION MESSAGES
-- ==========================================================

create table if not exists invitation_messages (

    id uuid primary key default gen_random_uuid(),

    invitation_id uuid
        not null unique
        references invitations(id)
        on delete cascade,

    message text,

    created_at timestamptz
        not null default now()
);

comment on table invitation_messages is
'Optional family message submitted during RSVP.';

-- ==========================================================
-- INVITATION VIEWS
-- ==========================================================

create table if not exists invitation_views (

    id uuid primary key default gen_random_uuid(),

    invitation_id uuid
        not null unique
        references invitations(id)
        on delete cascade,

    first_viewed_at timestamptz
        not null default now(),

    last_viewed_at timestamptz
        not null default now(),

    view_count integer
        not null default 1,

    device device_type
        not null default 'unknown'
);

comment on table invitation_views is
'Tracks invitation opening analytics.';

-- ==========================================================
-- INDEXES
-- ==========================================================

create index if not exists idx_invitations_token
on invitations(token);

create index if not exists idx_guests_invitation
on guests(invitation_id);

create index if not exists idx_guest_responses_guest
on guest_responses(guest_id);

create index if not exists idx_messages_invitation
on invitation_messages(invitation_id);

create index if not exists idx_views_invitation
on invitation_views(invitation_id);

-- ==========================================================
-- UPDATED_AT TRIGGER
-- ==========================================================

create or replace function update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_update_invitation_updated_at
on invitations;

create trigger trg_update_invitation_updated_at
before update
on invitations
for each row
execute function update_updated_at_column();

-- ==========================================================
-- ROW LEVEL SECURITY
-- ==========================================================

alter table invitations enable row level security;
alter table guests enable row level security;
alter table guest_responses enable row level security;
alter table invitation_messages enable row level security;
alter table invitation_views enable row level security;