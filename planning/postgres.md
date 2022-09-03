CREATE EXTENSION "uuid-ossp";
CREATE TABLE USERS (
user_id uuid primary key default uuid_generate_v1(),
email_id text unique,
name text,
name_salt char(5) ,
mobile_number char(10),
password_hash text,
password_salt text default '0',
profile_picture text,
created_at timestamp with time zone default now()
);
create index on users(email_id);
alter table users add constraint name_name_salt unique(name, name_salt);

    CREATE TABLE SUB_BUDGET(
    sub_budget_id uuid primary key default uuid_generate_v1(),
    budget_id uuid,
    name text,
    owner_id uuid,
    total_amount int,
    paid_amount int default 0,
    last_updated timestamp with time zone default now()
    );
    create index on sub_budget(budget_id);
    create index on sub_budget(owner_id);
    alter table sub_budget add constraint paid_constraint check (total_amount >= paid_amount);

    create table sub_budget_user(
    sub_budget_user_id uuid primary key default uuid_generate_v1(),
    sub_budget_id uuid,
    user_id uuid,
    amount_total int,
    amount_paid int,
    last_updated timestamp with time zone default now()
    );
    create index on sub_budget_user(user_id);
    create index on sub_budget_user(sub_budget_id);
    alter table sub_budget_user add constraint paid_constraint check (amount_total >= amount_paid);

    create table budget_sub_budget(
    budget_sub_budget uuid primary key default uuid_generate_v1(),
    budget_id uuid,
    sub_budget_id uuid,
    last_updated timestamp with time zone default now()
    );
    create index on budget_sub_budget(budget_id);
    create index on budget_sub_budget(sub_budget_id);

    create table users_budget(
    users_budget_id uuid primary key default uuid_generate_v1(),
    user_id uuid,
    budget_id uuid,
    created_at timestamp with time zone default now(),
    last_updated timestamp with time zone default now()
    );
    create index on users_budget(user_id);
    create index on users_budget(budget_id);

    create table budget(
    budget_id uuid primary key default uuid_generate_v1(),
    user_id uuid,
    name text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
    );
    alter table budget add constraint name_user unique(name, user_id);
    create index on budget(user_id);

    create table friends(
    friendship_id uuid primary key default uuid_generate_v1(),
    sender_id uuid,
    receiver_id uuid,
    sender_accept bool default true,
    receiver_accept bool default false,
    last_updated timestamp with time zone default now()
    );
    create index on friends(sender_id);
    create index on friends(receiver_id);

drop table USERS,
SUB_BUDGET,
sub_budget_user,
budget_sub_budget,
users_budget,
budget,
friends;
