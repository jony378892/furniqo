import connectDB from "@/lib/db";
import Showcase from "@/modals/showcase.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const data = await Showcase.find();
    if (!data) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "No data found" })
      );
    }
    return new NextResponse(JSON.stringify({ success: true, data }));
  } catch (error: unknown) {
    if (error) {
      return new NextResponse(
        JSON.stringify({ success: false, data: "Some error occoured" })
      );
    }
  }
};
