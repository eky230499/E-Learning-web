const namaLengkap = document.getElementById("namalengkap")
const email = document.getElementById("email")
const noTelepon = document.getElementById("notelepon")
const kataSandi = document.getElementById("password")
const konfirmasikataSandi = document.getElementById("konfirmasipassword")
const kelas = document.getElementById("kelas")

const pesaneror = document.getElementById("errorm")

document.getElementById("submit").addEventListener("click", (errormassage) => {
    let errorm = []
    if (namaLengkap.value === "" || namaLengkap.value == null) {
        errorm.push("Nama lengkap harus diisi")
    }
    if (email.value === "" || email.value == null) {
        errorm.push("email harus diisi")
    }
    else if (email.value.length <= 7) {
        errorm.push("email harus lebih dari 7 karakter")
    }
    if (noTelepon.value === "" || noTelepon.value == null) {
        errorm.push("No Telepon harus diisi")
    }
    else if (noTelepon.value.length>12) {
        errorm.push("No Telepon tidak boleh lebih dari 12 angka")
    }
    if (password.value === "" || password.value == null) {
        errorm.push("Password harus diisi")
    }
    else if (password.value.length < 8) {
        errorm.push("Password harus lebih dari 8 angka")
    }
    if (konfirmasipassword.value === "" || konfirmasipassword.value == null) {
        errorm.push("Konfirmasi Password harus diisi")
    }
    else if (konfirmasipassword.value != password.value) {
        errorm.push("Konfirmasi password harus sama dengan password")
    }


    if (errorm.length > 0) {
        errormassage.preventDefault()
        pesaneror.innerText = errorm.join(", ")
    }
    else {
        alert("Anda berhasil Mendaftar Akun, Silahkan Login")
    }

})
function phonemenu() {
    document.getElementById("tombolsamping").classList.toggle("active");
}





