import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      ModelName,
      ModelDescription,
      ModelImage,
      categories,
      solutions,
      characteristics,
      carrousel
    } = await request.json();

    if (!ModelName || !ModelDescription || !ModelImage || !categories || !solutions || !characteristics) {
      throw new Error("Faltan datos");
    }

    const existingModels = await sql`SELECT * FROM Models WHERE Name = ${ModelName};`;
    if (existingModels.rows.length > 0) {
      return NextResponse.json(
        { error: "El modelo ya existe" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO Models (Name, Description, Image, Categories, Solutions, Characteristics, Carrousel)
      VALUES (
        ${ModelName},
        ${ModelDescription},
        ${ModelImage}, -- Asumimos que ModelImage es un array de URLs
        ${categories},
        ${solutions},
        ${characteristics}, -- Asumimos que characteristics es un array de strings
        ${carrousel}
      );
    `;

    return NextResponse.json({ Create: "Modelo creado exitosamente" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}