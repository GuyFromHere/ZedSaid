/* 
	Heroku / ClearDB Deployed DB: 
	https://shielded-plains-71844.herokuapp.com/
	username: "bd541b76d1cb87",
    password: "86e2719f",
    host: "us-cdbr-iron-east-04.cleardb.net",
    database: "heroku_3a8a7d70d740947"
    
    use heroku_3a8a7d70d740947;
    
 */

drop database if exists zedsaid_db;
create database zedsaid_db;
use zedsaid_db;
drop table quotes;
create table quotes
(
	id int
	auto_increment not null,
	age int not null,
	quote text not null,
	context text not null,
	primary key(id)
);

	insert into quotes
		(age, quote, context)
	values
		(2, "What if you went to the grocery store and never came back?", "Lying in bed with Dad."),
		(4, "Me: We're terrible parents, huh? Zed: No Dad, just you.", "We let them have extra screentime or something."),
		(4, "Me: Zinnia, tell me about your hopes and dreams? Zed: I wish you were dead. I mean I hope you die.", "Lying in bed, trying to get her to settle down."),
		(4, "If I get married and my husband is anything like you I'm DEFINITELY getting a divorce.", "Lying in bed with Dad."),
		(3, "Me: Hi Zinnia! Zed: Dad, STOP IT!", "Randomly happens about once a month."),
		(4, "Maybe you're just being terrible again?", "I was mad at my computer."),
        (4, "Dad. You are such an idiot.", "Many times for various reasons."),
        (4, "What if you were married to someone who was just like Mom, but who wasn't my mom?", "Lying in bed again."),
        (3, "Me: What can I say? I love farting. Zed: You can say excuse me!", "She accused me of farting."),
        (4, "I love all of my family 100. Except for you, Dad.", "Random zinger inserted in to a conversation.")
