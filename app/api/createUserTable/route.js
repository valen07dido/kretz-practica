import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    const result = await sql`
      CREATE TABLE IF NOT EXISTS "Users" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name VARCHAR(255),
        rol VARCHAR(255) CHECK (rol IN ('client', 'admin')) DEFAULT 'client',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return NextResponse.json({ result, done: "create" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
