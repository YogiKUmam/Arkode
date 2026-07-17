import { useLanguage } from './LanguageContext';

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

const indonesianNavItems = [
  { label: 'Layanan', href: '/services' },
  { label: 'Studi Kasus', href: '/case-studies' },
  { label: 'Tentang', href: '/about' },
  { label: 'Paket', href: '/pricing' },
  { label: 'Estimator', href: '/estimator' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/contact' },
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
    imageUrl: '/case-studies/eksport-import-bali.png',
    overview:
      'Eksport Import Bali menampilkan pendekatan website company profile untuk sektor jasa perdagangan: pesan utama yang langsung, halaman yang mudah dipindai, visual brand yang profesional, serta alur CTA yang cocok untuk calon klien lokal maupun internasional.',
    visual: 'website',
  },
  {
    title: 'KosanQ',
    slug: 'kosanq',
    label: 'Property Rental App',
    summary:
      'Aplikasi pencarian kos dengan lokasi, filter fasilitas, rekomendasi unit, wishlist, booking, dan alur navigasi mobile-first untuk calon penyewa.',
    stack: ['React', 'Vercel', 'Mobile-first UI', 'Property Search UX'],
    timeline: 'Product prototype',
    result:
      'Pengguna dapat menjelajahi pilihan kos secara cepat, memfilter kebutuhan utama, menyimpan favorit, dan masuk ke alur booking dari satu interface yang ringkas.',
    demoUrl: 'https://apps-kosanq.vercel.app/',
    imageUrl: '/case-studies/kosanq.png',
    overview:
      'KosanQ menunjukkan pendekatan produk marketplace kos yang praktis: lokasi sebagai konteks utama, filter fasilitas yang mudah dipakai, kartu rekomendasi, indikator trust, wishlist, booking, dan profil pengguna dalam tampilan yang terasa ringan untuk penggunaan harian.',
    visual: 'dashboard',
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
    demoUrl: 'https://focusmate-ai-iota.vercel.app/',
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

const englishSite = {
  ...site,
  category: 'Software House & Digital Solution Partner',
  whatsapp:
    'https://wa.me/6281282224676?text=Hi%20Arkode%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  tagline: 'Building clean, reliable, and scalable software.',
  heroHeadline: 'Software House for Websites, Web Apps, and Digital Systems Built to Scale.',
  heroSubheadline:
    'Arkode Labs helps businesses build professional websites, web applications, dashboards, and internal systems with a clear process, modern design, and solid technical foundations.',
};

const englishServices = [
  {
    title: 'Company Profile Website',
    summary: 'A professional website that explains your profile, services, proof of work, and calls to action clearly.',
    outcome: 'Your business looks more credible and prospects can understand your value faster.',
    deliverables: ['Sitemap', 'Copy structure', 'Responsive UI', 'SEO basics', 'Launch support'],
  },
  {
    title: 'Landing Page Development',
    summary: 'Campaign landing pages focused on messaging, visuals, performance, and conversion.',
    outcome: 'Your campaign gets a focused page that is clear, fast, and ready to collect leads.',
    deliverables: ['Offer structure', 'Responsive UI', 'Lead CTA', 'Tracking-ready setup', 'Launch support'],
  },
  {
    title: 'Web Application Development',
    summary: 'Web apps for portals, booking flows, operational workflows, or digital products.',
    outcome: 'Important processes can move into a measurable web system that is easier to evolve.',
    deliverables: ['Discovery', 'Scope', 'UI flow', 'Frontend/backend build', 'QA', 'Deployment'],
  },
  {
    title: 'Dashboard & Internal System',
    summary: 'Dashboards, admin panels, and internal systems designed around how your team works.',
    outcome: 'Your team gets a cleaner workspace for tracking data, statuses, and activity.',
    deliverables: ['Workflow mapping', 'Role-based flow', 'Dashboard UI', 'Data structure', 'QA'],
  },
  {
    title: 'UI/UX Design',
    summary: 'Interface and flow design for websites, web apps, dashboards, and internal systems.',
    outcome: 'The product becomes easier for users to understand and easier for engineers to build.',
    deliverables: ['User flow', 'Wireframe', 'Visual design', 'Responsive states', 'Design handoff'],
  },
  {
    title: 'Maintenance & Growth',
    summary: 'Monthly support for updates, fixes, monitoring, and improvements after launch.',
    outcome: 'Your digital assets stay healthy, relevant, and ready to grow with the business.',
    deliverables: ['Bug fixes', 'Small improvements', 'Content updates', 'Technical advisory'],
  },
];

const englishProblems = [
  'The website does not yet reflect the quality and direction of the business.',
  'Prospects still need to ask repeatedly because service information is not clearly structured.',
  'Important operations are still scattered across spreadsheets, chat, and manual work.',
  'The team needs a digital partner who can translate needs into realistic scope.',
];

const englishProcessSteps = [
  { title: 'Discovery', text: 'We clarify business goals, users, constraints, and project priorities.' },
  { title: 'Scope', text: 'Needs are translated into a clear, realistic, and executable scope.' },
  { title: 'Design', text: 'Page structure, flows, and interfaces are designed before build starts.' },
  { title: 'Build', text: 'The product is built with a clean, responsive, and maintainable foundation.' },
  { title: 'QA', text: 'We check functionality, mobile layout, basic accessibility, and performance.' },
  { title: 'Launch', text: 'The website or system goes live with a clear technical checklist.' },
  { title: 'Support', text: 'After launch, Arkode Labs helps with fixes, updates, and next iterations.' },
];

const englishCaseStudies = [
  {
    title: 'Nusantara Language Academy',
    slug: 'nusantara-language-academy',
    label: 'Education MVP',
    summary:
      'An interactive Indonesian language learning website for embassy staff, accompanying families, and newcomers with scenario modules, quizzes, learning progress, certificates, and an admin dashboard prototype.',
    stack: ['React', 'Vite', 'Custom CSS', 'Web Speech API'],
    timeline: '8 weeks',
    result:
      'An MVP ready for validating a scenario-based language learning platform for diplomatic and everyday life in Indonesia.',
    demoUrl: 'https://nusantara-language-academy.vercel.app/',
    imageUrl: '/case-studies/nusantara-language-academy.png',
    overview:
      'Nusantara Language Academy is a Bahasa Indonesia learning platform for embassy life, family routines, and everyday situations. It includes scenario-based paths, a placement quiz, course modules, listening/speaking/writing practice, certificates, and an admin prototype for progress tracking.',
    visual: 'dashboard',
  },
  {
    title: 'AI Resume Analyzer',
    slug: 'ai-resume-analyzer',
    label: 'AI Product',
    summary:
      'A full-stack application for comparing PDF resumes with job descriptions, reading keywords, calculating match scores, checking ATS structure, and generating evaluation reports.',
    stack: ['FastAPI', 'React', 'TypeScript', 'Vite', 'AI Advisor'],
    timeline: 'Full-stack build',
    result:
      'Users get an analysis panel, review history, and PDF/TXT reports for evaluating a resume against a job opening.',
    demoUrl: 'https://ai-resume-analyzer-sigma-coral.vercel.app/',
    imageUrl: '/case-studies/ai-resume-analyzer.png',
    overview:
      'AI Resume Analyzer shows Arkode capability in end-to-end AI product delivery: CV upload, PDF text extraction, scoring against job descriptions, keyword analysis, improvement recommendations, and report output.',
    visual: 'dashboard',
  },
  {
    title: 'Eksport Import Bali',
    slug: 'eksport-import-bali',
    label: 'Business Website',
    summary:
      'A professional website for a Bali export-import business with clear services, brand positioning, and calls to action for promotion and inquiry.',
    stack: ['React', 'Tailwind CSS', 'Responsive UI'],
    timeline: 'Website sprint',
    result:
      'The export-import business gets a more credible digital profile for explaining services, building trust, and directing prospects to inquiry.',
    demoUrl: 'https://eksport-import-bali.vercel.app/',
    imageUrl: '/case-studies/eksport-import-bali.png',
    overview:
      'Eksport Import Bali demonstrates a company profile website for trade services: direct messaging, scannable pages, professional brand visuals, and CTA flows for local and international prospects.',
    visual: 'website',
  },
  {
    title: 'KosanQ',
    slug: 'kosanq',
    label: 'Property Rental App',
    summary:
      'A boarding-house search app with location context, facility filters, unit recommendations, wishlist, booking, and mobile-first navigation for renters.',
    stack: ['React', 'Vercel', 'Mobile-first UI', 'Property Search UX'],
    timeline: 'Product prototype',
    result:
      'Users can browse boarding-house options quickly, filter key needs, save favorites, and move into booking from one compact interface.',
    demoUrl: 'https://apps-kosanq.vercel.app/',
    imageUrl: '/case-studies/kosanq.png',
    overview:
      'KosanQ demonstrates a practical rental marketplace product: location as the main context, easy facility filters, recommendation cards, trust indicators, wishlist, booking, and user profile flows in a lightweight daily-use interface.',
    visual: 'dashboard',
  },
  {
    title: 'FocusMate AI',
    slug: 'focusmate-ai',
    label: 'AI Productivity Assistant',
    summary:
      'A hybrid AI chatbot that helps users turn natural-language messages into priorities, focus plans, habits, deadlines, and next actions.',
    stack: ['JavaScript', 'AI Chatbot', 'Productivity UX'],
    timeline: 'Product prototype',
    result:
      'Users get a personal productivity assistant that turns free-form input into clearer and more actionable work plans.',
    demoUrl: 'https://focusmate-ai-iota.vercel.app/',
    imageUrl: '/case-studies/focusmate-ai.png',
    overview:
      'FocusMate AI explores an everyday AI workflow: natural conversation, priority mapping, contextual memory, and next-action recommendations that help users keep moving.',
    visual: 'dashboard',
  },
  {
    title: 'StepUp AI Learning Planner',
    slug: 'stepup-ai-learning-planner',
    label: 'Learning Planner',
    summary:
      'An AI learning planner that helps users define learning targets, staged plans, and clearer skill-growth paths.',
    stack: ['HTML', 'Learning UX', 'AI Planning Concept'],
    timeline: 'Prototype build',
    result:
      'The learning planner concept becomes a digital product foundation that can evolve into a self-directed learning companion.',
    demoUrl: 'https://step-up-dev-yogi.vercel.app/',
    imageUrl: '/case-studies/stepup-ai-learning-planner.png',
    overview:
      'StepUp AI Learning Planner shows how an education product can turn big goals into smaller, measurable, and easier-to-follow learning plans.',
    visual: 'dashboard',
  },
  {
    title: 'Arkode Labs Website',
    slug: 'arkode-labs-website',
    label: 'Software House Website',
    summary:
      'The official Arkode Labs website with services, case studies, pricing, blog, contact wizard, project estimator, SEO basics, and consistent visual branding.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    timeline: 'Iterative launch',
    result:
      'Arkode gets a digital identity hub for presenting services, portfolio, process, and consultation paths.',
    demoUrl: 'https://arkodelabs.vercel.app',
    imageUrl: '/case-studies/arkode-labs.png',
    overview:
      'The Arkode Labs website is the main brand showcase: software house positioning, service pages, portfolio, early articles, and a project estimator for scoping before consultation.',
    visual: 'website',
  },
  {
    title: 'Developer Portfolio',
    slug: 'developer-portfolio',
    label: 'Personal Website',
    summary:
      'A personal portfolio for presenting profile, technical skills, experience, and project work in a shareable website format.',
    stack: ['CSS', 'Responsive UI', 'Portfolio Content'],
    timeline: 'Personal site',
    result:
      'The developer profile becomes a public page for networking, applications, and capability showcase.',
    demoUrl: 'https://yogi-builds.vercel.app/',
    imageUrl: '/case-studies/developer-portfolio.png',
    overview:
      'Developer Portfolio reflects a common personal-branding need: organizing identity, skills, projects, and contact into a concise page that can grow with experience.',
    visual: 'website',
  },
];

const englishPricingModels = [
  {
    title: 'Starter Website',
    price: 'Starts from light discovery',
    fit: 'For a simple company profile that needs to look professional quickly.',
    includes: ['3-5 core pages', 'Responsive design', 'SEO basics', 'Contact CTA'],
  },
  {
    title: 'Professional Website',
    price: 'Estimated after scope',
    fit: 'For brands that need service pages, portfolio, starter blog, and stronger copy.',
    includes: ['Complete sitemap', 'Landing sections', 'Blog/insights setup', 'Launch checklist'],
  },
  {
    title: 'Landing Page Campaign',
    price: 'Estimated per campaign',
    fit: 'For promotions, product validation, or lead acquisition with a dedicated page.',
    includes: ['Offer structure', 'Conversion sections', 'Responsive design', 'Tracking-ready setup'],
  },
  {
    title: 'Custom Web Application',
    price: 'Custom quote',
    fit: 'For dashboards, portals, booking, inventory, or internal workflows.',
    includes: ['Discovery workshop', 'UI flow', 'Frontend/backend build', 'QA and deployment'],
  },
  {
    title: 'Maintenance & Growth',
    price: 'Monthly',
    fit: 'For maintenance, content updates, bug fixes, and small improvements after launch.',
    includes: ['Support queue', 'Small improvements', 'Light monitoring', 'Monthly summary'],
  },
];

const englishPosts = [
  {
    title: 'A Practical Company Profile Website Checklist for Lead Generation',
    slug: 'checklist-website-company-profile',
    excerpt:
      'Key elements that help a business website look modern while supporting the sales process.',
  },
  {
    title: 'When Your Business Needs a Web Application Instead of Another Spreadsheet',
    slug: 'kapan-perlu-custom-web-app',
    excerpt:
      'Signals that an operational process is important enough to move into a structured web system.',
  },
  {
    title: 'How to Audit a Business Website for Credibility and Conversion',
    slug: 'audit-website-bisnis',
    excerpt:
      'A simple framework for checking whether your website explains value, proof, and next steps.',
  },
  {
    title: 'A Discovery Flow That Keeps Project Scope Clear',
    slug: 'alur-discovery-scope-project',
    excerpt:
      'How to structure needs, priorities, risks, and output so development stays focused.',
  },
  {
    title: 'What to Prepare Before Building an Internal Dashboard',
    slug: 'persiapan-dashboard-internal',
    excerpt:
      'Data, roles, processes, and reporting questions to map before building a dashboard.',
  },
];

const englishFaqs = [
  {
    question: 'How long does a company profile website take?',
    answer: 'Usually 2-5 weeks, depending on page count, content readiness, and design complexity.',
  },
  {
    question: 'Can we start before all content is ready?',
    answer: 'Yes. Arkode Labs can help structure early copy from the business information available.',
  },
  {
    question: 'Does the client own the source code?',
    answer: 'Yes, source code and final asset ownership follows the proposal or project agreement.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Yes. Maintenance & Growth can include content updates, bug fixes, small improvements, and technical advisory.',
  },
];

const idPageCopy = {
  common: {
    consultation: 'Konsultasi',
    projectConsultation: 'Konsultasi proyek',
    viewServices: 'Lihat Layanan',
    liveDemo: 'Live Demo',
    timeline: 'Timeline',
    result: 'Result',
    featured: 'Featured',
    aboutWebsite: 'Tentang website',
    responseLine: 'Respons biasanya dalam 1 hari kerja.',
  },
  home: {
    seoTitle: `${site.name} | Software House dan Digital Solution Partner`,
    seoDescription:
      'Software house untuk website profesional, web app, dashboard, UI/UX, dan maintenance yang siap berkembang.',
    proofItems: [
      { value: '01', label: 'Discovery-first scope' },
      { value: '02', label: 'Responsive product UI' },
      { value: '03', label: 'Launch and support' },
    ],
    trustItems: [
      { title: 'Frontend modern', text: 'React-ready, responsive, cepat, dan mudah dikembangkan.' },
      { title: 'Scope jelas', text: 'Discovery, prioritas, timeline, dan deliverable dibuat transparan.' },
      { title: 'Launch rapi', text: 'SEO dasar, aksesibilitas, QA mobile, dan support setelah online.' },
    ],
    capabilityLabel: 'Capabilities',
    capabilityItems: ['Company profile', 'Custom web app', 'Dashboard', 'UI/UX', 'Maintenance'],
    problemEyebrow: 'Masalah yang kami selesaikan',
    problemTitle: 'Solusi digital yang rapi dari tampilan sampai fondasi teknis.',
    problemCardText:
      'Kami bantu menerjemahkan masalah ini menjadi struktur halaman, flow, dan sistem yang bisa digunakan.',
    serviceEyebrow: 'Layanan utama',
    serviceTitle: 'Bangun aset digital dengan prioritas yang jelas.',
    serviceIntro:
      'Kami menggabungkan strategi, desain interface, dan engineering agar website atau sistem tidak hanya terlihat modern, tetapi juga siap dipakai.',
    featuredService: 'Featured service',
    caseEyebrow: 'Case studies',
    caseTitle: 'Project showcase yang lebih mudah dipercaya.',
    allCases: 'Lihat semua case study',
    deliveryEyebrow: 'Delivery system',
    deliveryTitle: 'Dari ide sampai launch dengan ritme yang terlihat.',
    visualEyebrow: 'Visual approach',
    visualTitle: 'Setiap solusi dibangun dengan bentuk visual yang mudah dipahami.',
    visualIntro:
      'Preview, dashboard, dan flow dibuat sejak awal agar tim bisnis bisa melihat arah produk sebelum development penuh.',
    systemPreviewTitle: 'Dashboard, website, dan web app dalam satu fondasi delivery.',
    systemPreviewEyebrow: 'Arkode system preview',
    featuredPreviewEyebrow: 'Featured live preview',
    visualPreviewTitle: 'Website company profile dengan struktur pesan dan CTA yang jelas.',
    visualPreviewEyebrow: 'Website preview',
    processPreviewTitle: 'User flow dan delivery plan yang bisa dipantau sejak discovery.',
    processPreviewEyebrow: 'Process preview',
    faqEyebrow: 'FAQ',
    faqTitle: 'Pertanyaan yang sering muncul sebelum mulai project.',
  },
  cta: {
    heading: 'Siap membuat sistem digital bisnis Anda terlihat lebih siap jual?',
    text: 'Ceritakan kebutuhan Anda, lalu kami bantu rapikan scope, prioritas, dan langkah build yang realistis.',
    primary: 'Konsultasi proyek',
    secondary: 'Hitung scope dulu',
  },
  servicesPage: {
    seoTitle: `Services | ${site.name}`,
    seoDescription:
      'Layanan Arkode Labs untuk website company profile, landing page, web application, dashboard, UI/UX, dan maintenance.',
    eyebrow: 'Services',
    title: 'Layanan software house untuk website, web app, dashboard, dan sistem digital custom.',
    intro:
      'Kami membantu dari struktur, desain, build, launch, sampai support setelah online. Setiap layanan dimulai dari scope yang jelas agar keputusan teknis tetap nyambung dengan tujuan bisnis.',
    cta: 'Diskusi kebutuhan',
    primaryEngagement: 'Primary engagement',
    startDiscovery: 'Mulai dari discovery',
    mainEyebrow: 'Layanan utama',
    mainTitle: 'Pilih model kerja yang paling sesuai dengan tahap bisnis Anda.',
    outcome: 'Outcome',
    heroPreviewTitle: 'Scope, UI, build, QA, dan support dibuat dalam satu alur delivery.',
    heroPreviewEyebrow: 'Service system',
    buildPreviewTitle: 'Custom dashboard, portal, dan operational system.',
    buildPreviewEyebrow: 'Build preview',
    supportPreviewTitle: 'Monitoring, QA, dan improvement setelah launch tetap terlihat rapi.',
    supportPreviewEyebrow: 'Support preview',
    processEyebrow: 'Cara kerja',
    processTitle: 'Ritme project dibuat transparan dari awal.',
    processIntro:
      'Kami menjaga proses tetap praktis: mulai dari memahami masalah, menyepakati prioritas, lalu membangun dengan checkpoint yang jelas.',
  },
  caseStudiesPage: {
    seoTitle: `Case Studies | ${site.name}`,
    seoDescription: 'Contoh project dan engagement Arkode Labs untuk website bisnis, dashboard, dan sistem web.',
    eyebrow: 'Case studies',
    title: 'Case studies yang menunjukkan cara kami menyusun masalah, scope, dan hasil.',
    intro:
      'Kami menampilkan contoh engagement dengan konteks yang jujur: jenis project, teknologi yang relevan, estimasi timeline, dan hasil yang ingin dicapai.',
    examplesEyebrow: 'Project examples',
    examplesTitle: 'Bukti awal yang ringkas dan mudah dievaluasi.',
    nextEyebrow: 'Next project',
    nextTitle: 'Punya masalah serupa yang perlu dibuat lebih terstruktur?',
    nextIntro: 'Kami bisa membantu memetakan scope awal sebelum masuk ke desain dan development.',
    nextCta: 'Mulai konsultasi',
  },
  pricingPage: {
    seoTitle: `Pricing | ${site.name}`,
    seoDescription: 'Model paket Arkode Labs untuk website, landing page, web application, dan maintenance.',
    eyebrow: 'Engagement model',
    title: 'Paket layanan dan timeline yang dimulai dari scope yang jelas.',
    intro:
      'Setiap bisnis punya kebutuhan, konten, dan risiko teknis yang berbeda. Model berikut membantu menentukan arah estimasi sebelum proposal final.',
    modelsEyebrow: 'Pricing models',
    modelsTitle: 'Pilih titik awal yang paling dekat dengan kebutuhan Anda.',
    factorsEyebrow: 'What affects estimate',
    factorsTitle: 'Estimasi final biasanya dipengaruhi kompleksitas konten, integrasi, dan alur pengguna.',
    factorsIntro:
      'Kami akan membantu memisahkan kebutuhan wajib, nice-to-have, dan fase berikutnya agar budget lebih mudah dikontrol.',
    factors: ['Jumlah halaman dan variasi konten', 'Kebutuhan backend atau integrasi', 'QA, migrasi, dan support launch'],
  },
  blogPage: {
    seoTitle: `Blog | ${site.name}`,
    seoDescription: 'Insight praktis tentang website bisnis, custom web app, kredibilitas digital, dan konversi.',
    eyebrow: 'Insights',
    title: 'Insight praktis untuk membuat website dan sistem web lebih berguna.',
    intro:
      'Artikel singkat tentang struktur website, keputusan teknis, dan cara melihat aset digital dari sisi bisnis.',
    latestEyebrow: 'Latest posts',
    latestTitle: 'Preview artikel yang bisa menjadi titik awal audit.',
    preview: 'Artikel preview',
  },
};

const englishPageCopy = {
  common: {
    consultation: 'Consultation',
    projectConsultation: 'Project consultation',
    viewServices: 'View services',
    liveDemo: 'Live Demo',
    timeline: 'Timeline',
    result: 'Result',
    featured: 'Featured',
    aboutWebsite: 'About this website',
    responseLine: 'We usually respond within 1 business day.',
  },
  home: {
    seoTitle: `${englishSite.name} | Software House and Digital Solution Partner`,
    seoDescription:
      'Software house for professional websites, web apps, dashboards, UI/UX, and maintenance built to scale.',
    proofItems: [
      { value: '01', label: 'Discovery-first scope' },
      { value: '02', label: 'Responsive product UI' },
      { value: '03', label: 'Launch and support' },
    ],
    trustItems: [
      { title: 'Modern frontend', text: 'React-ready, responsive, fast, and easy to extend.' },
      { title: 'Clear scope', text: 'Discovery, priorities, timeline, and deliverables stay transparent.' },
      { title: 'Clean launch', text: 'SEO basics, accessibility, mobile QA, and post-launch support.' },
    ],
    capabilityLabel: 'Capabilities',
    capabilityItems: ['Company profile', 'Custom web app', 'Dashboard', 'UI/UX', 'Maintenance'],
    problemEyebrow: 'Problems we solve',
    problemTitle: 'Clean digital solutions from interface to technical foundation.',
    problemCardText:
      'We translate this problem into page structure, flows, and usable systems.',
    serviceEyebrow: 'Core services',
    serviceTitle: 'Build digital assets with clear priorities.',
    serviceIntro:
      'We combine strategy, interface design, and engineering so your website or system is not only modern, but ready to use.',
    featuredService: 'Featured service',
    caseEyebrow: 'Case studies',
    caseTitle: 'A project showcase that is easier to trust.',
    allCases: 'View all case studies',
    deliveryEyebrow: 'Delivery system',
    deliveryTitle: 'From idea to launch with a visible rhythm.',
    visualEyebrow: 'Visual approach',
    visualTitle: 'Every solution is shaped visually so it is easy to understand.',
    visualIntro:
      'Previews, dashboards, and flows are created early so business teams can see product direction before full development.',
    systemPreviewTitle: 'Dashboards, websites, and web apps in one delivery foundation.',
    systemPreviewEyebrow: 'Arkode system preview',
    featuredPreviewEyebrow: 'Featured live preview',
    visualPreviewTitle: 'A company profile website with clear messaging structure and CTA.',
    visualPreviewEyebrow: 'Website preview',
    processPreviewTitle: 'User flow and delivery plan that can be tracked from discovery.',
    processPreviewEyebrow: 'Process preview',
    faqEyebrow: 'FAQ',
    faqTitle: 'Common questions before starting a project.',
  },
  cta: {
    heading: 'Ready to make your business software look more credible and sales-ready?',
    text: 'Tell us what you need, and we will help clarify scope, priorities, and realistic build steps.',
    primary: 'Project consultation',
    secondary: 'Estimate scope first',
  },
  servicesPage: {
    seoTitle: `Services | ${englishSite.name}`,
    seoDescription:
      'Arkode Labs services for company profile websites, landing pages, web applications, dashboards, UI/UX, and maintenance.',
    eyebrow: 'Services',
    title: 'Software house services for websites, web apps, dashboards, and custom digital systems.',
    intro:
      'We help from structure, design, build, and launch to post-launch support. Every service starts with clear scope so technical decisions stay connected to business goals.',
    cta: 'Discuss your needs',
    primaryEngagement: 'Primary engagement',
    startDiscovery: 'Start with discovery',
    mainEyebrow: 'Core services',
    mainTitle: 'Choose the working model that fits your business stage.',
    outcome: 'Outcome',
    heroPreviewTitle: 'Scope, UI, build, QA, and support in one delivery flow.',
    heroPreviewEyebrow: 'Service system',
    buildPreviewTitle: 'Custom dashboards, portals, and operational systems.',
    buildPreviewEyebrow: 'Build preview',
    supportPreviewTitle: 'Monitoring, QA, and post-launch improvements stay organized.',
    supportPreviewEyebrow: 'Support preview',
    processEyebrow: 'How we work',
    processTitle: 'Project rhythm stays transparent from the beginning.',
    processIntro:
      'We keep the process practical: understand the problem, agree on priorities, then build with clear checkpoints.',
  },
  caseStudiesPage: {
    seoTitle: `Case Studies | ${englishSite.name}`,
    seoDescription: 'Arkode Labs project examples for business websites, dashboards, and web systems.',
    eyebrow: 'Case studies',
    title: 'Case studies that show how we structure problems, scope, and outcomes.',
    intro:
      'We show project examples with honest context: project type, relevant technology, estimated timeline, and intended results.',
    examplesEyebrow: 'Project examples',
    examplesTitle: 'Concise proof points that are easy to evaluate.',
    nextEyebrow: 'Next project',
    nextTitle: 'Have a similar problem that needs a clearer structure?',
    nextIntro: 'We can help map the early scope before design and development.',
    nextCta: 'Start consultation',
  },
  pricingPage: {
    seoTitle: `Pricing | ${englishSite.name}`,
    seoDescription: 'Arkode Labs engagement models for websites, landing pages, web applications, and maintenance.',
    eyebrow: 'Engagement model',
    title: 'Service packages and timelines that start with clear scope.',
    intro:
      'Every business has different content needs, technical risks, and constraints. These models help frame the estimate before a final proposal.',
    modelsEyebrow: 'Pricing models',
    modelsTitle: 'Choose the starting point closest to your needs.',
    factorsEyebrow: 'What affects estimate',
    factorsTitle: 'Final estimates usually depend on content complexity, integrations, and user flows.',
    factorsIntro:
      'We help separate must-have needs, nice-to-have items, and later phases so the budget is easier to control.',
    factors: ['Page count and content variations', 'Backend or integration needs', 'QA, migration, and launch support'],
  },
  blogPage: {
    seoTitle: `Blog | ${englishSite.name}`,
    seoDescription: 'Practical insights about business websites, custom web apps, digital credibility, and conversion.',
    eyebrow: 'Insights',
    title: 'Practical insights for making websites and web systems more useful.',
    intro:
      'Short articles about website structure, technical decisions, and how to evaluate digital assets from a business perspective.',
    latestEyebrow: 'Latest posts',
    latestTitle: 'Article previews that can become a starting point for an audit.',
    preview: 'Article preview',
  },
};

export const localizedContent = {
  en: {
    site: englishSite,
    palette,
    values,
    navItems,
    services: englishServices,
    problems: englishProblems,
    processSteps: englishProcessSteps,
    caseStudies: englishCaseStudies,
    pricingModels: englishPricingModels,
    posts: englishPosts,
    faqs: englishFaqs,
    pageCopy: englishPageCopy,
  },
  id: {
    site,
    palette,
    values,
    navItems: indonesianNavItems,
    services,
    problems,
    processSteps,
    caseStudies,
    pricingModels,
    posts,
    faqs,
    pageCopy: idPageCopy,
  },
} as const;

export function useContent() {
  const { language } = useLanguage();
  return localizedContent[language];
}
