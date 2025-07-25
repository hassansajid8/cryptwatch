import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const id = request.headers.get("id");
    const days = request.headers.get("days");

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`, {
        method: "GET",
        headers: {
            "accept": "application/json",
        }
    });

    const data = await response.json();

    return NextResponse.json({ data: data });
}