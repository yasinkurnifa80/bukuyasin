import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Yasin Makassar Premium",
  description:
    "Percetakan Buku Yasin kualitas premium, desain elegan, dan pengerjaan cepat untuk kenangan terbaik orang terkasih.",
  url: "https://yasinmakassar.com",
  lang: "id",
  locale: "id_ID",
  author: "Yasin Makassar Team",
  twitter: "@yasinmakassar",
  ogImage: ogImage,

  // Ditambahkan dummy keys di bawah ini agar Navbar, Footer, & Schema bawaan template tidak error
  socialLinks: {
    whatsapp: "https://wa.me/62895401308267", // Otomatis menggunakan nomor asli Anda
    instagram: "https://instagram.com/cetakyasinmakassar",
    facebook: "https://facebook.com/percetakanyasinmakassar",
    twitter: "",
    github: "",
    discord: "",
  },

  // Susunan menu navigasi baru dengan perbaikan pada link induk Profil
  navLinks: [
    { text: "Beranda", href: "/" },
    {
      text: "Profil",
      href: "javascript:void(0);", // Menggunakan void(0) agar layar tidak meloncat ke atas saat menu diklik
      subLinks: [
        { text: "Tentang", href: "/tentang" },
        { text: "Testimoni", href: "/testimoni" },
        { text: "Galeri", href: "/galeri" },
        { text: "Kontak", href: "/kontak" },
        { text: "Privasi", href: "/privacy" },
        { text: "Ketentuan", href: "/ketentuan" },
        { text: "Tanya Jawab", href: "/faq" },
      ],
    },
    {
      text: "Layanan",
      href: "/layanan",
      subLinks: [
        { text: "Harga", href: "/harga" },
        { text: "Cara Pesan", href: "/cara-pesan" },
        { text: "Cara Kirim", href: "/cara-kirim" },
      ],
    },
    { text: "Pengiriman Luar Kota", href: "/pengiriman" },
    { text: "Blog", href: "/blog" },
  ],

  // Otomatis melengkapi data alamat riil workshop Anda di Paccerakkang
  contact: {
    phone: "+62 895-4013-08267",
    email: "halo@yasinmakassar.com",
    address:
      "Jl. Paccerakkang, Paccerakkang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90562",
  },
};

export type SiteConfig = typeof siteConfig;
