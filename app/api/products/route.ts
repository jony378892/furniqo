// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const port = request.nextUrl.port; // or whatever param you need

  const response = NextResponse.json({
    message: "Hello from products route",
  });

  return response;
}
