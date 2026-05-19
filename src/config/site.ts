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

  // Ditambahkan dummy keys di bawah ini agar Navbar, Footer, & Schema bawaan template tidak error
  socialLinks: {
    whatsapp: "https://wa.me/6289519865963", // Otomatis menggunakan nomor asli Anda
    instagram: "https://instagram.com/yasinmakassar",
    facebook: "https://facebook.com/yasinmakassar",
    twitter: "",
    github: "",
    discord: "",
  },

  // Susunan menu navigasi baru sesuai hirarki yang diminta
  navLinks: [
    { text: "Beranda", href: "/" },
    {
      text: "Mengapa Kami",
      href: "#", // Menggunakan '#' agar aman saat diklik pada interaksi dropdown desktop
      subLinks: [
        { text: "Tentang", href: "/tentang" },
        { text: "Testimoni", href: "/testimoni" },
        { text: "Galeri", href: "/galeri" },
      ],
    },
    {
      text: "Layanan",
      href: "/layanan",
      subLinks: [
        { text: "Harga", href: "/harga" },
        { text: "Cara Pesan", href: "/cara-pesan" },
      ],
    },
    { text: "Blog", href: "/blog" },
    { text: "Kontak", href: "/kontak" },
  ],

  // Otomatis melengkapi data alamat riil workshop Anda di Paccerakkang
  contact: {
    phone: "+62 895-1986-5963",
    email: "halo@yasinmakassar.com",
    address:
      "Jl. Paccerakkang, Paccerakkang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90562",
  },
};

export type SiteConfig = typeof siteConfig;
