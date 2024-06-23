document.addEventListener('DOMContentLoaded', function() {
    const User = document.getElementById("inputName");
    const Cek = document.getElementById("cek");
    const ResultContainer = document.getElementById("resultContainer");

    // Data hewan khodam
    const hewanKhodam = [
        "Anjing", "Kucing", "Gajah", "Harimau", "Singa", "Kuda", "Sapi", "Kambing", "Ayam", "Bebek",
        "Angsa", "Kelinci", "Burung", "Ular", "Kura-kura", "Kelelawar", "Beruang", "Zebra", "Jerapah",
        "Kanguru", "Koala", "Panda", "Domba", "Serigala", "Hiu", "Paus", "Lumba-lumba", "Gurita", "Laba-laba",
        "Semut", "Lebah", "Kupu-kupu", "Katak", "Buaya", "Komodo", "Badak", "Flamingo", "Merpati", "Burung Hantu",
        "Cheetah", "Kucing Hutan", "Tapir", "Belalang", "Jangkrik", "Kucing Anggora", "Ikan Lele", "Ikan Nila",
        "Kijang", "Bunglon", "Musang", "Monyet", "Orangutan", "Simpanse", "Gorila", "Bekantan", "Rusa", "Walrus",
        "Anoa", "Burung Cendrawasih", "Elang", "Rajawali", "Kakaktua", "Bangau", "Pelikan", "Albatros", "Penguin",
        "Anjing Laut", "Serow", "Tupai", "Berang-berang", "Oposum", "Platipus", "Numbat", "Wombat", "Unta", "Alpaka",
        "Llama", "Hamster", "Gerbil", "Marmut", "Tikus", "Curut", "Landak", "Kukang", "Bajing", "Lutung", "Siamang",
        "Bekicot", "Lintah", "Ikan Pari", "Ikan Mas", "Belut", "Lobster", "Kepiting", "Udang", "Kerang", "Tiram",
        "Bintang Laut", "Landak Laut"
    ];

    // Event listener untuk tombol "cek"
    Cek.addEventListener('click', function(event) {
        event.preventDefault(); // Menghindari form submit (karena ini hanya contoh)

        // Ambil nama dari input
        const userName = User.value.trim();

        // Cek apakah nama sudah pernah dimasukkan sebelumnya
        let userKhodam = sessionStorage.getItem('userKhodam');
        if (userKhodam) {
            userKhodam = JSON.parse(userKhodam);
            if (userKhodam.name === userName) {
                // Jika sudah ada, tampilkan pesan yang sama
                showResultCard(`Khodam Kamu ${userKhodam.khodam}!`);
                return; // Langsung keluar dari fungsi jika sudah ada
            }
        }

        // Pilih nama khodam baru secara acak
        const newKhodam = getRandomKhodam();

        // Simpan data user ke Session Storage
        sessionStorage.setItem('userKhodam', JSON.stringify({ name: userName, khodam: newKhodam }));

        // Tampilkan hasil dalam card
        showResultCard(`${userName}, Khodam Kamu ${newKhodam}!`);
    });

    // Fungsi untuk memilih nama hewan khodam secara acak
    function getRandomKhodam() {
        const randomIndex = Math.floor(Math.random() * hewanKhodam.length);
        return hewanKhodam[randomIndex];
    }

    // Fungsi untuk menampilkan hasil dalam card
    function showResultCard(message) {
        // Buat elemen card
        const card = document.createElement('div');
        card.classList.add('card', 'card-body', 'mt-3');
        card.textContent = message;

        // Bersihkan konten sebelumnya
        ResultContainer.innerHTML = '';

        // Tambahkan card ke container
        ResultContainer.appendChild(card);
    }
});
