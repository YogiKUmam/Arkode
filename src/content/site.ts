export const site = {
  name: 'Arkode Labs',
  category: 'Software House & Digital Solution Partner',
  email: 'hello@arkodelabs.id',
  phone: '+62 812-8222-4676',
  whatsapp:
    'https://wa.me/6281282224676?text=Halo%20Arkode%20Labs%2C%20saya%20ingin%20konsultasi%20proyek.',
  tagline: 'Membangun software yang rapi, andal, dan siap berkembang.',
  heroHeadline: 'Software House untuk Website, Web App, dan Sistem Digital yang Siap Berkembang.',
  heroSubheadline:
    'Arkode Labs membantu bisnis membangun website profesional, aplikasi web, dashboard, dan sistem internal dengan proses kerja yang jelas, desain modern, dan fondasi teknis yang rapi.',
  logo: '/arkode-labs-logo.png',
};

export const palette = ['Navy Dark', 'Electric Blue', 'Cyan', 'Soft Blue'];

export const values = [
  'Clarity',
  'Reliability',
  'Scalability',
  'Professional Delivery',
  'Practical Solution',
  'Long-Term Partner',
];

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Estimator', href: '/estimator' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    title: 'Website Company Profile',
    summary: 'Website profesional yang menjelaskan profil, layanan, bukti kerja, dan CTA secara rapi.',
    outcome: 'Bisnis terlihat kredibel dan calon klien lebih mudah memahami nilai penawaran Anda.',
    deliverables: ['Sitemap', 'Copy structure', 'Responsive UI', 'SEO basics', 'Launch support'],
  },
  {
    title: 'Landing Page Development',
    summary: 'Landing page kampanye yang fokus pada pesan, visual, performa, dan konversi.',
    outcome: 'Kampanye memiliki halaman khusus yang jelas, cepat, dan siap mengumpulkan leads.',
    deliverables: ['Offer structure', 'Responsive UI', 'Lead CTA', 'Tracking-ready setup', 'Launch support'],
  },
  {
    title: 'Web Application Development',
    summary: 'Aplikasi web untuk portal, booking flow, workflow operasional, atau produk digital.',
    outcome: 'Proses penting dapat dijalankan lewat sistem web yang lebih terukur dan mudah dikembangkan.',
    deliverables: ['Discovery', 'Scope', 'UI flow', 'Frontend/backend build', 'QA', 'Deployment'],
  },
  {
    title: 'Dashboard & Internal System',
    summary: 'Dashboard, admin panel, dan sistem internal yang mengikuti alur kerja tim.',
    outcome: 'Tim mendapat pusat kerja yang lebih rapi untuk memantau data, status, dan aktivitas.',
    deliverables: ['Workflow mapping', 'Role-based flow', 'Dashboard UI', 'Data structure', 'QA'],
  },
  {
    title: 'UI/UX Design',
    summary: 'Desain interface dan alur penggunaan untuk website, web app, dashboard, atau sistem internal.',
    outcome: 'Produk lebih mudah dipahami pengguna dan lebih siap dibangun oleh tim teknis.',
    deliverables: ['User flow', 'Wireframe', 'Visual design', 'Responsive states', 'Design handoff'],
  },
  {
    title: 'Maintenance & Growth',
    summary: 'Dukungan bulanan untuk update, perbaikan, monitoring, dan pengembangan setelah launch.',
    outcome: 'Aset digital tetap sehat, relevan, dan berkembang mengikuti kebutuhan bisnis.',
    deliverables: ['Bug fixes', 'Small improvements', 'Content updates', 'Technical advisory'],
  },
];

export const problems = [
  'Website belum mencerminkan kualitas dan arah bisnis yang ingin ditampilkan.',
  'Calon klien masih perlu bertanya berulang kali karena informasi layanan belum tersusun jelas.',
  'Proses operasional penting masih tersebar di spreadsheet, chat, dan pekerjaan manual.',
  'Tim membutuhkan partner digital yang bisa menerjemahkan kebutuhan menjadi scope yang realistis.',
];

export const processSteps = [
  { title: 'Discovery', text: 'Kami memahami tujuan bisnis, target pengguna, batasan, dan prioritas proyek.' },
  {
    title: 'Scope',
    text: 'Kebutuhan diterjemahkan menjadi ruang lingkup kerja yang jelas, realistis, dan bisa dieksekusi.',
  },
  { title: 'Design', text: 'Struktur halaman, flow, dan interface dirancang sebelum masuk build.' },
  { title: 'Build', text: 'Produk dibangun dengan fondasi teknis yang rapi, responsive, dan mudah dirawat.' },
  { title: 'QA', text: 'Kami cek fungsi, tampilan mobile, aksesibilitas dasar, dan performa.' },
  { title: 'Launch', text: 'Website atau sistem dipublikasikan dengan checklist teknis yang jelas.' },
  { title: 'Support', text: 'Setelah launch, Arkode Labs membantu perbaikan, update, dan iterasi berikutnya.' },
];

export const caseStudies = [
  {
    title: 'Nusantara Language Academy',
    slug: 'nusantara-language-academy',
    label: 'Education MVP',
    summary:
      'Website pembelajaran Bahasa Indonesia interaktif untuk staf kedutaan, keluarga pendamping, dan pendatang baru dengan modul skenario nyata, kuis, progres belajar, sertifikat, dan dashboard admin prototype.',
    stack: ['React', 'Vite', 'Custom CSS', 'Web Speech API'],
    timeline: '8 minggu',
    result:
      'MVP siap demo untuk validasi platform pembelajaran berbasis skenario diplomatik dan kehidupan sehari-hari di Indonesia.',
    demoUrl: 'https://nusantara-language-academy.vercel.app/',
    repoUrl: 'https://github.com/YogiKUmam/Nusantara-Language-Academy',
    imageUrl: '/case-studies/nusantara-language-academy.png',
    overview:
      'Nusantara Language Academy adalah platform belajar Bahasa Indonesia untuk konteks embassy life, rutinitas keluarga, dan kehidupan sehari-hari. Website ini menyediakan jalur belajar berbasis skenario, placement quiz, modul course, latihan listening/speaking/writing, sertifikat, serta dashboard admin prototype untuk memantau progres peserta.',
    visual: 'dashboard',
  },
  {
    title: 'AI Resume Analyzer',
    slug: 'ai-resume-analyzer',
    label: 'AI Product',
    summary:
      'Aplikasi full-stack untuk membandingkan CV PDF dengan job description, membaca keyword, menghitung match score, mengecek struktur ATS, dan menghasilkan laporan evaluasi.',
    stack: ['FastAPI', 'React', 'TypeScript', 'Vite', 'AI Advisor'],
    timeline: 'Full-stack build',
    result:
      'Pengguna mendapat panel hasil analisis, riwayat pemeriksaan, dan laporan PDF/TXT untuk mengevaluasi CV terhadap lowongan.',
    demoUrl: 'https://ai-resume-analyzer-sigma-coral.vercel.app/',
    repoUrl: 'https://github.com/YogiKUmam/Ai-resume-analyzer',
    imageUrl: '/case-studies/ai-resume-analyzer.png',
    overview:
      'AI Resume Analyzer memperlihatkan kemampuan Arkode dalam membangun produk AI end-to-end: upload CV, ekstraksi teks PDF, scoring terhadap job description, analisis keyword, rekomendasi perbaikan, dan output laporan yang bisa digunakan kandidat untuk iterasi CV.',
    visual: 'dashboard',
  },
  {
    title: 'Eksport Import Bali',
    slug: 'eksport-import-bali',
    label: 'Business Website',
    summary:
      'Website profesional untuk bisnis export-import Bali dengan struktur layanan, positioning brand, dan CTA yang lebih siap untuk kebutuhan promosi.',
    stack: ['React', 'Tailwind CSS', 'Responsive UI'],
    timeline: 'Website sprint',
    result:
      'Bisnis export-import memiliki company profile digital yang lebih kredibel untuk menjelaskan layanan, membangun trust, dan mengarahkan calon klien ke inquiry.',
    demoUrl: 'https://eksport-import-bali.vercel.app/',
    repoUrl: 'https://github.com/YogiKUmam/eksport-import-bali',
    imageUrl: '/case-studies/eksport-import-bali.png',
    overview:
      'Eksport Import Bali menampilkan pendekatan website company profile untuk sektor jasa perdagangan: pesan utama yang langsung, halaman yang mudah dipindai, visual brand yang profesional, serta alur CTA yang cocok untuk calon klien lokal maupun internasional.',
    visual: 'website',
  },
  {
    title: 'FocusMate AI',
    slug: 'focusmate-ai',
    label: 'AI Productivity Assistant',
    summary:
      'Chatbot AI hybrid untuk membantu pengguna menyusun prioritas, rencana fokus, habit, deadline, dan next action dari pesan bahasa alami.',
    stack: ['JavaScript', 'AI Chatbot', 'Productivity UX'],
    timeline: 'Product prototype',
    result:
      'Pengguna mendapatkan assistant produktivitas personal yang menerjemahkan input bebas menjadi rencana kerja yang lebih jelas dan bisa ditindaklanjuti.',
    repoUrl: 'https://github.com/YogiKUmam/FocusMate-AI',
    imageUrl: '/case-studies/focusmate-ai.png',
    overview:
      'FocusMate AI adalah contoh eksplorasi produk AI yang fokus pada workflow sehari-hari: percakapan natural, pemetaan prioritas, pengingat konteks, dan rekomendasi aksi berikutnya untuk membantu pengguna tetap bergerak.',
    visual: 'dashboard',
  },
  {
    title: 'StepUp AI Learning Planner',
    slug: 'stepup-ai-learning-planner',
    label: 'Learning Planner',
    summary:
      'Planner pembelajaran berbasis AI untuk membantu pengguna menyusun target belajar, rencana bertahap, dan jalur peningkatan skill yang lebih terarah.',
    stack: ['HTML', 'Learning UX', 'AI Planning Concept'],
    timeline: 'Prototype build',
    result:
      'Konsep learning planner tersusun sebagai produk digital yang bisa dikembangkan menjadi platform pendamping belajar mandiri.',
    demoUrl: 'https://step-up-dev-yogi.vercel.app/',
    repoUrl: 'https://github.com/YogiKUmam/StepUp-Ai-LearningPlanner',
    imageUrl: '/case-studies/stepup-ai-learning-planner.png',
    overview:
      'StepUp AI Learning Planner menunjukkan arah produk edukasi yang membantu pengguna mengubah tujuan besar menjadi rencana belajar yang lebih kecil, terukur, dan mudah diikuti dari hari ke hari.',
    visual: 'dashboard',
  },
  {
    title: 'Arkode Labs Website',
    slug: 'arkode-labs-website',
    label: 'Software House Website',
    summary:
      'Website resmi Arkode Labs dengan halaman layanan, case studies, pricing, blog, contact wizard, estimator project, SEO basics, dan visual brand yang konsisten.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    timeline: 'Iterative launch',
    result:
      'Arkode memiliki pusat identitas digital yang siap menampilkan layanan, portfolio, proses kerja, dan jalur konsultasi untuk calon klien.',
    demoUrl: 'https://arkodelabs.vercel.app',
    repoUrl: 'https://github.com/YogiKUmam/Arkode',
    imageUrl: '/case-studies/arkode-labs.png',
    overview:
      'Website Arkode Labs menjadi showcase utama brand: dari positioning software house, daftar layanan, portfolio project, artikel awal, sampai project estimator yang membantu calon klien memahami scope sebelum konsultasi.',
    visual: 'website',
  },
  {
    title: 'Developer Portfolio',
    slug: 'developer-portfolio',
    label: 'Personal Website',
    summary:
      'Portfolio personal untuk menampilkan profil, kemampuan teknis, pengalaman, dan kumpulan project dalam format website yang mudah dibagikan.',
    stack: ['CSS', 'Responsive UI', 'Portfolio Content'],
    timeline: 'Personal site',
    result:
      'Profil developer tersusun dalam satu halaman publik yang lebih mudah dipakai untuk networking, lamaran, atau showcase kemampuan.',
    demoUrl: 'https://yogi-builds.vercel.app/',
    repoUrl: 'https://github.com/YogiKUmam/Portofolio',
    imageUrl: '/case-studies/developer-portfolio.png',
    overview:
      'Developer Portfolio mewakili kebutuhan umum personal branding: menyusun identitas, skill, project, dan kontak menjadi halaman yang singkat, jelas, dan mudah dikembangkan seiring bertambahnya pengalaman.',
    visual: 'website',
  },
];

export const pricingModels = [
  {
    title: 'Starter Website',
    price: 'Mulai dari discovery ringan',
    fit: 'Untuk company profile sederhana yang perlu cepat terlihat profesional dan rapi.',
    includes: ['3-5 halaman utama', 'Responsive design', 'SEO dasar', 'Contact CTA'],
  },
  {
    title: 'Professional Website',
    price: 'Estimasi setelah scope',
    fit: 'Untuk brand yang butuh halaman layanan, portfolio, blog awal, dan copy yang lebih kuat.',
    includes: ['Sitemap lengkap', 'Landing sections', 'Blog/insights setup', 'Launch checklist'],
  },
  {
    title: 'Landing Page Campaign',
    price: 'Estimasi per kampanye',
    fit: 'Untuk promosi, validasi produk, atau akuisisi leads dengan halaman khusus.',
    includes: ['Offer structure', 'Conversion sections', 'Responsive design', 'Tracking-ready setup'],
  },
  {
    title: 'Custom Web Application',
    price: 'Custom quote',
    fit: 'Untuk dashboard, portal, booking, inventory, atau workflow internal.',
    includes: ['Discovery workshop', 'UI flow', 'Frontend/backend build', 'QA dan deployment'],
  },
  {
    title: 'Maintenance & Growth',
    price: 'Bulanan',
    fit: 'Untuk maintenance, update konten, perbaikan bug, dan improvement kecil setelah launch.',
    includes: ['Support queue', 'Small improvements', 'Monitoring ringan', 'Monthly summary'],
  },
];

export const posts = [
  {
    title: 'Checklist Website Company Profile yang Rapi dan Siap Mendatangkan Leads',
    slug: 'checklist-website-company-profile',
    excerpt:
      'Elemen penting agar website bisnis tidak hanya terlihat modern, tetapi juga membantu proses penjualan.',
  },
  {
    title: 'Kapan Bisnis Perlu Web Application, Bukan Spreadsheet Lagi',
    slug: 'kapan-perlu-custom-web-app',
    excerpt:
      'Tanda-tanda proses operasional sudah cukup penting untuk dipindahkan ke sistem web yang lebih terstruktur.',
  },
  {
    title: 'Cara Audit Website Bisnis dari Sisi Kredibilitas dan Konversi',
    slug: 'audit-website-bisnis',
    excerpt:
      'Kerangka sederhana untuk menilai apakah website sudah menjelaskan nilai, bukti, dan langkah berikutnya.',
  },
  {
    title: 'Alur Discovery yang Membuat Scope Project Lebih Jelas',
    slug: 'alur-discovery-scope-project',
    excerpt:
      'Cara menyusun kebutuhan, prioritas, risiko, dan output agar development tidak melebar tanpa arah.',
  },
  {
    title: 'Apa Saja yang Perlu Disiapkan Sebelum Membuat Dashboard Internal',
    slug: 'persiapan-dashboard-internal',
    excerpt:
      'Daftar data, role, proses, dan laporan yang sebaiknya dipetakan sebelum membangun dashboard.',
  },
];

export const faqs = [
  {
    question: 'Berapa lama membuat website company profile?',
    answer: 'Umumnya 2-5 minggu, tergantung jumlah halaman, kesiapan konten, dan kompleksitas desain.',
  },
  {
    question: 'Apakah bisa mulai tanpa konten lengkap?',
    answer: 'Bisa. Arkode Labs dapat membantu menyusun struktur copy awal dari informasi bisnis yang tersedia.',
  },
  {
    question: 'Apakah source code menjadi milik klien?',
    answer: 'Ya, kepemilikan source code dan aset final mengikuti proposal atau perjanjian project.',
  },
  {
    question: 'Apakah menyediakan maintenance?',
    answer:
      'Ya. Maintenance & Growth bisa mencakup update konten, perbaikan bug, improvement kecil, dan advisory teknis.',
  },
];
