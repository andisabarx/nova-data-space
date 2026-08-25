# Georgy's Data Canvas

Buatkan saya website portfolio pribadi untuk seorang Data Scientist dengan tampilan modern dan profesional, menggunakan React + Tailwind CSS. Berikut spesifikasi lengkapnya:

## THEME & GAYA VISUAL

- Dark theme sebagai default, dengan tombol toggle untuk light theme

- Warna dasar dark mode: background #1a1a1a, card background gradasi dari #1c1c1c ke #050505, border halus #2b2b2b

- Warna aksen utama: biru muda #4fc3f7 (dipakai untuk highlight, border tombol, gradient text, ikon)

- Warna teks: putih (#ffffff) untuk heading, abu terang (#e1e1e1 / #c1c1c1) untuk body text, abu (#a9a9a9) untuk teks sekunder

- Font: gunakan kombinasi "Poppins" (untuk nama & tagline hero), "Inter" (untuk heading section & body text), dan "Montserrat" (untuk navbar & tombol). Bisa diganti dengan Google Fonts yang mirip jika tidak tersedia

- Heading section besar (ukuran ~45px, extra bold, letter-spacing rapat) selalu diikuti sub-label kecil bergaya gradient text (biru ke putih)

- Tombol menggunakan border rounded penuh (pill-shaped), dengan varian outline (border biru) dan solid (background putih/teks hitam)

- Section membulat rapi dengan banyak whitespace, layout section-by-section vertikal, fully responsive (desktop, tablet, mobile)

## STRUKTUR HALAMAN (single page, scroll dengan navigasi anchor)

### 1. Navbar (sticky/fixed di atas)

- Logo teks "Georgy" dengan font script/cursive di kiri

- Menu navigasi: Home, About, Projects, Services, Resume

- Tombol "Contact Me" dengan border biru di kanan

- Ikon menu hamburger untuk versi mobile

### 2. Hero Section

- Foto profil bulat di tengah dengan background gradient blur/glow di belakangnya

- Nama besar: "Georgy Georgy" (ganti dengan nama saya nanti)

- Tagline dengan gradient text: "Data Sorcerer 🧙‍♂️" (ganti sesuai jobdesk saya)

- Deskripsi singkat 2-3 baris tentang passion di bidang data science, machine learning, AI, dan data analytics

- Tombol "Contact Me" (outline biru, pill shape)

### 3. About Me

- Heading "About Me" + sub-label "Get to know me"

- Paragraf perkenalan diri (3 paragraf): siapa saya, keahlian teknis saya, dan ajakan untuk kolaborasi

- Tombol "Download Resume"

### 4. What I Do (Services)

- Heading "What I do" + sub-label "My Services"

- Grid kartu (3 kolom di desktop, responsive jadi 1 kolom di mobile), masing-masing kartu berisi: ikon di kotak putih kecil, judul skill, deskripsi singkat. Layout salah satu kartu (misal "AI Chatbots") dibuat lebih lebar dengan gambar ilustrasi di sisi kanan

- Contoh kartu: Data Analytics & Visualization, Predictive Analytics and Forecasting, Natural Language Processing, AI Chatbots, Machine Learning

- Di bawah grid, tampilkan baris tag skill dalam bentuk pill/badge: Machine Learning, SQL, Power BI, AI/LLMs, Spatial Data Science (tag pertama disorot/aktif dengan background solid, sisanya outline)

### 5. Projects

- Heading "Projects" + sub-label "Some of my Work"

- Filter tab (pill buttons): All, Web, Mobile, Marketing, dsb.

- Grid kartu proyek (3 kolom), tiap kartu: gambar/thumbnail project di atas, judul project, deskripsi teknologi yang dipakai, tombol ikon panah/send kecil berwarna biru di kanan bawah untuk link ke detail project

- Tombol "View All" di bawah grid untuk load more

### 6. Get In Touch (Contact Form)

- Heading "Get In Touch" + sub-label "Let's work together"

- Form dengan field: Name, Email, Service (dropdown select), Message (textarea)

- Tombol submit "Get in Touch" full-width background putih dengan teks hitam bold

### 7. Footer

- Teks besar "Let's Work Together -" 

- Kotak kontak email dengan ikon Gmail, border rounded

- Garis pemisah horizontal

- Copyright text "© 2026 All rights reserved."

- Ikon sosial media (LinkedIn, GitHub, Instagram, Twitter/X, dll.) di kanan

## FUNGSIONALITAS TAMBAHAN

- Smooth scroll saat klik menu navbar ke section terkait

- Toggle dark/light mode yang mengubah seluruh skema warna (light mode: background putih/abu muda, teks gelap, kartu putih dengan shadow halus, aksen biru tetap konsisten)

- Responsive penuh untuk mobile (layout jadi single column, navbar jadi hamburger menu)

- Animasi fade-in/slide-up halus saat elemen muncul ke viewport (scroll reveal)

- Form contact belum perlu terhubung ke backend, cukup validasi frontend dulu

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c7b75ff9-0afe-4dc6-99fa-dcbecac50e41).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
