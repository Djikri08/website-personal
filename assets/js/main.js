/* ==========================================================
   DAFTAR ISI
   01. Setup & Helper
   02. Tema (dark / light)
   03. Navbar & Footer (semua halaman)
   04. Halaman Utama (index.html)
       4a. Isi konten
       4b. Form kontak
       4c. Efek mengetik
       4d. Animasi reveal & skill bar
       4e. Menu aktif saat scroll
   05. Halaman Detail Proyek
   06. Progress bar, tombol ke atas & loader
   ========================================================== */


/* ========== 01. SETUP & HELPER ========== */
const P = PORTFOLIO;
const $ = selector => document.querySelector(selector);

// Link WhatsApp (dengan pesan opsional)
const waLink = (text = "") =>
  `https://wa.me/${P.social.whatsapp}?text=${encodeURIComponent(text)}`;

// Satu ikon sosial media
const socialIcon = (href, label, icon) =>
  `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}"><i class="bi bi-${icon}"></i></a>`;

// Kumpulan ikon sosial media
const socials = () => [
  socialIcon(P.social.github, "GitHub", "github"),
  socialIcon(P.social.instagram, "Instagram", "instagram"),
  socialIcon(P.social.linkedin, "LinkedIn", "linkedin"),
  socialIcon(waLink(), "WhatsApp", "whatsapp"),
].join("");

// Daftar tag / badge
const tags = list => list.map(x => `<span class="tag">${x}</span>`).join("");


/* ========== 02. TEMA (DARK / LIGHT) ========== */
const setTheme = theme => {
  document.documentElement.dataset.theme = theme;

  try { localStorage.setItem("theme", theme); } catch (e) {}

  const icon = $("#theme i");
  if (icon) icon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
};

let savedTheme = "dark";
try { savedTheme = localStorage.getItem("theme") || "dark"; } catch (e) {}
setTheme(savedTheme);

$("#theme").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === "dark" ? "light" : "dark");
});


/* ========== 03. NAVBAR & FOOTER (SEMUA HALAMAN) ========== */
// Buka / tutup menu mobile
$("#burger").addEventListener("click", () => $("#menu").classList.toggle("open"));
$("#menu").addEventListener("click", e => {
  if (e.target.matches("a")) $("#menu").classList.remove("open");
});

// Brand, sosial media, dan copyright
document.querySelectorAll(".brand").forEach(b => (b.textContent = P.brand));
$("#fsocial").innerHTML = socials();
$("#copy").textContent = `© ${new Date().getFullYear()} ${P.name}. All rights reserved.`;


/* ========== 04. HALAMAN UTAMA (index.html) ========== */
if ($("#home")) {

  /* ----- 4a. Isi konten ----- */

  // Hero
  $("#name").textContent = P.name;
  $("#tagline").textContent = P.tagline;
  $("#heroimg").style.setProperty("--img", `url(${P.photo})`);
  $("#cv").href = P.cv;
  $("#hsocial").innerHTML = socials();

  // About
  $("#aboutimg").src = P.photo;
  $("#abouttext").textContent = P.about;
  $("#info").innerHTML = Object.entries(P.info)
    .map(([key, value]) => `<li><b>${key}</b>${value}</li>`)
    .join("");
  $("#interests").innerHTML = tags(P.interests);

  // Skills
  $("#skills").innerHTML = Object.entries(P.skills)
    .map(([group, list]) => [
      `<div class="card">`,
      `<h3>${group}</h3>`,
      list.map(([name, value]) => [
        `<div class="bar-h"><span>${name}</span><span>${value}%</span></div>`,
        `<div class="bar"><i data-w="${value}"></i></div>`,
      ].join("")).join(""),
      `</div>`,
    ].join(""))
    .join("");

  // Education
  $("#edu").innerHTML = P.education
    .map(e => [
      `<div class="tl">`,
      `<small>${e.start} - ${e.end}</small>`,
      `<h3>${e.school}</h3>`,
      `<p>${e.level} · ${e.major}</p>`,
      `</div>`,
    ].join(""))
    .join("");

  // Experience
  $("#exp").innerHTML = P.experience
    .map(e => [
      `<div class="tl">`,
      `<small>${e.period}</small>`,
      `<h3>${e.role}</h3>`,
      `<p>${e.place}. ${e.desc}</p>`,
      `</div>`,
    ].join(""))
    .join("");

  // Projects
  $("#projects").innerHTML = P.projects
    .map(p => [
      `<div class="card">`,
      `<img src="${p.image}" alt="${p.name}" loading="lazy">`,
      `<h3>${p.name}</h3>`,
      `<p>${p.desc}</p>`,
      `<div>${tags(p.tech)}</div>`,
      `<div class="btns" style="margin-top:12px">`,
      `<a class="btn fill" href="project-detail.html?id=${p.id}">Detail</a>`,
      `<a class="btn out" href="${p.github}" target="_blank" rel="noopener">GitHub</a>`,
      `</div>`,
      `</div>`,
    ].join(""))
    .join("");

  // Certificates
  $("#certs").innerHTML = P.certificates
    .map(c => [
      `<div class="card">`,
      `<img src="${c.image}" alt="${c.name}" loading="lazy">`,
      `<h3>${c.name}</h3>`,
      `<p>${c.issuer} · ${c.year}</p>`,
      `<a class="btn out" href="${c.link}" target="_blank" rel="noopener">Lihat sertifikat</a>`,
      `</div>`,
    ].join(""))
    .join("");

  // Daftar kontak
  $("#clist").innerHTML = [
    `<a href="mailto:${P.social.email}"><i class="bi bi-envelope"></i>${P.social.email}</a>`,
    `<a href="${waLink()}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i>+${P.social.whatsapp}</a>`,
    `<a href="${P.social.instagram}" target="_blank" rel="noopener"><i class="bi bi-instagram"></i>Instagram</a>`,
    `<a href="${P.social.github}" target="_blank" rel="noopener"><i class="bi bi-github"></i>GitHub</a>`,
    `<a href="${P.social.linkedin}" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i>LinkedIn</a>`,
  ].join("");


  /* ----- 4b. Form kontak (kirim via WhatsApp) ----- */
  $("#form").addEventListener("submit", e => {
    e.preventDefault();

    const f = new FormData(e.target);
    const message =
      `Halo, saya ${f.get("nama")} (${f.get("email")}).\n` +
      `Subjek: ${f.get("subjek")}\n` +
      `${f.get("pesan")}`;

    window.open(waLink(message), "_blank");
    e.target.reset();
  });


  /* ----- 4c. Efek mengetik di hero ----- */
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const typingEl = $("#typing");

  (function type() {
    const word = P.roles[roleIndex];
    typingEl.textContent = word.slice(0, charIndex);

    // Selesai mengetik -> jeda, lalu mulai menghapus
    if (!deleting && charIndex++ === word.length) {
      deleting = true;
      return setTimeout(type, 1400);
    }

    // Selesai menghapus -> pindah ke kata berikutnya
    if (deleting && --charIndex < 0) {
      deleting = false;
      charIndex = 0;
      roleIndex = (roleIndex + 1) % P.roles.length;
    }

    setTimeout(type, deleting ? 45 : 90);
  })();


  /* ----- 4d. Animasi reveal & pengisian skill bar ----- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("in");
      entry.target.querySelectorAll("[data-w]").forEach(bar => {
        bar.style.width = bar.dataset.w + "%";
      });
    });
  }, { threshold: .1 });

  document.querySelectorAll("section:not(#home)").forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
  });


  /* ----- 4e. Menu aktif mengikuti scroll ----- */
  const menuLinks = [...document.querySelectorAll("#menu a.l")];

  addEventListener("scroll", () => {
    let current = "home";

    document.querySelectorAll("section").forEach(section => {
      if (scrollY >= section.offsetTop - 140) current = section.id;
    });

    menuLinks.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "index.html#" + current);
    });
  });
}


/* ========== 05. HALAMAN DETAIL PROYEK ========== */
if ($("#detail")) {
  const projectId = new URLSearchParams(location.search).get("id");
  const project = P.projects.find(x => x.id === projectId);

  if (!project) {
    // Proyek tidak ditemukan
    $("#detail").innerHTML = [
      `<h1 class="title">Proyek tidak ditemukan</h1>`,
      `<a class="btn fill" href="index.html#projects-s">Kembali ke proyek</a>`,
    ].join("");
  } else {

    /* ----- 5a. Tampilan halaman ----- */
    // Pakai gallery kalau ada, kalau tidak pakai image utama saja
    const gallery = project.gallery && project.gallery.length ? project.gallery : [project.image];
    let current = 0;

    $("#detail").innerHTML = [
      `<h1 class="title">${project.name}</h1>`,

      // Galeri: foto utama + thumbnail
      `<div class="gallery">`,
      `<img id="gmain" class="gmain" alt="${project.name}" tabindex="0" title="Klik untuk memperbesar">`,
      `<div class="thumbs">`,
      gallery.map((src, i) => [
        `<button class="thumb" data-i="${i}" aria-label="Foto ${i + 1}">`,
        `<img src="${src}" alt="Dokumentasi ${i + 1}" loading="lazy">`,
        `</button>`,
      ].join("")).join(""),
      `</div>`,
      `</div>`,

      // Deskripsi, teknologi, dan tombol
      `<p style="max-width:700px;line-height:1.8;margin-top:20px">${project.long}</p>`,
      `<div>${tags(project.tech)}</div>`,
      `<div class="btns">`,
      `<a class="btn fill" href="${project.demo}" target="_blank" rel="noopener">Lihat demo</a>`,
      `<a class="btn out" href="${project.github}" target="_blank" rel="noopener">GitHub</a>`,
      `<a class="btn out" href="index.html#projects-s">Kembali</a>`,
      `</div>`,

      // Lightbox (foto layar penuh)
      `<div id="lb" class="lb" hidden>`,
      `<button class="icon-btn lbx" id="lbx" aria-label="Tutup"><i class="bi bi-x-lg"></i></button>`,
      `<button class="icon-btn lbp" id="lbp" aria-label="Sebelumnya"><i class="bi bi-chevron-left"></i></button>`,
      `<img id="lbimg" alt="">`,
      `<button class="icon-btn lbn" id="lbn" aria-label="Berikutnya"><i class="bi bi-chevron-right"></i></button>`,
      `</div>`,
    ].join("");


    /* ----- 5b. Ganti foto & lightbox ----- */
    const lightbox = $("#lb");
    const openLightbox = () => (lightbox.hidden = false);
    const closeLightbox = () => (lightbox.hidden = true);

    // Tampilkan foto ke-i (berputar kalau lewat batas)
    const showImage = i => {
      current = (i + gallery.length) % gallery.length;
      $("#gmain").src = gallery[current];
      $("#lbimg").src = gallery[current];

      document.querySelectorAll(".thumb").forEach((thumb, index) => {
        thumb.classList.toggle("on", index === current);
      });
    };

    // Klik thumbnail -> ganti foto utama
    document.querySelectorAll(".thumb").forEach(thumb => {
      thumb.addEventListener("click", () => showImage(+thumb.dataset.i));
    });

    // Buka / tutup lightbox
    $("#gmain").addEventListener("click", openLightbox);
    $("#lbx").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) closeLightbox();
    });

    // Tombol sebelumnya / berikutnya
    $("#lbp").addEventListener("click", () => showImage(current - 1));
    $("#lbn").addEventListener("click", () => showImage(current + 1));

    // Keyboard: Esc, panah kiri, panah kanan
    addEventListener("keydown", e => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showImage(current - 1);
      if (e.key === "ArrowRight") showImage(current + 1);
    });

    showImage(0);
  }
}

/* ========== 06. PROGRESS BAR, TOMBOL KE ATAS & LOADER ========== */
// Progress bar scroll + munculkan tombol "ke atas"
addEventListener("scroll", () => {
  const html = document.documentElement;
  const percent = scrollY / (html.scrollHeight - innerHeight) * 100;

  $("#progress").style.width = percent + "%";
  $("#top").classList.toggle("show", scrollY > 500);
});

// Klik tombol "ke atas"
$("#top").addEventListener("click", () => scrollTo({ top: 0 }));

// Sembunyikan loader setelah halaman selesai dimuat
addEventListener("load", () => {
  const loader = $("#loader");
  loader.style.opacity = 0;
  setTimeout(() => loader.remove(), 400);
});
