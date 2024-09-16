document.write("<p><i><b>\"If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.\"</b></i><br>-- Abraham Lincoln<p>")

function repeatingText(teksti) {
    for (let i = 0; i < 50; i++) { document.write(teksti+"<br>");}
}

function selain() {
    let selain = navigator.userAgent.toLowerCase();
    if (selain.includes("firefox")) {
        window.location.href = "https://www.mozilla.org";
    } else {
        window.location.href = "https://www.google.com";
    }
}

function kuva(numero) {
    var kuvat = [
        "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
        ];
    document.write('<img src="' + kuvat[numero] + '">');
}

kuva(0)
kuva(1)
kuva(2)