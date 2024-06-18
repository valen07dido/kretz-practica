import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const result=await sql`SELECT * FROM models;`
        return NextResponse.json(result.rows,{status:200})
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}