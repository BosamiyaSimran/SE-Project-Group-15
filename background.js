import fetch from "node-fetch";
console.log("here");
const res = await fetch("https://libretranslate.com/translate", {

	method: "POST",
	body: JSON.stringify({
		q: "",
		source: "en",
		target: "es"
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());
