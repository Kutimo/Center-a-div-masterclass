const form = document.querySelector("form");

// Compressed the code from previously made,
// creates data object then stringifies it and sends it with a fetch request.
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        title: "new signup",
        body: JSON.stringify(data),
        userId: 1,
        headers: {
            "Content-Type": "application/json",
        },
        // Then if response is successful a simple html page is loaded.
    }).then((response) => {
        if (response.status === 201) {
            window.location.href = "/success.html";
        }
    });
});
