import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const pageNumber = request.headers.get("page");

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=25&page=${pageNumber}`, {
        method: "GET",
        headers: {
            "accept": "application/json",
        }
    });

    const data = await response.json();
    console.log(data);

    return NextResponse.json({ data: data });
}