import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';

type ScaffoldPageProps = {
  title: string;
};

function ScaffoldPage({ title }: ScaffoldPageProps) {
  return (
    <section className="container-shell py-16 sm:py-20">
      <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{title}</h1>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ScaffoldPage title="Home" />} />
        <Route path="/services" element={<ScaffoldPage title="Services" />} />
        <Route path="/case-studies" element={<ScaffoldPage title="Case Studies" />} />
        <Route path="/about" element={<ScaffoldPage title="About" />} />
        <Route path="/pricing" element={<ScaffoldPage title="Pricing" />} />
        <Route path="/blog" element={<ScaffoldPage title="Blog" />} />
        <Route path="/contact" element={<ScaffoldPage title="Contact" />} />
        <Route path="/privacy" element={<ScaffoldPage title="Privacy Policy" />} />
        <Route path="/terms" element={<ScaffoldPage title="Terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
