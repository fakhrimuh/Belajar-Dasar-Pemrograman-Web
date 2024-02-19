// Ambil elemen-elemen yang dibutuhkan
const cardsContainer = document.querySelector(".getUSGroup");
const cardButtons = document.querySelectorAll("#arrowCardButton button");
const cards = document.querySelectorAll(".card");

// Set indeks awal dan akhir
let currentCardIndex = 0;
const maxCardIndex = cards.length - 1;

// Fungsi untuk menampilkan kartu-kartu berikutnya
function showNextCards() {
  // Semua kartu diatur untuk disembunyikan
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Tampilkan kartu-kartu berikutnya
  for (let i = 0; i < 3; i++) {
    const nextIndex = (currentCardIndex + i) % (maxCardIndex + 1);
    cards[nextIndex].style.display = "flex";
  }

  // Perbarui indeks kartu
  currentCardIndex = (currentCardIndex + 1) % (maxCardIndex + 1);
}

// Fungsi untuk menampilkan kartu-kartu sebelumnya
function showPreviousCards() {
  // Semua kartu diatur untuk disembunyikan
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Tampilkan kartu-kartu sebelumnya
  for (let i = 0; i < 3; i++) {
    let prevIndex = currentCardIndex - i;
    if (prevIndex < 0) {
      prevIndex = maxCardIndex + prevIndex + 1;
    }
    cards[prevIndex].style.display = "flex";
  }

  // Perbarui indeks kartu
  currentCardIndex = currentCardIndex - 1;
  if (currentCardIndex < 0) {
    currentCardIndex = maxCardIndex;
  }
}

// Tambahkan event listener pada tombol Next
cardButtons[1].addEventListener("click", showNextCards);

// Tambahkan event listener pada tombol Previous
cardButtons[0].addEventListener("click", showPreviousCards);

// Tampilkan kartu-kartu awal
showNextCards();
