import connectDB from "@/src/lib/db";
import Banner from "@/src/modals/banner.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  connectDB();
  const bannerProduct = await Banner.find().sort();
  return new NextResponse(JSON.stringify(bannerProduct));
};
