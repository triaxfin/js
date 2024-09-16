function tarkista() {
    let kysely = confirm("Are you a student?");
    if (kysely) {
        document.write("<p>Welcome student<p>")
    } else {
        document.write("<p>Sorry, this page is for students only<p>")
    }
}
window.onload = tarkista;