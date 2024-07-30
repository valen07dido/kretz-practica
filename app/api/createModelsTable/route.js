import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    const result = await sql` CREATE TABLE IF NOT EXISTS "Models" (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        Name varchar(255),
        Image text[],
        Description varchar(255),
        Categories varchar(255),
        Solutions varchar(255),
        Characteristics text[],
        Carrousel boolean
      );
    `;
    return NextResponse.json({ result, done:"create" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
