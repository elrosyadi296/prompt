const PROMPTS = [
  {
    id: 1, pinned: true, model: 'claude', cat: 'coding', views: 0, copies: 0,
    title: 'Debug XML Blogger Rapi',
    desc: 'Menelusuri error struktur <b:section> dan tag ganda pada template Blogger, lalu memberi perbaikan bertahap.',
    body: `Kamu adalah developer template Blogger XML berpengalaman.
Berikut potongan XML template saya: [tempel XML].
Tolong:
1. Temukan error struktur <b:section>/<b:widget>, id yang bentrok, atau tag yang tidak tertutup.
2. Jelaskan penyebab tiap error secara singkat.
3. Berikan perbaikan XML lengkap, jangan hanya potongan.
4. Tandai bagian yang kamu ubah dengan komentar <!-- FIX -->.`,
    media: null,
  },
  {
    id: 2, pinned: true, model: 'gemini', cat: 'data', views: 0, copies: 0,
    title: 'Rancang Sheet Anti Bentrok',
    desc: 'Menyusun struktur Google Sheets + Apps Script untuk penjadwalan mata pelajaran tanpa bentrok guru/kelas.',
    body: `Bertindaklah sebagai konsultan sistem sekolah.
Saya ingin membuat sistem "Jadwal Anti Bentrok" dengan Google Sheets sebagai backend dan Apps Script sebagai logic.
Data saya: daftar guru, daftar kelas, daftar mapel, jam pelajaran per hari.
Tolong rancang:
1. Struktur sheet (nama kolom tiap sheet).
2. Aturan validasi bentrok (guru sama di jam sama, kelas sama di jam sama).
3. Pseudocode fungsi Apps Script untuk cek bentrok sebelum simpan.`,
    media: null,
  },
  {
    id: 3, pinned: false, model: 'claude', cat: 'islamic', views: 0, copies: 0,
    title: `Tafsir Ringkas Ayat "La'allakum Tuflihun"`,
    desc: `Meringkas satu ayat yang berakhir "la'allakum tuflihun" untuk bab buku, lengkap dengan konteks turunnya.`,
    body: `Kamu adalah penulis buku Islami yang menjelaskan Al-Qur'an dengan bahasa yang mudah dipahami orang awam.
Ayat yang saya bahas: [tempel ayat & terjemahan].
Tolong tulis dalam gaya reflektif, bukan ceramah:
1. Konteks singkat ayat ini (asbabun nuzul bila ada).
2. Makna "la'allakum tuflihun" dalam ayat ini secara spesifik, jangan generik.
3. Satu ilustrasi kehidupan sehari-hari yang relevan.
4. Tutup dengan satu kalimat perenungan, bukan kesimpulan formal.
Panjang: 400-500 kata.`,
    media: null,
  },
  {
    id: 4, pinned: false, model: 'gpt', cat: 'writing', views: 0, copies: 0,
    title: 'Artikel SEO Gaya Blogger Santai',
    desc: 'Menulis artikel Blogger yang enak dibaca, terstruktur untuk SEO, tapi tidak terasa kaku atau robotik.',
    body: `Tulis artikel blog dengan topik: [isi topik].
Target pembaca: [isi audiens].
Ketentuan:
1. Judul menarik, maksimal 60 karakter.
2. Buka dengan satu masalah nyata pembaca, bukan definisi umum.
3. Gunakan subjudul H2/H3 yang deskriptif, bukan angka urut.
4. Sisipkan 1-2 contoh konkret per bagian.
5. Hindari kalimat penutup klise seperti "kesimpulannya" atau "pada akhirnya".
6. Panjang 700-900 kata, nada santai tapi kredibel.`,
    media: null,
  },
  {
    id: 5, pinned: false, model: 'image', cat: 'image-gen', views: 0, copies: 0,
    title: 'Aset Hero 3D Glassmorphism',
    desc: 'Prompt image AI untuk elemen hero bernuansa navy-gold-emerald khas identitas 296 Studios.',
    body: `A sleek 3D glassmorphism UI panel floating at a slight angle, deep navy background,
gold and emerald accent lighting, soft volumetric glow, subtle grain texture,
frosted glass card with thin light border, minimal Islamic geometric pattern in the background at low opacity,
studio lighting, high detail, 4k, product-render style.`,
    media: { type: 'image', url: 'https://picsum.photos/seed/bilikprompt5/700/440' },
  },
  {
    id: 6, pinned: false, model: 'claude', cat: 'coding', views: 0, copies: 0,
    title: 'Perbaiki Bentrok Tailwind CDN & CSP Blogger',
    desc: 'Menelusuri kenapa Tailwind CDN diblokir Content-Security-Policy di Blogger dan solusinya.',
    body: `Situs Blogger saya memakai Tailwind CDN tapi diblokir oleh Content-Security-Policy bawaan Blogger.
Errornya: [tempel error console].
Tolong:
1. Jelaskan kenapa CSP Blogger memblokir ini.
2. Berikan 2 opsi solusi: (a) pindah ke build CSS lokal, (b) workaround tetap pakai CDN jika memungkinkan.
3. Untuk opsi yang kamu rekomendasikan, beri langkah implementasi konkret di editor tema Blogger.`,
    media: null,
  },
  {
    id: 7, pinned: false, model: 'gemini', cat: 'data', views: 0, copies: 0,
    title: 'Validasi Data Rapor Excel',
    desc: 'Membersihkan dan memvalidasi data nilai siswa di Excel sebelum diimpor ke sistem sekolah.',
    body: `Saya punya data nilai siswa di Excel dengan kemungkinan error: nama ganda, NISN kosong, nilai di luar rentang 0-100.
Tolong buatkan:
1. Daftar rumus/langkah validasi untuk tiap jenis error di atas.
2. Rumus untuk menandai baris bermasalah dengan warna (conditional formatting).
3. Saran struktur kolom final yang siap diimpor ke sistem CBT.`,
    media: null,
  },
  {
    id: 8, pinned: false, model: 'gpt', cat: 'writing', views: 0, copies: 0,
    title: 'Deskripsi Undangan Nikah Elegan',
    desc: 'Menulin narasi pembuka undangan pernikahan digital bernuansa lembut dan personal, bukan template umum.',
    body: `Tulis narasi pembuka undangan pernikahan digital untuk [nama mempelai].
Tema: [Jawa / botanical / lainnya].
Ketentuan:
1. Nada hangat, personal, bukan bahasa baku formal.
2. Sisipkan satu kalimat doa singkat yang relevan dengan tema.
3. Maksimal 80 kata, cocok untuk halaman hero satu layar.
4. Hindari frasa klise seperti "tanpa terasa" atau "dengan mengucap".`,
    media: null,
  },
  {
    id: 9, pinned: false, model: 'video', cat: 'video-gen', views: 0, copies: 0,
    title: 'Cuplikan Promo Sekolah Sinematik',
    desc: 'Prompt video AI untuk cuplikan promosi pendek suasana madrasah, gaya sinematik hangat.',
    body: `Cinematic short clip, 6 seconds, warm golden-hour lighting inside a modern Islamic school courtyard,
students walking calmly between classes, soft camera pan left to right, shallow depth of field,
subtle dust particles in light beams, warm navy-gold color grade, no text overlay, 24fps film look.`,
    media: { type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
  }
];