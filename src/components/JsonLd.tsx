const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DevHorses",
  url: "https://www.devhorses.com",
  logo: "https://www.devhorses.com/logo-full.png",
  image: "https://www.devhorses.com/og-image.png",
  description:
    "Agencia de desarrollo web y aplicaciones en Lima, Perú. Diseñamos y desarrollamos webs, sistemas de gestión y apps que generan clientes reales.",
  email: "hola@devhorses.com",
  telephone: "+51981916198",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  areaServed: "PE",
  sameAs: [
    "https://github.com/Mathifa59",
    "https://www.linkedin.com/company/devhorses",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
