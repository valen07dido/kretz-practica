import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { ModelName, Modelweight, ModelImage, ModelDescription } = await request.json(); 
    const existingModels = await sql`SELECT * FROM Models WHERE Name = ${ModelName};`;

    if (!ModelName || !ModelDescription || !ModelImage || !Modelweight) throw new Error('faltan datos');


    if (existingModels.rows.length > 0) {
      return NextResponse.json({ error: 'El modelo ya existe' }, { status: 400 });
    }
    await sql`INSERT INTO Models (Name, Weight, Image, Description) VALUES (${ModelName}, ${Modelweight}, ${ModelImage}, ${ModelDescription});`;
    
    const models = await sql`SELECT * FROM Models;`;
    return NextResponse.json( models.rows , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}