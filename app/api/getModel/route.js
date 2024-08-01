import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {

    const result = await sql`SELECT * FROM "Models";`;

    const response = NextResponse.json(result.rows, { status: 200 });

    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error en la consulta:", error); // Depuración
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
