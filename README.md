# Final Project Rakamin - Backend

Aplikasi Jobseeker untuk pemenuhan tugas Final Project MSIB FSWD Rakamin

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan [npm (Node Package Manager)](https://www.npmjs.com/). 

## Instalasi

1. Clone repositori ini ke komputer Anda: ```git clone https://github.com/syifaulqolbii/final-project-rakamin-backend.git```

2. Masuk ke direktori proyek.


3. Install semua dependensi yang diperlukan dengan menjalankan perintah: ```npm install ```



## Penggunaan

Deskripsikan bagaimana cara menggunakan proyek Anda atau menjalankan aplikasinya. Contoh: 
1. Buat file pada folder project dengan nama ```.env``` setelah itu copy isian file ```.example.env``` kedalam file ```.env``` lalu atur dengan credentials anda masing masing.

2. Atur credential postgresql anda pada file ```config/config.json```
3. Buat database baru dengan nama ```jobhunter_dev``` pada postgresql anda.
4. Jalankan perintah ```npx sequelize db:migrate``` untuk migrasi database.
5. Jalankan perintah ```npx sequelize seed:all``` untuk seeding database.
6. Langkah pertama: Jalankan aplikasi dengan perintah: ```npm run dev```
7. Langkah kedua: Buka aplikasi di browser.
8. Langkah ketiga: Lakukan hal-hal lain sesuai kebutuhan.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan yang Anda usulkan.
3. Commit perubahan Anda.
4. Push branch Anda ke repositori fork Anda.
5. Buat Pull Request ke repositori ini lewat branch develop.

## Lisensi

Ditulis dengan ❤️ oleh [ Team 7 ]. Proyek ini dilisensikan di bawah [Lisensi Proyek Anda] - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.



