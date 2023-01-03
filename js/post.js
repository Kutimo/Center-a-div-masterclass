const form = document.querySelector("form");

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
    }).then((response) => {
        if (response.status === 201) {
            window.location.href = "/success.html";
        }
    });
});