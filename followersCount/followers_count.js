let count = 0;  // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Tampilkan ke HTML
}

function increaseCount() {
    count++; // Tambah 1 setiap klik
    displayCount(); // Panggil fungsi tampilkan
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
      alert("Postingan Instagram Anda mendapatkan 10 pengikut! Selamat!");
    } else if (count === 20) {
      alert("Postingan Instagram Anda mendapatkan 20 pengikut! Teruskan!");
    }
  }

  function resetCount(){
    count = 0;
    displayCount();
    alert("Follower berhasil diriset");
  }