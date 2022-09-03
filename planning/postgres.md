CREATE TABLE USERS (
user_id uuid primary key,
email_id text unique,
name text,
mobile_number char(10),
password_hash text,
password_salt text,
created_at timestamptz
);
create index on users(email_id);

CREATE TABLE SUB_BUDGET(
sub_budget_id uuid primary key,
budget_id uuid,
name text,
owner_id uuid,
total_amount int,
paid_amount int default 0,
last_updated timestamp with time zone
);
create index on sub_budget(budget_id);
create index on sub_budget(owner_id);
alter table sub_budget add constraint paid_constraint check (total_amount >= paid_amount);

create table sub_budget_user(
sub_budget_user_id uuid primary key,
sub_budget_id uuid,
user_id uuid,
amount_total int,
amount_paid int,
last_updated timestamp with time zone
);
create index on sub_budget_user(user_id);
create index on sub_budget_user(sub_budget_id);
alter table sub_budget_user add constraint paid_constraint check (amount_total >= amount_paid);

create table budget_sub_budget(
budget_sub_budget uuid primary key,
budget_id uuid,
sub_budget_id uuid,
last_updated timestamp with time zone
);
create index on budget_sub_budget(budget_id);
create index on budget_sub_budget(sub_budget_id);

create table users_budget(
users_budget_id uuid primary key,
user_id uuid,
budget_id uuid,
created_at timestamp with time zone,
last_updated timestamp with time zone
);
create index on users_budget(user_id);
create index on users_budget(budget_id);

create table budget(
budget_id uuid primary key,
user_id uuid,
created_at timestamp with time zone,
updated_at timestamp with time zone
);
create index on budget(user_id);

create table friends(
friendship_id uuid primary key,
sender_id uuid,
receiver_id uuid,
sender_accept bool default true,
receiver_accept bool default false,
last_updated timestamp with time zone
);
create index on friends(sender_id);
create index on friends(receiver_id);
