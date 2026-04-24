import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { projectCases } from "@/data/projectCases";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://rolaxlandscapingcanada.com";

export function generateStaticParams() {
  return projectCases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Rolax Landscaping Reading",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `${siteUrl}/projects/${project.slug}/`;
  const locationCity = project.location.split(",")[0].trim();
  const serviceKeyword = project.service.toLowerCase();

  return {
    title: `${project.title} | Rolax Projects`,
    description: project.summary,
    keywords: [
      `${serviceKeyword} project ${locationCity}`,
      `${locationCity} landscaping portfolio`,
      "Reading area landscaping projects",
      "Rolax Landscaping Reading projects",
      `${project.service} case study`,
    ],
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: canonical,
      type: "article",
      images: [
        {
          url: `${siteUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [`${siteUrl}${project.image}`],
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading={project.title}
        description="Detailed project overview and execution summary"
        currentPage="Project Details"
      />

      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p style={{ color: "#16a34a", fontWeight: 600, marginBottom: "8px" }}>
                {project.service} • {project.location}
              </p>
              <h3 style={{ marginBottom: "16px" }}>Project Overview</h3>
              <p style={{ color: "#555", marginBottom: "24px" }}>{project.summary}</p>
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "24px" }}
              />
              <p style={{ fontSize: "18px", lineHeight: 1.8 }}>{project.details}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
