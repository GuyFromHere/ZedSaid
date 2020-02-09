drop database if exists zedsaid_db;
create database zedsaid_db;
use zedsaid_db;

create table quotes (
	id int auto_increment not null,
	age int not null,
	quote text not null,
	context text not null,
	primary key (id)
);

insert into quotes (age, quote, context)
values
(2, "What if you went to the grocery store...and never came back?", "Lying in bed with Dad."),
(4, "ME: We're terrible parents, huh? ZED: No Dad, just you.","We let them have extra screentime or something."),
(4, "ME: Zinnia, tell me about your hopes and dreams? ZED: I wish you were dead. NO. I HOPE you die.","Lying in bed, trying to get her to settle down."),
(4, "If I get married and my husband is anything like you I'm DEFINITELY getting a divorce.","Lying in bed with Dad."),
(3, "ME: Hi Zinnia! ZED: Dad, STOP IT!","Randomly happens about once a month."),
(4, "Maybe you're just being terrible again?","I was mad at my computer.")
