// ===== EDIT DATA PORTOFOLIO DI SINI =====
const PORTFOLIO = {
  name: "Djikri Ferdiyansyah",
  brand: "Djikri.",
  roles: ["Web Developer", "Programmer", "Frontend Developer"],
  location: "Serang, Banten, Indonesia",
  tagline: "Saya tertarik pada teknologi informasi, pengembangan website, pemrograman, dan sistem informasi.",
  about: "Saya merupakan individu yang memiliki ketertarikan dalam bidang teknologi informasi, pengembangan website, pemrograman, dan sistem informasi. Saya senang membangun website yang rapi, cepat, dan nyaman digunakan, serta terus belajar teknologi baru.",
  photo: "assets/images/profile/profile.jpeg",
  cv: "assets/documents/cv.pdf",
  info: { "Nama": "Djikri Ferdiyansyah", "Domisili": "Serang, Banten", "Profesi": "Web Developer / Programmer", "Email": "djikri48@Gmail.com" },
  interests: ["Web Development", "Pemrograman", "Sistem Informasi", "UI/UX"],
  social: {
    email: "djikri48@Gmail.com",
    whatsapp: "6285930475131",   // format 62xxxxxxxxxx tanpa +
    github: "https://github.com/Djikri08",
    instagram: "https://instagram.com/_frdynsyh28",
    linkedin: "https://www.linkedin.com/in/djikri-ferdiyansyah"
  },
  skills: {
    "Frontend Development": [["HTML5", 90], ["CSS3", 85], ["JavaScript", 80], ["Bootstrap", 85]],
    "Backend Development": [["PHP", 75], ["Node.js", 60]],
    "Database Management": [["MySQL", 75]],
    "Programming Language": [["JavaScript", 80], ["PHP", 75], ["Python", 60]],
    "Tools & Technologies": [["Git & GitHub", 80], ["VS Code", 90], ["Figma", 60]]
  },
  education: [
    { school: "Universitas Serang Raya", level: "S1", major: "Teknik Informatika", start: 2022, end: "Sekarang" },
    { school: "MAN 1 Kota Serang", level: "SMA/SMK", major: "Jurusan IPS", start: 2019, end: 2022 },
    { school: "MTs Al- Fathaniyah", level: "SMP/MTS", major: "", start: 2016, end: 2019 }
  ],
  experience: [
    { role: "E-government (Magang)", place: "Dinas Komunikasi dan Informatika Kota Serang", period: "2024", desc: "Redesain dan merawat fitur website Kota Serang." },
    { role: "Ketua Divisi", place: "Himpunan Teknik Informatika", period: "2024 - 2025", desc: "Mengelola dan mengkordinir kegiatan dari setiap Divisi." },
    { role: "Anggota Organisasi", place: "Himpunan Teknik Informatika", period: "2022 - 2024", desc: "Mengelola kegiatan dan sumber daya manusia(SDM) organisasi." }
  ],
  projects: [
    { id: "web-sekolah", name: "Website Sekolah", image: "assets/images/projects/project1.png", gallery: [
    "assets/images/projects/project1.png",
    "assets/images/projects/project1.png",
    "assets/images/projects/project1.png"
  ], desc: "Website Sistem Pendukung Keputusan Penilaian Kompetensi Guru .", long: "Website Sistem Pendukung Keputusan Penilaian Kompetensi Guru yang responsif dengan halaman dashboard, kriteria, Kelompok kriteria, dan informasi data guru.", tech: ["HTML", "CSS", "JavaScript"], demo: "#", github: "https://github.com/username/web-sekolah" },
    { id: "apk-ingatin", name: "aplikasi ingatin", image: "assets/images/projects/project2.png",gallery: [
    "assets/images/projects/project2.png",
    "assets/images/projects/project2.png",
    "assets/images/projects/project2.png"
  ], desc: "Aplikasi pengingat tugas .", long: "Aplikasi Pengingat tugas dengan fitur notifikasi alarem.", tech: ["AndroidStudio","PHP", "JavaScript"], demo: "#", github: "https://github.com/username/toko-online" },
    { id: "web-sembako", name: "website kasir toko sembako", image: "assets/images/projects/project3.png",gallery: [
    "assets/images/projects/project2.png",
    "assets/images/projects/project3.png",
    "assets/images/projects/project1.png"
  ], desc: "website toko sembako.", long: "website toko sembako yang responsif dengan fitur kasir dan rekap data mulai dari harian hingga tahunan.", tech: ["PHP", "MySQL"], demo: "#", github: "https://github.com/username/absensi" }
  ],
  certificates: [
    { name: "Web Development", issuer: "BNSP", year: 2026, image: "assets/images/certificates/cert1.jpg", link: "assets/images/certificates/cert1.jpg" },
    
  ]
};
