document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Cek mode dari localStorage saat halaman dimuat
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.classList.add("dark"); // Tambahkan class "dark" pada toggle
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        toggleButton.classList.toggle("dark"); // Ubah tampilan toggle

        // Simpan status mode ke localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
function showMessage(event) {
    event.preventDefault(); // Mencegah form dikirim
    alert("Masih belum jadi");
}
