const P = PORTFOLIO, $ = s => document.querySelector(s);
const waLink = (t = "") => `https://wa.me/${P.social.whatsapp}?text=${encodeURIComponent(t)}`;
const socials = () => `<a href="${P.social.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="bi bi-github"></i></a><a href="${P.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="${P.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>`;
const tags = t => t.map(x => `<span class="tag">${x}</span>`).join("");

const setTheme = t => { document.documentElement.dataset.theme = t; try { localStorage.setItem("theme", t) } catch (e) {} const b = $("#theme i"); if (b) b.className = t === "dark" ? "bi bi-sun" : "bi bi-moon-stars" };
let saved = "dark"; try { saved = localStorage.getItem("theme") || "dark" } catch (e) {}
setTheme(saved);
$("#theme").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
$("#burger").addEventListener("click", () => $("#menu").classList.toggle("open"));
$("#menu").addEventListener("click", e => e.target.matches("a") && $("#menu").classList.remove("open"));
$("#fsocial").innerHTML = socials();
$("#copy").textContent = `© ${new Date().getFullYear()} ${P.name}. All rights reserved.`;
document.querySelectorAll(".brand").forEach(b => b.textContent = P.brand);

if ($("#home")) {
  $("#name").textContent = P.name; $("#tagline").textContent = P.tagline;
  $("#heroimg").style.setProperty("--img", `url(${P.photo})`);
  $("#cv").href = P.cv; $("#hsocial").innerHTML = socials();
  $("#aboutimg").src = P.photo; $("#abouttext").textContent = P.about;
  $("#info").innerHTML = Object.entries(P.info).map(([k, v]) => `<li><b>${k}</b>${v}</li>`).join("");
  $("#interests").innerHTML = tags(P.interests);
  $("#skills").innerHTML = Object.entries(P.skills).map(([g, l]) => `<div class="card"><h3>${g}</h3>${l.map(([n, v]) => `<div class="bar-h"><span>${n}</span><span>${v}%</span></div><div class="bar"><i data-w="${v}"></i></div>`).join("")}</div>`).join("");
  $("#edu").innerHTML = P.education.map(e => `<div class="tl"><small>${e.start} - ${e.end}</small><h3>${e.school}</h3><p>${e.level} · ${e.major}</p></div>`).join("");
  $("#exp").innerHTML = P.experience.map(e => `<div class="tl"><small>${e.period}</small><h3>${e.role}</h3><p>${e.place}. ${e.desc}</p></div>`).join("");
  $("#projects").innerHTML = P.projects.map(p => `<div class="card"><img src="${p.image}" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><p>${p.desc}</p><div>${tags(p.tech)}</div><div class="btns" style="margin-top:12px"><a class="btn fill" href="project-detail.html?id=${p.id}">Detail</a><a class="btn out" href="${p.github}" target="_blank" rel="noopener">GitHub</a></div></div>`).join("");
  $("#certs").innerHTML = P.certificates.map(c => `<div class="card"><img src="${c.image}" alt="${c.name}" loading="lazy"><h3>${c.name}</h3><p>${c.issuer} · ${c.year}</p><a class="btn out" href="${c.link}" target="_blank" rel="noopener">Lihat sertifikat</a></div>`).join("");
  $("#clist").innerHTML = `<a href="mailto:${P.social.email}"><i class="bi bi-envelope"></i>${P.social.email}</a><a href="${waLink()}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i>+${P.social.whatsapp}</a><a href="${P.social.instagram}" target="_blank" rel="noopener"><i class="bi bi-instagram"></i>Instagram</a><a href="${P.social.github}" target="_blank" rel="noopener"><i class="bi bi-github"></i>GitHub</a><a href="${P.social.linkedin}" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i>LinkedIn</a>`;
  $("#form").addEventListener("submit", e => { e.preventDefault(); const f = new FormData(e.target);
    window.open(waLink(`Halo, saya ${f.get("nama")} (${f.get("email")}).\nSubjek: ${f.get("subjek")}\n${f.get("pesan")}`), "_blank"); e.target.reset(); });
  let r = 0, c = 0, del = false; const el = $("#typing");
  (function type() { const w = P.roles[r]; el.textContent = w.slice(0, c);
    if (!del && c++ === w.length) { del = true; return setTimeout(type, 1400) }
    if (del && --c < 0) { del = false; c = 0; r = (r + 1) % P.roles.length }
    setTimeout(type, del ? 45 : 90) })();
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); x.target.querySelectorAll("[data-w]").forEach(b => b.style.width = b.dataset.w + "%") } }), { threshold: .1 });
  document.querySelectorAll("section:not(#home)").forEach(s => { s.classList.add("reveal"); io.observe(s) });
  const links = [...document.querySelectorAll("#menu a.l")];
  addEventListener("scroll", () => { let cur = "home"; document.querySelectorAll("section").forEach(s => { if (scrollY >= s.offsetTop - 140) cur = s.id }); links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "index.html#" + cur)) });
}
if ($("#detail")) {
  const p = P.projects.find(x => x.id === new URLSearchParams(location.search).get("id"));
  $("#detail").innerHTML = p ? `<h1 class="title">${p.name}</h1><img src="${p.image}" alt="${p.name}" style="width:100%;max-width:760px;border-radius:14px;border:1px solid var(--line)"><p style="max-width:700px;line-height:1.8;margin-top:20px">${p.long}</p><div>${tags(p.tech)}</div><div class="btns"><a class="btn fill" href="${p.demo}" target="_blank" rel="noopener">Lihat demo</a><a class="btn out" href="${p.github}" target="_blank" rel="noopener">GitHub</a><a class="btn out" href="index.html#projects-s">Kembali</a></div>` : `<h1 class="title">Proyek tidak ditemukan</h1><a class="btn fill" href="index.html#projects-s">Kembali ke proyek</a>`;
}
addEventListener("scroll", () => { const h = document.documentElement; $("#progress").style.width = scrollY / (h.scrollHeight - innerHeight) * 100 + "%"; $("#top").classList.toggle("show", scrollY > 500) });
$("#top").addEventListener("click", () => scrollTo({ top: 0 }));
addEventListener("load", () => { const l = $("#loader"); l.style.opacity = 0; setTimeout(() => l.remove(), 400) });
