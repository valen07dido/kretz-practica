import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    console.log("Iniciando la consulta a la base de datos"); // Depuración

    const result = await sql`SELECT * FROM "Models";`;
    console.log("Datos recuperados de la base de datos:", result.rows); // Depuración

    const response = NextResponse.json(result.rows, { status: 200 });
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    console.log("Enviando la respuesta"); // Depuración
    return response;
  } catch (error) {
    console.error("Error en la consulta:", error); // Depuración
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}