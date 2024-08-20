import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const result = await sql`SELECT id, email, name, rol, created_at FROM "Users"`;
    
    console.log(result.rows); // Esto te ayudará a ver cuántos registros estás recibiendo
    
    const response = NextResponse.json(result.rows, { status: 200 });

    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
