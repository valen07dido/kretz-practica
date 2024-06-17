import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const result = await sql`SELECT * FROM Models;`;
        const models = result.rows.map(row => ({
          id: row.id,
          name: row.name,
          weight: row.weight.replace(/[{}]/g, '').split(','),
          image: row.image,
          description: row.description
        }));
        return NextResponse.json(models, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }
