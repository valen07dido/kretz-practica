import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { ModelName, Modelweight, ModelImage, ModelDescription } = await request.json();

    if (!ModelName || !ModelDescription || !ModelImage || !Modelweight) {
      throw new Error("faltan datos");
    }

    const existingModels = await sql`SELECT * FROM Models WHERE Name = ${ModelName};`;
    if (existingModels.rows.length > 0) {
      return NextResponse.json(
        { error: "El modelo ya existe" },
        { status: 400 }
      );
    }

    const weightArray = `{${Modelweight.join(',')}}`;

    await sql`
      INSERT INTO Models (Name, Weight, Image, Description)
      VALUES (${ModelName}, ${weightArray}, ${ModelImage}, ${ModelDescription});
    `;

    return NextResponse.json({Create: "modelo creado exitosamente"}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}