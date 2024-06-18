import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const randomSuffix = Math.random().toString(36).substring(7); 

        const queryString = `
            SELECT * FROM models
            WHERE md5(id::text || '${randomSuffix}') = md5(id::text || '${randomSuffix}');
        `;

        const result = await sql.query(queryString);

        return NextResponse.json(result.rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
