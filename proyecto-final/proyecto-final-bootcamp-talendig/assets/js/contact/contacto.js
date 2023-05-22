const form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            accept: "application/json"
        }
    });

    if (response.ok) {
        this.reset();
        alert("Mensaje recibido, te contactaremos en breve.");
    }
}