import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Admin } from './pages/Admin';
import { Blog } from './pages/Blog';
import { CaseStudies } from './pages/CaseStudies';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Privacy, Terms } from './pages/Legal';
import { Pricing } from './pages/Pricing';
import { Services } from './pages/Services';

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
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
