function makeBigger() {
	alert("Hello, world!");

	var textArea = document.getElementById("user-text");
	textArea.style.fontSize = "24pt";
}

function fancifyText() {
	var textArea = document.getElementById("user-text");
	var fancy = document.getElementById("fancy");

	if (fancy.checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function mooText() {
	var textArea = document.getElementById("user-text");
	var text = textArea.value.toUpperCase();
	var sentences = text.split(".");

	textArea.value = sentences.join("-Moo.");
}
