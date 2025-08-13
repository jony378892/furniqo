import connectDB from "@/lib/db";
import Product from "@/modals/product.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const product = await Product.find({});
    if (!product || product.length === 0) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "No product found" })
      );
    }

    return new NextResponse(JSON.stringify({ success: true, data: product }));
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
