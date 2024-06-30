import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/hero";
import ExperienceSection from "./components/exp";
import ProjectsSection from "./components/projects";
import GetInTouchSection from "./components/contact";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-white">
      <Head>
        <title>Meer Sawood&lsquo;s Portfolio</title>
        <meta name="description" content="Portfolio of Sawood, a dedicated DevOps/Quality Engineer with over 5 years of expertise in developing, testing, and deploying applications on hybrid cloud infrastructure." />
        <meta name="keywords" content="DevOps, Quality Engineer, Portfolio, Sawood, Cloud Infrastructure, msawood, MeerSawood, Meer" />
        <meta property="og:title" content="Meer Sawood's Portfolio" />
        <meta property="og:description" content="Portfolio of Sawood, a dedicated DevOps/Quality Engineer with over 5 years of expertise in developing, testing, and deploying applications on hybrid cloud infrastructure." />
        {/* <meta property="og:image" content="/path/to/your-image.jpg" /> */}
        <meta property="og:url" content="https://msawood.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://msawood.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Meer Sawood",
              "url": "https://msawood.com",
              "sameAs": [
                "https://www.linkedin.com/in/sawood-meer-a50465119/",
                "https://github.com/sawood14012",
                "https://x.com/sawoodsays"
              ],
              "jobTitle": "DevOps/Quality Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Red Hat"
              }
            }),
          }}
        />
      </Head>
      <header className='sticky top-0 z-50'>
        <Header />
      </header>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <GetInTouchSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
