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


    const existingModels = await sql`SELECT * FROM "Models" WHERE "name" = ${ModelName};`;
    if (existingModels.rowCount > 0) {
      return NextResponse.json(
        { error: "El modelo ya existe" },
        { status: 400 }
      );
    }

    const imageArray = `{${ModelImage.map(img => `"${img.replace(/"/g, '""')}"`).join(',')}}`;
    const characteristicsArray = `{${characteristics.map(char => `"${char.replace(/"/g, '""')}"`).join(',')}}`;
    await sql`
      INSERT INTO "Models" (name, description, image, categories, solutions, characteristics, carrousel)
      VALUES (
        ${ModelName},
        ${ModelDescription},
        ${imageArray}, 
        ${categories},
        ${solutions},
        ${characteristicsArray}, 
        ${carrousel}
      );
    `;

    return NextResponse.json({ Create: "Modelo creado exitosamente" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}