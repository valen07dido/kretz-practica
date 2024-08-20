import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await sql`
      INSERT INTO "Users" (email, password, name)
      VALUES (${email}, ${hashedPassword}, ${name})
      RETURNING id, email, name, created_at;
    `;

    return NextResponse.json({ user: result.rows[0] }, { status: 201 });
  } catch (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: "El email ya está en uso" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
