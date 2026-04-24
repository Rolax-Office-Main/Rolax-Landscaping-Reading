import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { blogPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://rolaxlandscapingcanada.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Rolax Landscaping Reading",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `${siteUrl}/blogs/${post.slug}/`;
  const categoryKeyword = post.category.toLowerCase();
  const subCategoryKeyword = post.subCategory.toLowerCase();

  return {
    title: `${post.title} | Rolax Blog`,
    description: post.excerpt,
    keywords: [
      `${post.title} Reading PA`,
      `${categoryKeyword} landscaping tips`,
      `${subCategoryKeyword} guide Reading PA`,
      "landscaping blog Reading PA",
      "Rolax Landscaping Reading blog",
    ],
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: "article",
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${siteUrl}${post.image}`],
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Rolax Landscaping Reading",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: `${siteUrl}/blogs/${post.slug}/`,
  };

  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading={post.title}
        description="Landscaping insights from Rolax experts"
        currentPage="Blog Details"
      />

      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p style={{ color: "#16a34a", fontWeight: 600 }}>
                {post.category} • {post.subCategory}
              </p>
              <h2 style={{ marginBottom: "16px" }}>{post.title}</h2>
              <p style={{ color: "#555", marginBottom: "24px" }}>
                {post.date} • By {post.author}
              </p>
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={700}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "24px" }}
              />
              <p style={{ fontSize: "18px", lineHeight: 1.8 }}>{post.content}</p>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
