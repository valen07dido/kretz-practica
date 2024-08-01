import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const id = pathname.split("/").pop();

    try {
        const {
            name,
            description,
            image,
            categories,
            solutions,
            characteristics,
            carrousel,
        } = await request.json();

        // Construir un objeto con solo los campos definidos
        const fieldsToUpdate = {
            ...(name !== undefined && { name }),
            ...(description !== undefined && { description }),
            ...(image !== undefined && { image }),
            ...(categories !== undefined && { categories }),
            ...(solutions !== undefined && { solutions }),
            ...(characteristics !== undefined && { characteristics }),
            ...(carrousel !== undefined && { carrousel }),
        };

        // Verificar si hay campos para actualizar
        if (Object.keys(fieldsToUpdate).length === 0) {
            return NextResponse.json({ error: "No fields to update" }, { status: 400 });
        }

        // Construir las cláusulas SET dinámicamente
        const setClauses = Object.entries(fieldsToUpdate)
            .map(([key], index) => `"${key}" = $${index + 1}`)
            .join(", ");

        // Construir los valores para los placeholders
        const values = Object.values(fieldsToUpdate);

        // Construir la consulta completa
        const query = `
            UPDATE "Models"
            SET ${setClauses}
            WHERE id = $${values.length + 1}
        `;

        // Ejecutar la consulta
        await sql.query(query, [...values, id]);

        return NextResponse.json({ update: "ok" }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
