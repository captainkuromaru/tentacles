let konami = [38,38,40,40,37,39,37,39,66,65];
let k_tmp = 0;
document.addEventListener('keydown', logKey);

function logKey(e) {
	if (e.keyCode == konami[k_tmp] ) {
		k_tmp++;
	} else {
		k_tmp = 0;
	}

	if (k_tmp == 10) {
		let b = '<audio controls autoplay> <source src="/audio/loituma.mp3" type="audio/mpeg">not supported</audio>';
		document.getElementById("loituma").style.top = "-420px";
		document.getElementById("loituma").style.display = "none";
		document.getElementById("loituma").innerHTML = b;
		console.log("winner is you");
		k_tmp = 0;
	}
}
