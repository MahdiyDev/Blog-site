create database blog_site;

create extension if not exists "uuid-ossp";

create table users(
    user_uid UUID not null primary key,
    user_avatar text default null,
    user_fname text not null,
    user_lname text not null,
    user_email text not null,
    user_password text not null,
    user_date timestamp with time zone not null default current_timestamp,
    is_admin boolean default false
);

create table posts(
    post_uid UUID not null primary key,
    post_title text not null,
    post_img text default null,
    post_date timestamp with time zone not null default current_timestamp,
    post_user_ref_uid UUID default null,
    foreign key(post_user_ref_uid)
        references users(user_uid)
            on delete cascade
);

create table comments(
    comment_uid UUID not null primary key,
    comment_title text not null,
    comment_date timestamp with time zone not null default current_timestamp,
    comment_user_ref_uid UUID default null,
    foreign key(comment_user_ref_uid)
        references users(user_uid)
            on delete cascade,
    comment_post_ref_uid UUID default null,
    foreign key(comment_post_ref_uid)
        references comments(comment_uid)
            on delete cascade
);
