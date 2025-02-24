import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch(
      "http://14.225.204.163:7295/api/ProductWeb/GetAllProduct",
      {
        method: "POST",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
