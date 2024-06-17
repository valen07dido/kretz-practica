import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Models (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        Name varchar(255),
        Weight text[],
        Image varchar(255),
        Description varchar(255)
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}