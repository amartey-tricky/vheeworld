import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Basic V25aTnBxSjoIxOGM0M2ZhNTVjZmNiOTU3Yw=="
  );

  const body = await request.json();

  const raw = JSON.stringify({
    totalAmount: 0.03,
    description: "Test transaction",
    calbackUrl: "https://webhook.site/8e9-1a86-4847-88ce-86ae2d60ae58",
    returnUrl: "http://hubtel.com/online",
    merchantAccountNumber: "116",
    cancellationUrl: "http://hubtel.com/online",
    clientReference: "gnwx20x9mo",
    ...body,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(
      "https://payproxyapi.hubtel.com/items/initiate",
      requestOptions
    );
    const results = await response.text();
    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
