import { Section } from '../components/Section';
import { Seo } from '../components/Seo';
import { site } from '../content/site';

export function Privacy() {
  return (
    <>
      <Seo
        title={`Privacy Policy | ${site.name}`}
        description="Kebijakan privasi awal Arkode Labs tentang penggunaan data kontak dan komunikasi project."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Halaman ini menjelaskan bagaimana {site.name} menggunakan informasi yang Anda kirim
            saat menghubungi kami atau berdiskusi tentang project.
          </p>
        </div>
      </section>

      <Section title="Informasi yang kami kumpulkan" className="bg-white">
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>
            Kami dapat menerima nama, perusahaan, alamat email, nomor WhatsApp, dan detail project
            yang Anda berikan melalui form kontak, email, telepon, atau kanal komunikasi lain.
          </p>
          <p>
            Informasi tersebut digunakan untuk memahami kebutuhan, menyiapkan respons, menyusun
            proposal, dan menjalankan komunikasi terkait layanan {site.name}.
          </p>
        </div>
      </Section>

      <Section title="Penggunaan dan penyimpanan data">
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>
            Kami tidak menjual data kontak Anda. Akses ke informasi project dibatasi pada pihak
            yang membantu proses discovery, proposal, produksi, dukungan, atau administrasi layanan.
          </p>
          <p>
            Anda dapat meminta koreksi atau penghapusan informasi kontak dengan menghubungi kami di{' '}
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
  return (
    <>
      <Seo
        title={`Terms | ${site.name}`}
        description="Ketentuan awal penggunaan website dan layanan Arkode Labs."
      />

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl">Terms</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ketentuan ini menjadi pengantar umum untuk penggunaan website dan komunikasi awal
            layanan {site.name}.
          </p>
        </div>
      </section>

      <Section title="Penggunaan website" className="bg-white">
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>
            Konten di website ini disediakan sebagai informasi umum tentang layanan, proses, dan
            pendekatan kerja {site.name}. Kami berupaya menjaga informasi tetap jelas dan relevan,
            tetapi detail layanan dapat berubah sesuai kebutuhan project.
          </p>
          <p>
            Anda setuju untuk tidak menggunakan website ini untuk aktivitas yang mengganggu layanan,
            melanggar hukum, atau menyalahgunakan kanal komunikasi kami.
          </p>
        </div>
      </Section>

      <Section title="Proposal dan kerja sama">
        <div className="max-w-3xl space-y-6 leading-8 text-slate-600">
          <p>
            Diskusi awal melalui form kontak, email, atau WhatsApp tidak otomatis menjadi perjanjian
            kerja. Scope, timeline, biaya, kepemilikan aset, dan dukungan setelah launch akan
            dijelaskan dalam proposal atau dokumen kerja sama terpisah.
          </p>
          <p>
            Untuk pertanyaan tentang ketentuan ini, hubungi kami di{' '}
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
