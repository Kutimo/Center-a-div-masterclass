// firstName = document.getElementsByClassName("f_name")
// lastName = document.getElementsByClassName("L_name");
async function fetchPost() {
    submit();
    reset();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'form',
            body: document.forms,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    if (response.ok) {
        document.location.href = "/success.html"
    } else {
        document.getElementById("textWrong").innerHTML = "404 something went wrong"
    }
}