const email = document.getElementById("email")
const kataSandi = document.getElementById("kataSandi")
const pesaneror = document.getElementById("error")
form.addEventListener("submit", (e) => {
    let error = []
    if (email.value === "" || email.value == null) {
        error.push("email harus diisi")
    }
    else if (email.value.length <=7 ) {
        error.push("email harus lebih dari 7 karakter")
    }
    if (kataSandi.value === "" || kataSandi.value == null) {
        error.push("kata sandi harus diisi")
    }
    else if (kataSandi.value.length <= 8) {
        error.push("Kata Sandi harus lebih dari 7 karakter")
    }
    else if (kataSandi.value.length >= 18) {
        error.push("Kata Sandi tidak boleh lebih dari 18 karakter")
    }
    if (error.length > 0) {
        e.preventDefault()
        pesaneror.innerText = error.join(", ")
    }
    else {
        alert("Anda berhasil login")
    }
    
})
function phonemenu() {
    document.getElementById("tombolsamping").classList.toggle("active");
}




