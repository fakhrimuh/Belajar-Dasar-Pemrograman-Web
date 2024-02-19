// Ambil elemen-elemen yang dibutuhkan
const cardsContainer = document.querySelector(".getUSGroup");
const cardButtons = document.querySelectorAll("#arrowCardButton button");
const cards = document.querySelectorAll(".card");

// Set indeks awal dan akhir
let currentCardIndex = 0;
const maxCardIndex = cards.length - 1;

// Sembunyikan kartu ke-4 secara default
cards[maxCardIndex].style.display = "none";

// Fungsi untuk menampilkan kartu ke-4
function showFourthCard() {
  cards[maxCardIndex].style.display = "flex";
}

// Fungsi untuk menyembunyikan kartu ke-4
function hideFourthCard() {
  cards[maxCardIndex].style.display = "none";
}

// Fungsi untuk menampilkan kartu berikutnya
function showNextCard() {
  // Periksa apakah sedang di kartu terakhir
  if (currentCardIndex === maxCardIndex) {
    currentCardIndex = 0; // Kembali ke kartu pertama
    hideFourthCard(); // Sembunyikan kartu ke-4
  } else {
    currentCardIndex++; // Tampilkan kartu berikutnya
  }
  updateCardDisplay(); // Update tampilan kartu
}

// Fungsi untuk menampilkan kartu sebelumnya
function showPreviousCard() {
  // Periksa apakah sedang di kartu pertama
  if (currentCardIndex === 0) {
    currentCardIndex = maxCardIndex; // Kembali ke kartu ke-4
    showFourthCard(); // Tampilkan kartu ke-4
  } else {
    currentCardIndex--; // Tampilkan kartu sebelumnya
  }
  updateCardDisplay(); // Update tampilan kartu
}

// Fungsi untuk mengupdate tampilan kartu
function updateCardDisplay() {
  // Semua kartu diatur untuk disembunyikan
  cards.forEach((card) => {
    card.style.display = "none";
  });
  // Tampilkan kartu yang saat ini dipilih
  cards[currentCardIndex].style.display = "flex";
}

// Tambahkan event listener pada tombol Next
cardButtons[1].addEventListener("click", showNextCard);

// Tambahkan event listener pada tombol Previous
cardButtons[0].addEventListener("click", showPreviousCard);
