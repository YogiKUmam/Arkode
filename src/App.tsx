import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { CaseStudies } from './pages/CaseStudies';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Services } from './pages/Services';

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
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ScaffoldPage title="Contact" />} />
        <Route path="/privacy" element={<ScaffoldPage title="Privacy Policy" />} />
        <Route path="/terms" element={<ScaffoldPage title="Terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
