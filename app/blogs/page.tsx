"use client";

import Error from "@/src/components/error";
import Loading from "@/src/components/Loading";
import useFetch from "@/src/hooks/useFetch";
import Blog from "@/src/interfaces/blog.interface";

export default function BlogPage() {
  const { data: blogs, loading, error } = useFetch<Blog>("/api/blogs");

  return (
    <section className="custom-width bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          furniqo <span className="text-amber-600">Blog</span>
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Insights, trends, and stories from the world of modern furniture and
          interior design — curated by the furniqo team.
        </p>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <div className="space-y-8">
            {blogs?.map((blog, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 hover:bg-gray-50 transition-colors p-4 rounded-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {blog.title}
                  </h2>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <span className="text-xs text-amber-600 uppercase font-medium">
                  {blog.category}
                </span>
                <p className="text-gray-600 mt-2">{blog.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
