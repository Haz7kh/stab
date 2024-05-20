import React from "react";

const blogPosts = [
  {
    img: "/path-to-blog1.jpg",
    title: "Blog Post 1",
    excerpt: "Excerpt of blog post 1.",
  },
  {
    img: "/path-to-blog2.jpg",
    title: "Blog Post 2",
    excerpt: "Excerpt of blog post 2.",
  },
  {
    img: "/path-to-blog3.jpg",
    title: "Blog Post 3",
    excerpt: "Excerpt of blog post 3.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-navy text-3xl font-bold text-center">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-white p-4 rounded shadow">
              <img src={post.img} alt={post.title} className="rounded" />
              <h3 className="text-navy text-xl font-bold mt-4">{post.title}</h3>
              <p className="text-dark-grey mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
