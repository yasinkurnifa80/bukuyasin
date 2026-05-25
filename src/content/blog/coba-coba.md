---
title: "COBA2"
pubDate: "2026-01-26"
description: "A deep dive into the philosophy of placeholder text."
author: "Lorem"
category: "Astro"
tags: ["testing", "tutorial"]
image: "/blog/blog_post_2_1768848698871.webp"
---

# Donec Quam Felis Ultricies Nec

Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.

> "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."

Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.

## Why Do We Use It?

Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.

Berikut kodeku nanti untuk kuinput di laman galeri :

---

import BaseLayout from "@/layouts/BaseLayout.astro";

// 1. IMPORT GAMBAR ANDA (Pastikan file ada di folder src/assets/images/)
import img1 from "@/assets/images/yasin-hardcover-gold.webp";
import img2 from "@/assets/images/yasin-softcover-elegan.webp";
import img3 from "@/assets/images/yasin-souvenir-box.webp";
import img4 from "@/assets/images/yasin-interior-detail.webp";
import img5 from "@/assets/images/finishing-rapi.webp";
import img6 from "@/assets/images/yasin-velvet.webp";

const metadata = {
title: "Galeri Hasil Cetak — ABA Print Makassar",
description: "Lihat koleksi hasil cetak buku Yasin premium kami. Kehalusan cetakan dan kerapian jilid adalah standar kami.",
};

// 2. PASANGKAN IMPORT TADI KE DALAM ARRAY
const galleryItems = [
{ title: "Yasin Hardcover Gold Foil", image: img1 },
{ title: "Detail Kertas Premium", image: img2 },
{ title: "Souvenir Tahlilan", image: img3 },
{ title: "Layout Eksklusif", image: img4 },
{ title: "Finishing Jilid Rapi", image: img5 },
{ title: "Opsi Hardcover Velvet", image: img6 },
];

---

<BaseLayout {metadata}>

  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Galeri Hasil Cetak</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Bukti nyata dari dedikasi kami. Setiap buku Yasin yang kami produksi diproses dengan ketelitian tinggi demi hasil yang memuaskan.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div class="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl">
            <img
              src={item.image.src}
              alt={item.title}
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
              <p class="text-white font-semibold text-lg px-4 text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </section>

  <section class="py-12 bg-gray-50 text-center">
    <h2 class="text-2xl font-bold mb-6">Ingin Hasil yang Sama untuk Acara Anda?</h2>
    <a
      href="https://wa.me/62895401308267"
      class="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition"
    >
      Konsultasi via WhatsApp
    </a>
  </section>
</BaseLayout>

ini adalah isi kode site.ts (menu2)

import ogImage from "@/assets/og-image.png";

export const siteConfig = {
name: "Yasin Makassar Premium",
description:
"Jasa cetak buku Yasin eksklusif di Makassar. Kualitas premium, desain elegan, dan pengerjaan cepat untuk kenangan terbaik orang terkasih.",
url: "https://yasinmakassar.com",
lang: "id",
locale: "id_ID",
author: "Yasin Makassar Team",
twitter: "@yasinmakassar",
ogImage: ogImage,
socialLinks: {
whatsapp: "https://wa.me/628XXXXXXXXXX",
instagram: "https://instagram.com/yasinmakassar",
facebook: "https://facebook.com/yasinmakassar",
},
// Navigasi telah dirapikan menjadi struktur yang lebih profesional
navLinks: [
{ text: "Beranda", href: "/" },
{ text: "Tentang", href: "/tentang" },
{ text: "Layanan", href: "/layanan" },
{
text: "Daftar Harga",
href: "/harga", // Halaman utama harga
subLinks: [
{ text: "Paket 18 Ribu", href: "/harga/18rb" },
{ text: "Paket 22 Ribu", href: "/harga/22rb" },
{ text: "Paket 28 Ribu", href: "/harga/28rb" },
{ text: "Paket 33 Ribu", href: "/harga/33rb" },
{ text: "Paket 42 Ribu", href: "/harga/42rb" },
],
},
{ text: "Galeri", href: "/galeri" },
{ text: "Cara Pesan", href: "/cara-pesan" },
{ text: "Testimoni", href: "/testimoni" },
{ text: "Blog", href: "/blog" },
{ text: "Kontak", href: "/kontak" },
{ text: "Maps", href: "/maps" },
],
contact: {
phone: "+62 8XX-XXXX-XXXX",
email: "halo@yasinmakassar.com",
address: "Makassar, Sulawesi Selatan",
},
};

kata kunci percetakan buku yasin :
percetakan buku yasin murah
percetakan buku yasin terbaik
percetakan buku yasin custom
percetakan buku yasin murah
percetakan buku yasin terdekat
percetakan buku yasin pakai foto
percetakan buku yasin premium
percetakan buku yasin hardcover
percetakan buku yasin softcover
percetakan buku yasin tahlilan
percetakan buku yasin terpercaya
percetakan buku yasin elegan
percetakan buku yasin 40 hari
percetakan buku yasin cepat
percetakan buku yasin majmu syarif
percetakan buku yasin tanpa minimal order
percetakan buku yasin bludru
percetakan buku yasin makassar
percetakan buku yasin jakarta
percetakan buku yasin surabaya
percetakan buku yasin harga grosir
percetakan buku yasin express
percetakan buku yasin kilat
percetakan buku yasin bisa ditunggu
percetakan buku yasin harga murah
percetakan buku yasin dibawah 5000
