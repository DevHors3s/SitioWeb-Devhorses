import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, type CaseSlug } from "@/lib/cases";
import CaseStudy from "@/components/CaseStudy";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

function getCase(slug: string) {
  return Object.prototype.hasOwnProperty.call(caseStudies, slug)
    ? caseStudies[slug as CaseSlug]
    : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCase(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Caso de estudio | DevHorses`,
    description: project.es.intro,
    alternates: { canonical: `/proyectos/${slug}` },
    openGraph: {
      title: `${project.name} | DevHorses`,
      description: project.es.intro,
      url: `/proyectos/${slug}`,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getCase(slug)) notFound();
  return <CaseStudy slug={slug as CaseSlug} />;
}
