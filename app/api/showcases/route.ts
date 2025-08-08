import connectDB from "@/src/lib/db";
import Showcase from "@/src/modals/showcase.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const data = await Showcase.find();
    if (data) {
      console.log(data);
      return new NextResponse(JSON.stringify({ success: true, data }));
    }
  } catch (error: unknown) {
    if (error) {
      return new NextResponse(
        JSON.stringify({ success: false, data: "Some error occoured" })
      );
    }
  }
};
