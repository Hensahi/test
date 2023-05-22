const form = document.querySelector("#contactForm");

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

        Swal.fire({
            icon: 'success',
            title: 'Mensaje recibido!',
            text: 'Pronto estaremos en contacto'
        })
        // alert("Mensaje recibido, te contactaremos en breve.");
    }
}