const quotes = [
    "Me: We're terrible parents, huh? <br>Zed: No Dad, just you.",
	"Me: Zinnia, tell me about your hopes and dreams? <br>Zed: I wish you were dead. I mean I hope you die.",
	"If I get married and my husband is anything like you I'm DEFINITELY getting a divorce.",
	"Me: Hi Zinnia! <br>Zed: Dad, STOP IT!",
	"Maybe you're just being terrible again?",
	"Dad. You are such an idiot.",
	"What if you were married to someone who was just like Mom, but who wasn't my mom?",
	"Me: What can I say? I love farting. <br>Zed: You can say excuse me!",
	"I love all of my family 100. Except for you, Dad.",
	"What if you went to the grocery store and never came back?"
];

$(function() {

	getQuote = function(quote) {
		/* $.get("/", data => {
			location.href = "/";
		}); */	
	};

	function intervalForEach (array, iteratee, delay) {
		let current = 0
		let interval = setInterval(() => {
		if (current === array.length) {
			current = 0;
		} else {
			iteratee(array[current])
			current++
		}
		}, delay)
	}
	
	// this will be applied to each item in the array
	function updateQuote (quote) {
		setTimeout(() => {
			console.log(quote)
			$('#quote').html(quote);
		}, 100) 
	}

	intervalForEach(quotes, updateQuote, 6000);
	
});
