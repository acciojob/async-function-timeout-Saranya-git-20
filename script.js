document.getElementById("btn").addEventListener("click", async function () {
	await setTextDelayValue();
});

function delay(ms, res) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(res), ms);
	});
}

async function setTextDelayValue() {
	const text = document.getElementById('text').value;
	const delayTime = parseInt(document.getElementById('delay').value);
	const resultBody = document.getElementById('output');

	const result = await delay(delayTime, text);
	resultBody.textContent = `result - ${delayTime}`;
}
