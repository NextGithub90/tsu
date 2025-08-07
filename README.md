# Website Strategi Sun Tzu UMKM

## Deskripsi

Website landing page modern dan responsif untuk mempromosikan buku "100 Strategi Sun Tzu UMKM Naik Kelas". Website ini dibangun dengan HTML, CSS, dan JavaScript dengan memanfaatkan Bootstrap untuk layout dan komponen UI.

## Fitur

- Desain modern dan elegan
- Fully responsive (mobile-friendly)
- Animasi scroll dengan AOS (Animate On Scroll)
- Countdown timer untuk promosi
- Integrasi WhatsApp untuk pemesanan
- Hover effects pada kartu dan tombol
- Smooth scrolling untuk navigasi
- Back-to-top button

## Struktur Website

1. **Hero Section** - Menampilkan judul buku dan fitur utama
2. **Strategy Section** - Menampilkan 8 pilar strategi Sun Tzu untuk UMKM
3. **Author Section** - Informasi tentang penulis buku
4. **Testimonial Section** - Testimoni dari pengguna yang telah menerapkan strategi
5. **CTA Section** - Call to action dengan countdown timer dan tombol pemesanan via WhatsApp

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome (untuk ikon)
- Google Fonts (Poppins & Montserrat)
- AOS - Animate On Scroll Library

## Cara Menjalankan

Website ini adalah website statis yang dapat dijalankan langsung di browser. Cukup buka file `index.html` di browser Anda untuk melihat website.

## Kustomisasi

### Mengubah Warna

Warna utama website dapat diubah dengan mengedit variabel CSS di file `css/style.css`:

```css
:root {
  --primary-color: #d4a017;
  --secondary-color: #8b0000;
  --dark-color: #2c1a0e;
  --light-color: #fff9e6;
  --text-color: #333;
  --text-light: #777;
  /* ... */
}
```

### Mengubah Countdown Timer

Untuk mengubah tanggal countdown timer, edit file `js/script.js` pada fungsi `startCountdown()`:

```javascript
function startCountdown() {
  // Set the countdown date (ubah sesuai kebutuhan)
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 7); // 7 hari dari sekarang

  // ...
}
```

### Mengubah Nomor WhatsApp

Untuk mengubah nomor WhatsApp pada tombol pemesanan, edit atribut `href` pada link WhatsApp di file `index.html`:

```html
<a href="https://wa.me/628xxxxxxxxxx?text=Saya%20tertarik%20dengan%20buku%20Strategi%20Sun%20Tzu%20untuk%20UMKM" class="btn btn-primary btn-lg"> <i class="fab fa-whatsapp"></i> Pesan Sekarang via WhatsApp </a>
```

## Kredit

- Font Awesome - [https://fontawesome.com/](https://fontawesome.com/)
- Bootstrap - [https://getbootstrap.com/](https://getbootstrap.com/)
- Google Fonts - [https://fonts.google.com/](https://fonts.google.com/)
- AOS Library - [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)
