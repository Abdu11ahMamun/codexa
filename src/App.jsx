import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { runSanityChecks } from "./utils/helpers";

// Layout Components
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Background } from "./components/layout/Background";
import { LoadingScreen } from "./components/LoadingScreen";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";

const SITE_URL = "https://www.codexaitbd.com";

const SEO_BY_PATH = {
  "/": {
    title: "Codexa IT - Digital Solutions",
    description:
      "Codexa IT delivers end-to-end IT services including software development, technical support, and managed infrastructure solutions.",
  },
  "/about": {
    title: "About Codexa IT | Technology Partner for Business Growth",
    description:
      "Learn about Codexa IT, our mission, and how our experts help organizations with modern technology, support, and digital transformation.",
  },
  "/services": {
    title: "IT Services | Codexa IT",
    description:
      "Explore Codexa IT services including software engineering, web and mobile development, analytics, QA, and IT strategy advisory.",
  },
  "/careers": {
    title: "Careers at Codexa IT",
    description:
      "Join Codexa IT and build impactful digital products with a collaborative team across engineering, design, and business operations.",
  },
  "/contact": {
    title: "Contact Codexa IT",
    description:
      "Contact Codexa IT for software projects, IT support, and digital solutions. Reach us by email, phone, or visit our Dhaka office.",
  },
};

function setMetaTag(selector, attributes, content) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[pathname] || SEO_BY_PATH["/"];
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = seo.title;

    setMetaTag('meta[name="description"]', { name: "description" }, seo.description);
    setMetaTag('meta[property="og:title"]', { property: "og:title" }, seo.title);
    setMetaTag('meta[property="og:description"]', { property: "og:description" }, seo.description);
    setMetaTag('meta[property="og:type"]', { property: "og:type" }, "website");
    setMetaTag('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    setMetaTag('meta[property="og:image"]', { property: "og:image" }, `${SITE_URL}/favicon.png`);
    setMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }, "summary");
    setMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }, seo.title);
    setMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }, seo.description);
    setMetaTag('meta[name="twitter:image"]', { name: "twitter:image" }, `${SITE_URL}/favicon.png`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Background />
      <Header scrolled={scrolled} />
      <ScrollToTop />
      <SeoManager />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    runSanityChecks();
    document.documentElement.style.scrollBehavior = 'smooth';
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      document.documentElement.style.scrollBehavior = '';
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
