create table team_project;

create extension if not exists "uuid-ossp";

create table users(
    user_uid UUID default uuid_generate_v4() primary key,
    user_avatar text default null,
    user_fname text not null,
    user_lname text not null,
    user_email text not null unique,
    user_password text not null,
    user_date timestamp with time zone not null default current_timestamp,
    is_admin boolean default false
);

create table posts(
    post_uid UUID default uuid_generate_v4() primary key,
    post_title text not null,
    post_img text default null,
    post_date timestamp with time zone not null default current_timestamp,
    post_ref_user UUID not null,
    foreign key(post_ref_user)
        references users(user_uid)
            on delete cascade
);

create table comments(
    comment_uid UUID default uuid_generate_v4() primary key,
    comment_title text not null,
    comment_date timestamp with time zone not null default current_timestamp,
    comment_ref_user UUID not null,
    foreign key(comment_ref_user)
        references users(user_uid)
            on delete cascade,
    comment_ref_post UUID not null ,
    foreign key(comment_ref_post)
        references posts(post_uid)
            on delete cascade,
    comment_ref_comment UUID default null ,
    foreign key (comment_ref_comment)
    references comments(comment_uid)
    on delete cascade
);

--///////////////////////////////////////////////////////////////////////////////////////////////////
--/////////////////////////////       INSERT USER       /////////////////////////////////////////////
--///////////////////////////////////////////////////////////////////////////////////////////////////

insert into users(user_avatar,user_fname,user_lname,user_email,user_password,is_admin)values('1-rasm','Ramazon','Pardayev','R@gmail.com','0112',true);
insert into users(user_avatar,user_fname,user_lname,user_email,user_password,is_admin)values('2-rasm','Mahdiy','Sulaymonov','M@gmail.com','0110',true);
insert into users(user_avatar,user_fname,user_lname,user_email,user_password)values('2-rasm','Islom','Pardayev','A@gmail.com','0115');
insert into users(user_avatar,user_fname,user_lname,user_email,user_password)values('3-rasm','Zafar','Pardayev','Z@gmail.com','0114');
insert into users(user_avatar,user_fname,user_lname,user_email,user_password)values('4-rasm','Asilbek','Pardayev','I@gmail.com','0111');
--///////////////////////////////////////////////////////////////////////////////////////////////////
--/////////////////////////////       INSERT POSTS       ////////////////////////////////////////////
--///////////////////////////////////////////////////////////////////////////////////////////////////
insert into posts(post_title,post_img,post_ref_user)values('ikkinchi','blablabla.jpg','20d0e650-cfbf-4a3f-8fcc-f64f438f19c1');