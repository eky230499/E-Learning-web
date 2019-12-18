
document.getElementById("pilihan2").addEventListener("change", cekharga)
function cekharga() {
    var pilih = document.getElementById("pilihan2").value;
    if (pilih == "1 Semester") {
        document.getElementById("harga").innerHTML = "Rp.280.000";
    }
    else if (pilih == "2 Semester") {
        document.getElementById("harga").innerHTML = "Rp.560.000";
    }
    else {
        document.getElementById("harga").innerHTML = "Rp.800.000";
    }
}

function phonemenu() {
    document.getElementById("tombolsamping").classList.toggle("active");
}