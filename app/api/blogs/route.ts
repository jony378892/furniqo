import connectDB from "@/src/lib/db";
import Blog from "@/src/modals/blog.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const blogs = await Blog.find({});
    if (!blogs || blogs.length === 0) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "No Blogs found" })
      );
    }

    return new NextResponse(JSON.stringify({ success: true, data: blogs }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error", error);
      throw new Error("Error", error);
    } else {
      console.error("Unknown error Error", error);
      throw new Error("Unknow error occurred");
    }
  }
};
