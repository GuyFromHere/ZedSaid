$(function() {
	$("#next").on("click", e => {
		$.get("/", data => {
			location.reload();
		});
	});

	$("#addForm").on("submit", e => {
		const age = $("#newAge").val();
		const quote = $("#newQuote").val();
		const context = $("#newContext").val();

		const newQuote = {
			age: $("#newAge").val(),
			quote: $("#newQuote").val(),
			context: $("#newContext").val()
		};

		$.ajax("/api/add_quote", {
			type: "POST",
			data: newQuote
		}).then(() => {
			location.reload();
		});
	});

	getQuote = function() {
		$.get("/", data => {
			location.reload();
		});
	};

	setInterval(getQuote, 3000);
});
