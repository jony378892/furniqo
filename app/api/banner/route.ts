import connectDB from "@/lib/db";
import Banner from "@/modals/banner.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  connectDB();
  const bannerProduct = await Banner.find().sort();
  return new NextResponse(JSON.stringify(bannerProduct));
};
