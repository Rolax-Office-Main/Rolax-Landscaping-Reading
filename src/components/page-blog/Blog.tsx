"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaLongArrowAltRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { blogPosts } from "@/data/blogPosts";

type BlogDataType = {
  id: string;
  slug: string;
  img: string;
  parentCat: string;
  regularCat: string;
  heading: string;
  date: string;
  author: string;
  btnLink?: string;
  btnText?: string;
};

type BlogItemProps = Omit<BlogDataType, "id" | "btnLink" | "btnText">;

const BlogData: BlogDataType[] = [
  ...blogPosts.map((post) => ({
    id: uuidv4(),
    slug: post.slug,
    img: post.image,
    parentCat: post.category,
    regularCat: post.subCategory,
    heading: `${post.title}.`,
    date: new Date(post.date).toLocaleDateString("en-CA", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    author: post.author,
  })),
];

const BlogItem = ({
  slug,
  img,
  parentCat,
  regularCat,
  heading,
  date,
  author,
}: BlogItemProps) => {
  const blogHref = `/blogs/${slug}`;

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
      <div className="single-blog-wrapper">
        <div className="blog-img-container">
            <div className="blog-img">
            <Image 
                src={img} 
                alt={heading} 
                width={400} 
                height={300} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Hover Icon */}
            <Link href={blogHref} className="blog-plus-icon">
                <FaPlus />
            </Link>
            </div>
        </div>
        
        <div className="blog-content">
          <ul className="cat-list">
            <li className="parent-cat">
              <Link href={blogHref}>{parentCat}</Link>
            </li>
            <li>
              <Link href={blogHref}>{regularCat}</Link>
            </li>
          </ul>
          
          <h4 className="blog-title">
            <Link href={blogHref}>{heading}</Link>
          </h4>
          
          <ul className="post-meta">
            <li>{date}</li>
            <li>
              <span>By</span> <Link href={blogHref}>{author}</Link>
            </li>
          </ul>
          
          {/* Read More Link */}
           <Link href={blogHref} className="l-read-more">
             Read {regularCat} Guide <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <style jsx>{`
        .pt-80 { padding-top: 80px; }
        .pb-110 { padding-bottom: 110px; }
        .mb-60 { margin-bottom: 60px; }
        .mb-30 { margin-bottom: 30px; }
        
        /* Section Title */
        .section-title span { 
            color: #16a34a; 
            font-weight: 700; 
            display: block; 
            margin-bottom: 10px; 
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .section-title h2 { 
            font-size: 36px; 
            font-weight: 900; 
            margin-bottom: 20px; 
            color: #111827; 
        }

        /* --- CARD STYLING --- */
        .single-blog-wrapper {
          background: #fff;
          border: 1px solid #e2e8f0; /* <--- DARKER, VISIBLE BORDER */
          border-radius: 15px;       /* The "Curve" */
          padding: 10px;             /* The "Frame" padding inside the border */
          transition: all 0.3s ease-in-out;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03); /* Subtle shadow initially */
        }

        .single-blog-wrapper:hover {
          transform: translateY(-8px);
          border-color: #16a34a; /* Green border on hover */
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        /* Image Container */
        .blog-img-container {
            border-radius: 12px; /* Inner radius slightly smaller than outer */
            overflow: hidden;
            position: relative;
        }

        .blog-img {
          position: relative;
          overflow: hidden;
          height: 240px;
          width: 100%;
        }
        
        .blog-img img {
            transition: transform 0.5s ease;
        }

        /* Zoom effect on hover */
        .single-blog-wrapper:hover .blog-img img {
            transform: scale(1.1);
        }

        /* Plus Icon Overlay */
        .blog-plus-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 50px;
          height: 50px;
          line-height: 54px;
          text-align: center;
          background: #fff;
          color: #16a34a;
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 16px;
          z-index: 2;
          opacity: 0;
        }

        .single-blog-wrapper:hover .blog-plus-icon {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        
        .blog-plus-icon:hover {
            background: #16a34a;
            color: #fff;
        }

        /* Content Area */
        .blog-content {
          padding: 25px 15px 25px 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        /* Categories */
        .cat-list {
          list-style: none;
          padding: 0;
          margin: 0 0 12px;
          display: flex;
          gap: 15px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .cat-list a { color: #9ca3af; text-decoration: none; transition: 0.3s; }
        .cat-list a:hover { color: #16a34a; }
        .parent-cat a { color: #16a34a; }

        /* Title */
        .blog-title {
            margin-bottom: 15px;
        }
        .blog-title a {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          text-decoration: none;
          line-height: 1.4;
          transition: 0.3s;
          display: block;
        }
        .blog-title a:hover { color: #16a34a; }

        /* Meta Data (Date / Author) */
        .post-meta {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }
        .post-meta a { color: #6b7280; text-decoration: none; transition: 0.3s; font-weight: 600; }
        .post-meta a:hover { color: #16a34a; }
        .post-meta span { margin-right: 4px; font-weight: 400; }

        /* Read More Button */
        .l-read-more {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #16a34a;
          font-weight: 800;
          text-decoration: none;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: 0.3s;
        }
        .l-read-more:hover {
            color: #111827;
            gap: 12px;
        }
        
        @media (max-width: 768px) {
            .blog-title a { font-size: 20px; }
            /* On mobile, we still keep the frame design but slightly adjust padding */
            .single-blog-wrapper { padding: 8px; } 
            .blog-content { padding: 20px 10px; }
        }
      `}</style>

      <div className="blog-area bg-white pt-80 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <span>Latest News & Blog</span>
                <h2>
                  Daily updated latest articles <br /> directly from the blog
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {BlogData.map((data) => (
              <BlogItem
                key={data.id}
                slug={data.slug}
                img={data.img}
                parentCat={data.parentCat}
                regularCat={data.regularCat}
                heading={data.heading}
                date={data.date}
                author={data.author}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;