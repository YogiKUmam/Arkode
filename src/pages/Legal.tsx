import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { useLanguage } from '../content/LanguageContext';
import { useContent } from '../content/site';

const legalCopy = {
  en: {
    privacy: {
      seoDescription: 'Arkode Labs privacy policy for contact data and project communication.',
      title: 'Privacy Policy',
      intro:
        'This page explains how Arkode Labs uses the information you send when contacting us or discussing a project.',
      informationTitle: 'Information we collect',
      information:
        'We may receive your name, company, email address, WhatsApp number, and project details through contact forms, email, phone, or other communication channels.',
      usage:
        'This information is used to understand your needs, prepare responses, create proposals, and manage communication related to Arkode Labs services.',
      storageTitle: 'Data use and storage',
      storage:
        'We do not sell your contact data. Access to project information is limited to parties helping with discovery, proposals, production, support, or service administration.',
      correction: 'You can request correction or deletion of contact information by reaching us at',
    },
    terms: {
      seoDescription: 'Initial website and service terms for Arkode Labs.',
      title: 'Terms',
      intro: 'These terms are a general introduction for using this website and starting service communication with Arkode Labs.',
      websiteTitle: 'Website use',
      website:
        'Content on this website is provided as general information about Arkode Labs services, process, and working approach. We try to keep information clear and relevant, but service details may change based on project needs.',
      conduct:
        'You agree not to use this website for activities that disrupt services, violate the law, or misuse our communication channels.',
      proposalTitle: 'Proposals and collaboration',
      proposal:
        'Initial discussions through contact forms, email, or WhatsApp do not automatically become a work agreement. Scope, timeline, cost, asset ownership, and post-launch support will be explained in a separate proposal or collaboration document.',
      question: 'For questions about these terms, contact us at',
    },
  },
  id: {
    privacy: {
      seoDescription: 'Kebijakan privasi awal Arkode Labs tentang penggunaan data kontak dan komunikasi project.',
      title: 'Privacy Policy',
      intro:
        'Halaman ini menjelaskan bagaimana Arkode Labs menggunakan informasi yang Anda kirim saat menghubungi kami atau berdiskusi tentang project.',
      informationTitle: 'Informasi yang kami kumpulkan',
      information:
        'Kami dapat menerima nama, perusahaan, alamat email, nomor WhatsApp, dan detail project yang Anda berikan melalui form kontak, email, telepon, atau kanal komunikasi lain.',
      usage:
        'Informasi tersebut digunakan untuk memahami kebutuhan, menyiapkan respons, menyusun proposal, dan menjalankan komunikasi terkait layanan Arkode Labs.',
      storageTitle: 'Penggunaan dan penyimpanan data',
      storage:
        'Kami tidak menjual data kontak Anda. Akses ke informasi project dibatasi pada pihak yang membantu proses discovery, proposal, produksi, dukungan, atau administrasi layanan.',
      correction: 'Anda dapat meminta koreksi atau penghapusan informasi kontak dengan menghubungi kami di',
    },
    terms: {
      seoDescription: 'Ketentuan awal penggunaan website dan layanan Arkode Labs.',
      title: 'Terms',
      intro: 'Ketentuan ini menjadi pengantar umum untuk penggunaan website dan komunikasi awal layanan Arkode Labs.',
      websiteTitle: 'Penggunaan website',
      website:
        'Konten di website ini disediakan sebagai informasi umum tentang layanan, proses, dan pendekatan kerja Arkode Labs. Kami berupaya menjaga informasi tetap jelas dan relevan, tetapi detail layanan dapat berubah sesuai kebutuhan project.',
      conduct:
        'Anda setuju untuk tidak menggunakan website ini untuk aktivitas yang mengganggu layanan, melanggar hukum, atau menyalahgunakan kanal komunikasi kami.',
      proposalTitle: 'Proposal dan kerja sama',
      proposal:
        'Diskusi awal melalui form kontak, email, atau WhatsApp tidak otomatis menjadi perjanjian kerja. Scope, timeline, biaya, kepemilikan aset, dan dukungan setelah launch akan dijelaskan dalam proposal atau dokumen kerja sama terpisah.',
      question: 'Untuk pertanyaan tentang ketentuan ini, hubungi kami di',
    },
  },
};

export function Privacy() {
  const { language } = useLanguage();
  const { site } = useContent();
  const copy = legalCopy[language].privacy;

  return (
    <>
      <Seo
        title={`${copy.title} | ${site.name}`}
        description={copy.seoDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {copy.intro}
          </p>
        </div>
      </section>

      <Section title={copy.informationTitle} className="bg-white">
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>{copy.information}</p>
          <p>{copy.usage}</p>
        </div>
      </Section>

      <Section title={copy.storageTitle}>
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>{copy.storage}</p>
          <p>
            {copy.correction}{' '}
            <a className="font-semibold text-accent hover:text-navy" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

export function Terms() {
  const { language } = useLanguage();
  const { site } = useContent();
  const copy = legalCopy[language].terms;

  return (
    <>
      <Seo
        title={`${copy.title} | ${site.name}`}
        description={copy.seoDescription}
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl">{copy.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {copy.intro}
          </p>
        </div>
      </section>

      <Section title={copy.websiteTitle} className="bg-white">
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>{copy.website}</p>
          <p>{copy.conduct}</p>
        </div>
      </Section>

      <Section title={copy.proposalTitle}>
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>{copy.proposal}</p>
          <p>
            {copy.question}{' '}
            <a className="font-semibold text-accent hover:text-navy" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
